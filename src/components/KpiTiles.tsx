"use client";

import { useEffect, useRef, useState } from "react";

export type KpiStat = { label: string; value: string; fill?: number };

export function KpiTiles({ stats }: { stats: KpiStat[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  // 0..1 progress based on how much this block has entered the viewport.
  // We keep the max progress so it fills while scrolling down and doesn't "unfill" when scrolling up.
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const clamp01 = (n: number) => Math.max(0, Math.min(1, n));
    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        // Start filling once it begins to enter, and reach full around ~40% visibility.
        // Tune these numbers for "fills while coming down" feel.
        const start = 0.05;
        const end = 0.4;
        const raw = (entry.intersectionRatio - start) / (end - start);
        const next = clamp01(raw);

        setProgress((p) => Math.max(p, next));

        if (next >= 1) {
          io.disconnect();
        }
      },
      // Trigger frequently for smooth progress updates and start a bit earlier.
      { threshold: thresholds, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid gap-4 sm:grid-cols-2">
      {stats.slice(0, 4).map((st, idx) => {
        const fill = Math.max(0, Math.min(1, st.fill ?? 0.6));
        return (
          <div
            key={`${st.label}-${st.value}`}
            className="relative bg-surface/50 p-5 pl-6"
          >
            <div className="absolute left-0 top-1/2 h-24 -translate-y-1/2 w-1 bg-primary/30" />
            <div className="text-xs font-medium text-muted/80">{st.label}</div>
            <div className="mt-1.5 text-2xl font-bold tracking-tight text-foreground">
              {st.value}
            </div>
            <div className="relative mt-5 flex h-4 w-full gap-1 overflow-hidden">
              {Array.from({ length: 20 }).map((_, segmentIdx) => {
                const filledSegments = Math.round(fill * 20 * progress);
                const isFilled = segmentIdx < filledSegments;
                
                return (
                  <div
                    key={segmentIdx}
                    className={`relative flex-1 rounded-full transition-colors duration-1000 ease-out ${
                      isFilled 
                        ? "bg-primary/70 dark:bg-primary/60" 
                        : "bg-border/40 dark:bg-border/30"
                    }`}
                    style={{
                      transitionDelay: `${idx * 120 + segmentIdx * 30}ms`,
                    }}
                  />
                );
              })}
              {progress >= 1 && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" 
                    style={{
                      width: `${fill * 100}%`,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}


