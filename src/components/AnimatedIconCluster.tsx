import type { ReactNode } from "react";

type OrbitItem = {
  label: string;
  icon?: ReactNode;
  tone?: "primary" | "neutral";
};

function Bubble({
  children,
  tone = "neutral",
  className = "",
}: {
  children: ReactNode;
  tone?: OrbitItem["tone"];
  className?: string;
}) {
  const base =
    "grid h-12 w-12 place-items-center rounded-2xl border border-border bg-card shadow-sm";
  const tint =
    tone === "primary" ? "ring-1 ring-ring text-primary" : "text-muted";
  return <div className={`${base} ${tint} ${className}`}>{children}</div>;
}

export function AnimatedIconCluster({
  centerLabel,
  centerIcon,
  items,
  caption,
}: {
  centerLabel: string;
  centerIcon?: ReactNode;
  items: OrbitItem[];
  caption?: string;
}) {
  return (
    <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
      <div className="text-xs font-medium text-muted">Preview</div>
      <div className="mt-1 text-lg font-semibold text-foreground">
        {centerLabel}
      </div>
      {caption && <div className="mt-1 text-sm text-muted">{caption}</div>}

      <div className="relative mt-8 grid place-items-center py-10">
        {/* soft blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute left-10 top-8 h-40 w-40 rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute bottom-6 right-8 h-44 w-44 rounded-full bg-primary/6 blur-3xl" />
        </div>

        {/* orbit ring */}
        <div className="relative h-[260px] w-[260px]">
          <div className="absolute inset-0 rounded-full border border-border/70 bg-surface/50" />

          {/* orbiting items */}
          <div className="toss-orbit absolute inset-0">
            {items.slice(0, 8).map((it, idx) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={`${it.label}-${idx}`}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `rotate(${(360 / Math.min(items.length, 8)) * idx}deg) translateX(128px)`,
                }}
              >
                <Bubble
                  tone={it.tone}
                  className="toss-orbit-item -translate-x-1/2 -translate-y-1/2"
                >
                  {it.icon ?? (
                    <span className="text-xs font-semibold">{it.label}</span>
                  )}
                </Bubble>
              </div>
            ))}
          </div>

          {/* center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="toss-pulse rounded-3xl border border-border bg-background px-6 py-5 shadow-md">
              <div className="flex items-center gap-3">
                <Bubble tone="primary" className="h-12 w-12">
                  {centerIcon ?? (
                    <span className="text-sm font-semibold text-primary">
                      {centerLabel.slice(0, 2)}
                    </span>
                  )}
                </Bubble>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-foreground">
                    {centerLabel}
                  </div>
                  <div className="mt-1 text-xs text-muted">
                    요청·승인·실행·증적이 하나로 연결
                  </div>
                </div>
              </div>
              <div className="mt-4 h-2 w-full rounded-full bg-border">
                <div className="h-2 w-3/5 rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-muted">
          프로세스 요소들이 연결되는 모습을 시각화했습니다.
        </div>
      </div>
    </div>
  );
}


