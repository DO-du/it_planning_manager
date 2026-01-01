import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { StoryVisual } from "@/components/StoryVisual";
import { NPayOrbit } from "@/components/NPayOrbit";
import { KpiTiles } from "@/components/KpiTiles";
import { KeywordCloud } from "@/components/KeywordCloud";
import { AnimatedChecklist } from "@/components/AnimatedChecklist";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />

      <main>
        <section className="relative flex min-h-[calc(100dvh-72px)] items-center justify-center overflow-hidden px-6 py-16 sm:px-8">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-background" />
          </div>

          <div className="mx-auto w-full max-w-6xl">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted ring-1 ring-border">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {site.application.targetCompany} IT Planning Manager 지원
              </div>

              <h1 className="mt-8 text-balance text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
                안녕하세요,{" "}
                <span className="text-primary">{site.name}</span>입니다
              </h1>

              <p className="mt-6 text-pretty text-base leading-7 text-muted sm:text-lg">
                {site.summary}
              </p>

              <div className="mt-16 flex flex-col items-center gap-3 sm:flex-row">
                <a
                  href="#content"
                  className="inline-flex items-center justify-center rounded-full bg-primary/85 px-6 py-3 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 sm:px-8 sm:py-3.5 sm:text-xl"
                >
                  자세히 보기
                </a>
              </div>

              {/* removed: inline meta (initials/role/location/email/phone) */}
            </div>
          </div>
        </section>

        <section id="content" className="bg-surface">
          <div className="mx-auto w-full max-w-6xl px-6 pt-20 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
            <div className="mx-auto max-w-3xl">
              <h2 className="mt-6 text-balance text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                안녕하세요, <span className="text-primary">{site.name}</span>입니다
              </h2>
              <p className="mt-4 whitespace-pre-line text-sm leading-6.5 text-muted sm:text-base">
                {site.about}
              </p>

              {"aboutKeywords" in site && Array.isArray(site.aboutKeywords) && (
                <div className="mt-5">
                  <KeywordCloud
                    center="IT Planning Manager"
                    items={site.aboutKeywords.map((t) => ({
                      text: t,
                      emphasis:
                        t === "커뮤니케이션 능력" ||
                        t === "핀테크 플랫폼 기획·개발·운영 경험" ||
                        t === "IT 내부통제/변경관리" ||
                        t === "운영 자동화(DevOps)" ||
                        t === "실무 중심의 기술 통찰",
                    }))}
                  />
                </div>
              )}

              <div className="mt-12 flex flex-col items-center gap-3 sm:mt-13">
                <div className="inline-flex items-center rounded-full bg-primary/85 px-2 py-2 text-primary-foreground shadow-sm shadow-primary/10">
                  <Link
                    href="/about"
                    className="px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
                  >
                    소개
                  </Link>
                  <span className="mx-1 h-5 w-px bg-white/18" />
                  <Link
                    href="/skills"
                    className="px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
                  >
                    기술
                  </Link>
                  <span className="mx-1 h-5 w-px bg-white/18" />
                  <Link
                    href="/experience"
                    className="px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
                  >
                    경력
                  </Link>
                  <span className="mx-1 h-5 w-px bg-white/18" />
                  <Link
                    href="/application"
                    className="px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
                  >
                    지원
                  </Link>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/10 text-primary">
                    ✓
                  </span>
                  <span className="font-semibold">
                    자세히 보려면 이동해주세요.
                  </span>
                </div>
              </div>
            </div>

            {[
              {
                layout: "split" as const,
                title: "IT 내부통제·변경관리 운영 체계 수립",
                desc: "네이버파이낸셜의 내부통제 요구사항을 반영한 Jenkins 기반 변경관리 운영 체계를 구축했습니다.",
                orbit: true,
                visual: { variant: "flow" as const, title: "Work Control", items: ["Change request", "Approval", "Execution", "Evidence"] },
                links: [{ href: "/projects/jenkins-batch-control", label: "자세히 보기" }],
              },
              {
                layout: "kpiHero" as const,
                title: "핀테크 플랫폼 로직 검증 및 구조 개선",
                desc: "외부 통신이 제한된 환경에서도, 데이터 기반 분석과 구조 개선으로 운영 안정성과 처리 성능을 끌어올렸습니다.",
                visual: {
                  variant: "kpi" as const,
                  title: "성과 요약",
                  items: [ "Kafka 지연 94% 감소", "초당 처리량 3,000→12,000 TPS"],
                  stats: [
                    { label: "이슈 생성 시간", value: "1h+ → 0~1m" },
                    { label: "초당 처리량(TPS)", value: "3,000 → 12,000" },
                    { label: "Kafka 지연", value: "94%↓" },
                    { label: "보고서 작성 시간", value: "6h → 1h" },
                  ],
                },
                links: [{ href: "/projects/sentry-platform-modernization", label: "자세히 보기" }],
              },
              {
                layout: "split" as const,
                title: "다수 이해관계자와의 협업을 통한 리스크 대응",
                desc: "플랫폼 장애 리스크를 사전에 식별·최소화하고, 유관 부서와의 일정 조율 및 전환 계획 수립을 통해 무중단 환경 전환을 성공적으로 수행했습니다.",
                visual: {
                  variant: "checklist" as const,
                  title: "",
                  titleTone: "primary" as const,
                  items: [
                    "잠재 리스크 분석 및 선제 대응 판단",
                    "유관 부서와의 이관 일정·역할 조율",
                    "작업 대상 정의 및 이력·설정 상태 점검",
                    "구조 설계 주도 및 신규 운영 체계 구축",
                  ],
                  animated: true as const,
                },
                links: [{ href: "/projects/jenkins-split-dr-migration", label: "자세히 보기" }],
              },
              {
                layout: "wide" as const,
                title: "개발부터 운영까지 문제 해결 중심의 DevOps",
                desc: "업무 자동화 도구를 설계·개발해 운영 효율을 높이고, 개발자·운영자 모두의 불편을 해소했습니다.",
                image: "/devops.png",
                imageAlt: "DevOps 업무 자동화 및 운영 개선 다이어그램",
                visual: {
                  variant: "flow" as const,
                  title: "Automation",
                  items: ["Bot", "Dashboard", "Report", "Workflow"],
                  stats: [
                    { label: "Time", value: "3m → 10s" },
                    { label: "Weekly", value: "100+" },
                  ],
                },
                links: [{ href: "/projects/devops-end-to-end", label: "자세히 보기" }],
              },
              {
                layout: "stack" as const,
                title: "변화에 따른 선제적 판단과 실행력",
                desc: "정책 변화에 따른 환경 전환을 기획·추진하고, 가이드·교육·표준 절차로 현장에 안정적으로 정착시켰습니다.",
                image: "/guide.png",
                imageAlt: "전환 가이드 및 운영 정착 자료",
                visual: {
                  variant: "doc" as const,
                  title: "산출물",
                  items: ["전환 가이드", "체크리스트", "운영 표준 절차", "교육 커리큘럼", "감사 증적 리포트"],
                },
                links: [{ href: "/projects/policy-change-transition", label: "자세히 보기" }],
              },
            ].map((s, idx) => (
              <div key={s.title} className="mt-40 sm:mt-48">
                {/* layout variants: intentionally not all side-by-side */}
                {s.layout === "split" && (
                  <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
                    {"orbit" in s && s.orbit ? (
                      <NPayOrbit />
                    ) : (
                      <>
                        {"animated" in s.visual && s.visual.animated && s.visual.variant === "checklist" ? (
                          <AnimatedChecklist
                            title={s.visual.title}
                            titleTone={s.visual.titleTone}
                            items={s.visual.items}
                          />
                        ) : (
                          <StoryVisual
                            variant={s.visual.variant}
                            title={s.visual.title}
                            titleTone={s.visual.titleTone}
                            items={s.visual.items}
                            stats={s.visual.stats}
                          />
                        )}
                      </>
                    )}
                    <div>
                      <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                        {s.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{s.desc}</p>
                      <div className="mt-6 flex flex-wrap gap-3 text-sm">
                        {s.links.map((l) => (
                          <Link
                            key={l.href}
                            className="font-semibold text-muted transition-colors hover:text-foreground"
                            href={l.href}
                          >
                            {l.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {"layout" in s && s.layout === "kpiHero" && (
                  <div>
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
                      <div>
                        <h3 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                          {s.title}
                        </h3>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                          {s.desc}
                        </p>

                        <ul className="mt-6 list-disc space-y-1 pl-5 text-sm leading-6 text-foreground/85">
                          {s.visual.items.slice(0, 3).map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>

                        <div className="mt-7 flex flex-wrap gap-3 text-sm">
                          {s.links.map((l) => (
                            <Link
                              key={l.href}
                              className="font-semibold text-muted transition-colors hover:text-foreground"
                              href={l.href}
                            >
                              {l.label}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {s.visual.stats && (
                        <KpiTiles
                          stats={[
                            { ...s.visual.stats[0], fill: 0.7 },
                            { ...s.visual.stats[1], fill: 0.92 },
                            { ...s.visual.stats[2], fill: 0.94 },
                            { ...s.visual.stats[3], fill: 0.8 },
                          ]}
                        />
                      )}
                    </div>
                  </div>
                )}

                {s.layout === "stack" && (
                  <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-12">
                    {"image" in s && s.image ? (
                      <div className="relative -mt-10 w-full overflow-visible md:-mt-16">
                        <Image
                          src={s.image}
                          alt={("imageAlt" in s && s.imageAlt) ? s.imageAlt : s.title}
                          width={1200}
                          height={1200}
                          className="h-auto w-[92%] max-w-none select-none object-contain md:w-[96%]"
                          sizes="(min-width: 768px) 50vw, 100vw"
                        />
                      </div>
                    ) : (
                      <div />
                    )}

                    <div>
                      <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                        {s.title}
                      </h3>
                      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">{s.desc}</p>

                      <ul className="mt-6 space-y-3 text-sm leading-6 text-foreground/85">
                        <Reveal as="li" className="flex gap-3" delayMs={60}>
                          <span className="mt-0.5 text-primary">✓</span>
                          <span>인프라 구조 분석 및 사전 검증</span>
                        </Reveal>
                        <Reveal as="li" className="flex gap-3" delayMs={220}>
                          <span className="mt-0.5 text-primary">✓</span>
                          <span>전환 가이드 제작 및 공유</span>
                        </Reveal>
                      </ul>

                      <div className="mt-7 flex flex-wrap gap-3 text-sm">
                        {s.links.map((l) => (
                          <Link
                            key={l.href}
                            className="font-semibold text-muted transition-colors hover:text-foreground"
                            href={l.href}
                          >
                            {l.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {s.layout === "wide" && (
                  <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
                    <div className="lg:col-span-2">
                      <h3 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                        {s.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">{s.desc}</p>
                      <div className="mt-6 flex flex-wrap gap-3 text-sm">
                        {s.links.map((l) => (
                          <Link
                            key={l.href}
                            className="font-semibold text-muted transition-colors hover:text-foreground"
                            href={l.href}
                          >
                            {l.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-1">
                      {"image" in s && s.image ? (
                        <div className="relative mt-10 w-full overflow-visible lg:mt-16">
                          <Reveal delayMs={160} variant="left">
                            <Image
                              src={s.image}
                              alt={("imageAlt" in s && s.imageAlt) ? s.imageAlt : s.title}
                              width={960}
                              height={960}
                              className="h-auto w-[120%] max-w-none select-none object-contain lg:w-[155%]"
                              sizes="(min-width: 1024px) 40vw, 100vw"
                            />
                          </Reveal>
                        </div>
                      ) : (
                        <StoryVisual
                          variant={s.visual.variant}
                          title={s.visual.title}
                          items={s.visual.items}
                          stats={s.visual.stats}
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="mt-40 flex justify-center">
              <Link
                href="/projects"
                className="group inline-flex w-full max-w-lg items-center justify-center rounded-[22px] bg-primary/85 px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/10 transition-colors hover:bg-primary/90 sm:px-6 sm:py-3"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/14 text-sm font-bold leading-none text-primary-foreground sm:h-8 sm:w-8">
                    ■
                  </span>
                  <span className="text-sm font-semibold tracking-tight sm:text-base">
                    Projects
                  </span>
                </span>
                <span className="mx-4 h-5 w-px bg-white/18 sm:mx-5" />
                <span className="text-sm tracking-tight sm:text-base">전체 프로젝트 보기</span>
              </Link>
            </div>

            <footer className="mt-16 border-t border-border pt-8 text-sm text-muted">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p>
                  © {new Date().getFullYear()} {site.name}. All rights reserved.
                </p>
                <p className="text-xs">
                  바이브코딩으로 직접 구현한 포트폴리오입니다.
                </p>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
