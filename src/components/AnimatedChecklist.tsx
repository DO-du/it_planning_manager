 "use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

export function AnimatedChecklist({
  title,
  titleTone = "primary",
  items,
  footer,
}: {
  title: string;
  titleTone?: "primary" | "default";
  items: string[];
  footer?: ReactNode;
}) {
  const titleClass =
    titleTone === "primary"
      ? "text-lg font-semibold text-primary"
      : "text-lg font-semibold text-foreground";

  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -15% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {title ? <div className={titleClass}>{title}</div> : null}
      <div className="mt-5 grid">
        {items.map((t, i) => (
          <div
            key={t}
            className={`acl-row flex w-full items-center gap-3 py-3 ${active ? "acl-row-on" : ""}`}
            style={{ ["--d" as any]: `${i * 140}ms` }}
          >
            <span className={`acl-check grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary ${active ? "acl-check-on" : ""}`}>
              ✓
            </span>
            <div className="text-sm font-medium text-foreground">{t}</div>
          </div>
        ))}
      </div>
      {footer && <div className="mt-4 text-sm text-muted">{footer}</div>}
    </div>
  );
}
