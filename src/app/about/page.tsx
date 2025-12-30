import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "소개",
};

export default function AboutPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />

      <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-10 sm:px-8">
        <section className="rounded-3xl border border-border bg-background p-6 sm:p-10">
          <div className="grid gap-8 md:grid-cols-[140px_1fr_240px] md:items-start">
            {/* left: emoji */}
            <div className="flex items-start">
              <div className="grid h-24 w-24 place-items-center rounded-2xl bg-surface text-4xl ring-1 ring-border sm:h-28 sm:w-28 sm:text-5xl">
                {"profileEmoji" in site ? site.profileEmoji : "👩🏻‍💻"}
              </div>
            </div>

            {/* middle: title + name + personal */}
            <div className="min-w-0">
              <div className="text-sm font-semibold tracking-tight text-primary">
                {site.role}
              </div>
              <h1 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                {site.name}{" "}
                {"nameEn" in site && site.nameEn ? (
                  <span className="font-semibold text-foreground/80">
                    {site.nameEn}
                  </span>
                ) : null}
              </h1>
              {"gender" in site && "birthDate" in site && (
                <div className="mt-3 text-sm font-medium text-muted">
                  ({site.gender}) {site.birthDate}
                </div>
              )}
            </div>

            {/* right: contact */}
            <div className="md:border-l md:border-border md:pl-8">
              <div className="grid gap-5 text-sm">
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <a
                    className="mt-1 inline-block font-semibold text-foreground/85 underline-offset-4 hover:underline"
                    href={`tel:${site.phone.replaceAll("-", "")}`}
                  >
                    {site.phone}
                  </a>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <a
                    className="mt-1 inline-block font-semibold text-foreground/85 underline-offset-4 hover:underline"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-12 max-w-3xl">
          {(() => {
            const text =
              "aboutLong" in site && site.aboutLong ? site.aboutLong : site.about;
            const paragraphs = text
              .split(/\n\s*\n+/g)
              .map((p) => p.trim())
              .filter(Boolean);

            return (
              <div className="space-y-8">
                {paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className="whitespace-pre-line text-base font-medium leading-6 text-foreground/85 sm:text-lg sm:leading-8"
                  >
                    {p}
                  </p>
                ))}
              </div>
            );
          })()}
        </div>
      </main>
    </div>
  );
}


