import type { ReactNode } from "react";

export function FeatureCard({
  badge,
  title,
  description,
  icon,
}: {
  badge: string;
  title: string;
  description?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-surface ring-1 ring-border">
          {icon ?? (
            <span className="text-xs font-semibold text-primary">{badge}</span>
          )}
        </div>
      </div>

      <div className="min-w-0">
        <div className="text-sm font-semibold text-foreground">{title}</div>
        {description && (
          <div className="mt-1 text-xs leading-5 text-muted">{description}</div>
        )}
      </div>
    </div>
  );
}


