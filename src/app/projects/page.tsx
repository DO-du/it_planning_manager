import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "프로젝트",
  description: "프로젝트 목록",
};

export default function ProjectsPage() {
  const bySlug = new Map(site.projects.map((p) => [p.slug, p] as const));
  const chapters: { title: string; slugs: string[] }[] = [
    {
      title: "내부통제 요구사항을 반영한 운영 체계 구축",
      slugs: ["jenkins-batch-control", "audit-report-automation", "issue-response-feature"],
    },
    {
      title: "데이터 기반 문제 분석을 통한 구조 개선",
      slugs: ["sentry-platform-modernization"],
    },
    {
      title: "플랫폼 장애 리스크 최소화 및 무중단 전환",
      slugs: ["jenkins-split-dr-migration"],
    },
    {
      title: "정책 변화에 따른 신규 업무 환경 전환",
      slugs: ["policy-change-transition"],
    },
    {
      title: "업무 자동화 도구 설계·개발",
      slugs: [
        "devops-end-to-end",
        "llm-comment-automation",
        "ops-automation-alert-dashboard",
        "ops-automation-incident-jobs",
        "ops-automation-dr-load-ci",
      ],
    },
    {
      title: "문서화·교육을 통한 운영 체계 강화",
      slugs: ["guidebook-training-system"],
    },
  ];

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-10 sm:px-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            프로젝트
          </h1>
          <p className="text-sm leading-6 text-muted">
            <span className="font-semibold text-primary">파란색 테두리 카드</span>는 클릭하면 자세히 볼 수 있어요.
          </p>
        </div>

        <div className="mt-10 grid gap-20">
          {chapters.map((c) => {
            const items = c.slugs
              .map((s) => bySlug.get(s))
              .filter(Boolean);

            return (
              <section key={c.title}>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl text-muted sm:text-3xl">🌀</span>
                  <h2 className="flex-1 text-balance text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {c.title}
                  </h2>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {items.map((p) => (
                    <ProjectCard key={p!.slug} project={p!} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}


