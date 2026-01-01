import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Career",
  description: "경력",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />

      <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-10 sm:px-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            경력 사항
          </h1>
        </div>

        {"careerTimeline" in site && Array.isArray(site.careerTimeline) ? (
          <div className="mt-10">
            {"careerOverview" in site && Array.isArray(site.careerOverview.lines) && (
              <div className="max-w-4xl">
                {site.careerOverview.lines.map((t, idx) => {
                  if (idx === 0) {
                    // "NIT Service (네이버 계열사) 네이버파이낸셜 플랫폼 운영 팀"을 분리
                    const parts = t.split(" 네이버파이낸셜 플랫폼 운영 팀");
                    return (
                      <div
                        key={t}
                        className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
                      >
                        {parts[0]}
                        {parts[1] !== undefined && (
                          <>
                            {" "}
                            <span className="text-lg sm:text-xl">네이버파이낸셜 플랫폼 운영 팀</span>
                          </>
                        )}
                      </div>
                    );
                  }
                  return (
                    <div
                      key={t}
                      className={
                        idx === 1
                          ? "mt-2 text-lg font-semibold tracking-tight text-foreground/85 sm:text-xl"
                          : "mt-5 text-base font-medium tracking-tight text-muted/70 sm:text-lg"
                      }
                    >
                      {t}
                    </div>
                  );
                })}
              </div>
            )}
            <div className="mt-10 grid gap-12 border-t border-border/60 pt-10">
              {site.careerTimeline.map((item) => (
                <div
                  key={`${item.title}-${item.period}`}
                  className="grid grid-cols-[96px_20px_1fr] gap-4 sm:grid-cols-[160px_24px_1fr] sm:gap-6"
                >
                  {/* left: period */}
                  <div className="whitespace-nowrap text-sm font-semibold text-muted/80 md:pt-1">
                    {item.period}
                  </div>

                  {/* middle: line + dot (next to period) */}
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border/55" />
                    <div className="absolute left-1/2 top-1.5 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full bg-background ring-1 ring-border/60">
                      <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                    </div>
                  </div>

                  {/* right: content */}
                  <div className="min-w-0 pb-2">
                    <div className="pb-2">
                      <h2 className="text-balance text-xl font-semibold tracking-tight sm:text-2xl">
                        {item.title}
                      </h2>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-sm">
                        {item.subtitle && (
                          <span className="font-semibold text-primary">
                            {item.subtitle}
                          </span>
                        )}
                      </div>
                    </div>

                    {item.work?.length ? (
                      <div className="mt-5">
                        <div className="text-sm font-semibold text-foreground">주요 업무</div>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-foreground/85 marker:text-muted">
                          {item.work.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {item.impact?.length ? (
                      <div className="mt-6">
                        <div className="text-sm font-semibold text-foreground">업무 성과</div>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-foreground/85 marker:text-muted">
                          {item.impact.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {item.metrics?.length ? (
                      <div className="mt-6">
                        <div className="text-sm font-semibold text-foreground">주요 개선 지표</div>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-foreground/85 marker:text-muted">
                          {item.metrics.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-8 grid gap-4">
            {site.experience.map((item) => (
              <div
                key={`${item.company}-${item.period}`}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div className="font-medium text-foreground">
                    {item.company} · {item.role}
                  </div>
                  <div className="text-sm text-muted">{item.period}</div>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-foreground/85">
                  {item.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}


