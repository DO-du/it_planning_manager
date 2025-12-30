import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Skills",
  description: "기술 스택",
};

export default function SkillsPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />

      <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-10 sm:px-8">
        {/**
         * Minimal local UI primitives for this page (avoid introducing new shared components).
         */}
        {/**
         * Chip: lightweight, less "puffy" than previous version.
         */}
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            보유 기술 및 자격증
          </h1>
        </div>

        {"skillMatrix" in site && Array.isArray(site.skillMatrix) && (
          <div className="mt-8">
            <div className="grid gap-4 sm:gap-5">
              {site.skillMatrix.map((row) => {
                const tokens = row.items
                  .split(",")
                  .map((t) => t.trim())
                  .filter(Boolean);

                return (
                  <section
                    key={row.category}
                    className="rounded-2xl p-1 sm:p-2"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                        {row.category}
                      </h3>
                      <div className="h-px flex-1 bg-border/60" />
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {tokens.map((t) => (
                        <span
                          key={`${row.category}-${t}`}
                          className="inline-flex items-center rounded-full border border-border/70 bg-transparent px-3 py-1 text-xs font-semibold text-foreground/85 shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-colors hover:bg-surface/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-12">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <ul className="divide-y divide-border/70">
              {site.certifications.map((c) => (
                <li
                  key={`${c.name}-${c.date}`}
                  className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <div className="min-w-0 text-sm font-semibold text-foreground">
                    {c.name}
                  </div>
                  <div className="shrink-0 text-xs font-medium text-muted sm:text-sm">
                    {c.date}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}


