import type { ReactNode } from "react";

type Variant = "flow" | "kpi" | "checklist" | "doc";

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
      {children}
    </div>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}

export function StoryVisual({
  variant,
  title,
  titleTone = "default",
  subtitle,
  items,
  stats,
}: {
  variant: Variant;
  title: string;
  titleTone?: "default" | "primary";
  subtitle?: string;
  items: string[];
  stats?: { label: string; value: string }[];
}) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div
            className={
              titleTone === "primary"
                ? "text-lg font-semibold text-primary"
                : "text-lg font-semibold text-foreground"
            }
          >
            {title}
          </div>
          {subtitle && (
            <div className="mt-1 text-sm leading-6 text-muted">{subtitle}</div>
          )}
        </div>
        <div className="hidden sm:flex flex-wrap justify-end gap-2">
          {stats?.slice(0, 3).map((s) => (
            <Pill key={`${s.label}-${s.value}`}>
              <span className="mr-1 text-muted">{s.label}</span>
              <span className="font-semibold text-foreground">{s.value}</span>
            </Pill>
          ))}
        </div>
      </div>

      {variant === "flow" && (
        <div className="mt-6">
          <div className="grid gap-3">
            {items.slice(0, 4).map((step, idx) => (
              <div key={step} className="relative">
                <div className="flex items-center justify-between rounded-2xl border border-border bg-surface px-4 py-3">
                  <div className="text-sm font-medium text-foreground">{step}</div>
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                {idx < Math.min(items.length, 4) - 1 && (
                  <div className="mx-auto my-2 h-4 w-px bg-border" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-border bg-surface p-4">
            <div className="text-xs font-medium text-muted">Status</div>
            <div className="mt-2 h-2 w-full rounded-full bg-border">
              <div className="h-2 w-2/3 rounded-full bg-primary" />
            </div>
          </div>
        </div>
      )}

      {variant === "kpi" && (
        <div className="mt-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {(stats ?? []).slice(0, 4).map((s) => (
              <div
                key={`${s.label}-${s.value}`}
                className="rounded-2xl border border-border bg-surface p-4"
              >
                <div className="text-xs font-medium text-muted">{s.label}</div>
                <div className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                  {s.value}
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-border">
                  <div className="h-2 w-3/5 rounded-full bg-primary" />
                </div>
              </div>
            ))}
          </div>

          <ul className="mt-5 list-disc space-y-1 pl-5 text-sm leading-6 text-foreground/85">
            {items.slice(0, 3).map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      )}

      {variant === "checklist" && (
        <div className="mt-6 grid gap-2">
          {items.slice(0, 6).map((t) => (
            <div
              key={t}
              className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3"
            >
              <div className="grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary">
                ✓
              </div>
              <div className="text-sm font-medium text-foreground">{t}</div>
            </div>
          ))}
        </div>
      )}

      {variant === "doc" && (
        <div className="mt-6">
          <div className="grid gap-3">
            {items.slice(0, 4).map((t, idx) => (
              <div
                key={t}
                className="flex items-center justify-between rounded-2xl border border-border bg-surface px-4 py-3"
              >
                <div className="min-w-0 flex items-center gap-2">
                  <span className="text-base">📄</span>
                  <div>
                    <div className="text-xs font-medium text-muted">Doc {idx + 1}</div>
                    <div className="mt-0.5 truncate text-sm font-semibold text-foreground">
                      {t}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 text-sm text-muted">
            구조화된 산출물로 표준화/교육/공유가 가능한 체계를 만듭니다.
          </div>
        </div>
      )}
    </Card>
  );
}


