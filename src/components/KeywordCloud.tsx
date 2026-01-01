import type { ReactNode } from "react";

type Item = { text: string; emphasis?: boolean };

function Pill({ children, emphasis }: { children: ReactNode; emphasis?: boolean }) {
  if (emphasis) {
    return (
      <span className="bg-gradient-to-r from-primary via-sky-500 to-indigo-500 bg-clip-text text-sm font-semibold text-transparent">
        {children}
      </span>
    );
  }

  return (
    <span className="text-sm font-semibold text-muted">
      {children}
    </span>
  );
}

export function KeywordCloud({
  center,
  items,
}: {
  center: string;
  items: Item[];
}) {
  const positions = [
    { x: -280, y: -90 },
    { x: 60, y: -80 },
    { x: 200, y: -40 },
    { x: -350, y: -10 },
    { x: 100, y: 100 },
    { x: -220, y: 90 },
    { x: -320, y: 30 },
    { x: -60, y: 50 },
    { x: 230, y: 10 },
    { x: -20, y: 160 },
    { x: -350, y: -10 },
    { x: 200, y: -160 },
  ].slice(0, items.length); // prevent duplicated keywords

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="relative h-[220px] w-full">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="keyword-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl">
            {center}
          </span>
        </div>

        {/* free-form positioned pills */}
        {positions.map((pos, idx) => {
          const it = items[idx];
          return (
            <div
              key={`${it.text}-${idx}`}
              className="absolute left-1/2 top-1/2"
              style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
            >
              <div
                className="keyword-pop keyword-float -translate-x-1/2 -translate-y-1/2"
                style={{ animationDelay: `${idx * 140}ms` }}
              >
                <Pill emphasis={it.emphasis}>{it.text}</Pill>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


