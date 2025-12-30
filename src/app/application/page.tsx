import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Application",
  description: "지원 (IT Planning Manager)",
};

export default function ApplicationPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />

      <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-10 sm:px-8">
        {(() => {
          return (
            <div>
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  IT Planning Manager
                </h1>
              </div>

              {/* 1:1 mapping */}
              <div className="mt-12">
                <div className="mt-4">
                  {site.application.jdMapping.map((row) => (
                    <div
                      key={row.jd}
                      className="border-b border-border/70 py-6 first:pt-0 last:border-b-0 last:pb-0"
                    >
                      <div className="grid gap-4 sm:grid-cols-[1fr_1fr] sm:gap-8">
                        <div>
                          <div className="text-xs font-semibold tracking-tight text-muted">
                            JD
                          </div>
                          <div className="mt-2 text-sm font-semibold leading-6 text-foreground">
                            {row.jd}
                          </div>
                        </div>
                        <div className="sm:border-l sm:border-border/60 sm:pl-8">
                          <div className="text-xs font-semibold tracking-tight text-muted">
                            경험 / 근거
                          </div>
                          <div className="mt-2 text-sm leading-6 text-foreground/85">
                            {row.proof}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
      </main>
    </div>
  );
}


