export function PhoneMock({
  title = "Dashboard",
  lines = ["Change request", "Approval", "Execution", "Evidence"],
}: {
  title?: string;
  lines?: string[];
}) {
  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="relative aspect-[9/18] w-full rounded-[2.25rem] border border-border bg-card shadow-xl shadow-black/5">
        <div className="absolute left-1/2 top-3 h-6 w-32 -translate-x-1/2 rounded-full bg-surface ring-1 ring-border" />

        <div className="p-5 pt-12">
          <div className="text-xs font-medium text-muted">Preview</div>
          <div className="mt-1 text-lg font-semibold text-foreground">
            {title}
          </div>

          <div className="mt-4 grid gap-2">
            {lines.slice(0, 4).map((l) => (
              <div
                key={l}
                className="flex items-center justify-between rounded-2xl border border-border bg-surface px-4 py-3"
              >
                <div className="text-sm font-medium text-foreground">{l}</div>
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-border bg-surface p-4">
            <div className="text-xs font-medium text-muted">Status</div>
            <div className="mt-2 h-2 w-full rounded-full bg-border">
              <div className="h-2 w-2/3 rounded-full bg-primary" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 h-1.5 w-24 -translate-x-1/2 rounded-full bg-border" />
      </div>
    </div>
  );
}


