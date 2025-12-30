import type { Project } from "@/lib/site";
import Link from "next/link";

export function ProjectCard({ project }: { project: Project }) {
  const canDetail = Boolean(project.detail);

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-foreground">
            {project.name}
          </h3>
          {project.summary && (
            <p className="mt-2 text-sm leading-6 text-muted">
              {project.summary}
            </p>
          )}
        </div>
      </div>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-6 text-foreground/85">
        {project.highlights.slice(0, 2).map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li
            key={t}
            className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-muted"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="relative z-20 mt-5 flex flex-wrap items-center gap-3 text-sm">
        {(project.links?.live || project.links?.github || project.links?.docs) && (
          <div className="ml-auto flex flex-wrap gap-3">
            {project.links?.live && (
              <a
                className="font-medium text-primary hover:opacity-90"
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            )}
            {project.links?.github && (
              <a
                className="font-medium text-primary hover:opacity-90"
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            )}
            {project.links?.docs && (
              <a
                className="font-medium text-primary hover:opacity-90"
                href={project.links.docs}
                target="_blank"
                rel="noreferrer"
              >
                Docs
              </a>
            )}
          </div>
        )}
      </div>
    </>
  );

  if (!canDetail) {
    return (
      <article className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm">
        {content}
      </article>
    );
  }

  return (
    <article className="group relative cursor-pointer rounded-2xl bg-gradient-to-r from-primary/70 via-sky-400/60 to-primary/70 p-[2px] shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`${project.name} 상세 보기`}
        className="absolute inset-0 z-10 rounded-2xl"
      />
      <div className="rounded-2xl bg-card p-6">
        {content}
      </div>
    </article>
  );
}


