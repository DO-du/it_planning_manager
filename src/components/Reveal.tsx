"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type AsTag = "div" | "li" | "span";

export function Reveal({
  as = "div",
  children,
  className,
  variant = "fade",
  delayMs = 0,
  once = true,
}: {
  as?: AsTag;
  children: ReactNode;
  className?: string;
  variant?: "fade" | "rise" | "left";
  delayMs?: number;
  once?: boolean;
}) {
  const Tag = as as any;
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          setActive(true);
          if (once) io.disconnect();
        } else if (!once) {
          setActive(false);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -12% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref as any}
      className={`reveal ${variant === "rise" ? "reveal-rise" : ""} ${variant === "left" ? "reveal-left" : ""} ${active ? "reveal-on" : ""} ${className ?? ""}`}
      style={{ ["--d" as any]: `${delayMs}ms` }}
    >
      {children}
    </Tag>
  );
}


