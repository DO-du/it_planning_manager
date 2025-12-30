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
    <div ref={ref} className="grid gap-3 sm:grid-cols-2">
      {stats.slice(0, 4).map((st, idx) => {
        const fill = Math.max(0, Math.min(1, st.fill ?? 0.6));
        return (
          <div
            key={`${st.label}-${st.value}`}
            className="rounded-2xl border border-border bg-surface p-5"
          >
            <div className="text-xs font-medium text-muted">{st.label}</div>
            <div className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
              {st.value}
            </div>
            <div className="mt-4 h-2 w-full rounded-full bg-border">
              <div
                className="h-2 rounded-full bg-primary transition-[width] duration-1000 ease-out"
                style={{
                  width: `${Math.round(fill * 100 * progress)}%`,
                  transitionDelay: `${idx * 120}ms`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}


