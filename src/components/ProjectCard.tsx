import type { Project } from "@/lib/site";
import Link from "next/link";

export function ProjectCard({ project }: { project: Project }) {
  const canDetail = Boolean(project.detail);

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className={`text-lg font-bold tracking-tight transition-colors ${
            canDetail 
              ? "project-card-title-detail" 
              : "text-foreground group-hover:text-primary"
          }`}>
            {project.name}
          </h3>
          {project.summary && (
            <p className={`mt-2.5 text-sm leading-6 ${
              canDetail ? "text-foreground/80" : "text-muted/90"
            }`}>
              {project.summary}
            </p>
          )}
        </div>
      </div>

      <ul className={`mt-5 space-y-2 text-sm leading-6 ${
        canDetail ? "text-foreground/75" : "text-foreground/80"
      }`}>
        {project.highlights.slice(0, 2).map((h) => (
          <li key={h} className="flex items-start gap-2.5">
            <span className={`-mt-0.5 shrink-0 text-base font-bold leading-6 ${
              canDetail ? "text-primary" : "text-primary/70"
            }`}>|</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li
            key={t}
            className={`rounded-full px-2.5 py-1 text-xs font-medium ${
              canDetail
                ? "border border-primary/20 dark:border-primary/30 bg-primary/20 dark:bg-primary/30 text-primary/90 dark:text-primary/80"
                : "border border-border/60 bg-surface/80 text-muted/90"
            }`}
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
      <article className="group relative rounded-xl border border-border/50 bg-card dark:bg-surface/50 p-6 shadow-sm transition-all hover:border-border hover:shadow-md">
        {content}
      </article>
    );
  }

  return (
    <article className="group relative cursor-pointer overflow-hidden rounded-xl bg-primary/5 dark:bg-primary/12 p-6 shadow-sm transition-all hover:bg-primary/8 dark:hover:bg-primary/18 hover:shadow-lg">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`${project.name} 상세 보기`}
        className="absolute inset-0 z-10 rounded-xl"
      />
      {content}
    </article>
  );
}


