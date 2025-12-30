import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { site } from "@/lib/site";

export function generateStaticParams() {
  // Only generate routes for projects that have detailed content.
  return site.projects
    .filter((p) => Boolean(p.detail))
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const p = site.projects.find((x) => x.slug === slug);
  if (!p) return { title: "Project", description: "프로젝트" };
  return {
    title: p.name,
    description: p.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = site.projects.find((x) => x.slug === slug);
  if (!project) return notFound();

  const detail = project.detail;

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />

      <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-10 sm:px-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.name}
          </h1>
          {project.summary && (
            <p className="max-w-3xl text-sm leading-7 text-muted sm:text-base">
              {project.summary}
            </p>
          )}
          <div className="mt-1 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {detail?.image && (
          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-background">
            <Image
              src={detail.image}
              alt={detail.imageAlt ?? project.name}
              width={1600}
              height={900}
              className="h-auto w-full object-contain"
              sizes="(min-width: 1024px) 960px, 100vw"
              priority
            />
          </div>
        )}

        {detail?.intro && (
          <p className="mt-10 max-w-3xl whitespace-pre-line text-sm leading-7 text-foreground/85 sm:text-base">
            {detail.intro}
          </p>
        )}

        <div className="mt-10 grid gap-6">
          {detail?.sections?.map((s, idx) => {
            const isMain = "isMainSection" in s && s.isMainSection;
            const gapClass = isMain && idx > 0 ? "mt-16" : "";
            const hasTopBorder = isMain && idx === 0 ? "pt-10 border-t border-border" : "";
            
            return (
              <section key={s.title} className={`${gapClass} ${hasTopBorder}`}>
                <h2
                  className={
                    isMain
                      ? "text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
                      : "ml-6 text-lg font-semibold tracking-tight text-foreground sm:text-xl"
                  }
                >
                  {s.title}
                </h2>
                {s.body && (
                  <p className={`mt-3 whitespace-pre-line text-sm leading-7 text-muted sm:text-base ${isMain ? "" : "ml-6"}`}>
                    {s.body}
                  </p>
                )}
                {s.bullets?.length ? (
                  <ul className={`mt-3 list-disc space-y-1 ${isMain ? "pl-5" : "ml-6 pl-11"} text-sm leading-7 text-foreground/85 marker:text-muted sm:text-base`}>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}


