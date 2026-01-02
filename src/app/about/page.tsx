import type { Metadata } from "next";
import React from "react";
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

            // **텍스트** 형식을 파싱하는 함수
            const parseBold = (text: string) => {
              const parts: (string | React.ReactElement)[] = [];
              const regex = /\*\*(.+?)\*\*/g;
              let lastIndex = 0;
              let match;

              while ((match = regex.exec(text)) !== null) {
                if (match.index > lastIndex) {
                  parts.push(text.substring(lastIndex, match.index));
                }
                parts.push(
                  <strong key={match.index} className="font-semibold">
                    {match[1]}
                  </strong>
                );
                lastIndex = regex.lastIndex;
              }

              if (lastIndex < text.length) {
                parts.push(text.substring(lastIndex));
              }

              return parts.length > 0 ? parts : [text];
            };

            // 제목 인덱스 찾기
            const titleIndices: number[] = [];
            paragraphs.forEach((p, idx) => {
              const isTitle = /^\*\*(.+?)\*\*$/.test(p);
              const titleMatch = p.match(/^\*\*(.+?)\*\*$/);
              const isExcluded = titleMatch && (
                titleMatch[1] === "배치 통제 체계 구현" ||
                titleMatch[1] === "쿠버네티스 기반 배포 지원"
              );
              if (isTitle && !isExcluded) {
                titleIndices.push(idx);
              }
            });

            return (
              <div className="space-y-4">
                {paragraphs.map((p, idx) => {
                  // 제목인지 확인 (단독으로 **텍스트**만 있는 경우, 단 특정 항목들은 제외)
                  const isTitle = /^\*\*(.+?)\*\*$/.test(p);
                  const titleMatch = p.match(/^\*\*(.+?)\*\*$/);
                  
                  // 특정 항목들은 제목에서 제외 (작은 글씨로 표시)
                  const isExcluded = titleMatch && (
                    titleMatch[1] === "배치 통제 체계 구현" ||
                    titleMatch[1] === "쿠버네티스 기반 배포 지원" ||
                    titleMatch[1] === "이러한 역량들로 IT Planning Manager로서, 규제 환경 안에서도 혁신하는 최적 경로를 만들어가겠습니다."
                  );
                  
                  if (isTitle && !isExcluded) {
                    const isFirstTitle = titleIndices[0] === idx;
                    const isSecondTitle = titleMatch && (
                      titleMatch[1] === "대규모 핀테크 플랫폼 운영 체계의 기틀 마련" ||
                      titleMatch[1] === "대규모 핀테크 플랫폼 운영 체계 구축"
                    );
                    return (
                      <div key={idx} className={isFirstTitle ? "" : isSecondTitle ? "pt-36" : "pt-12"}>
                        <h2 className="text-lg font-semibold tracking-tight text-primary sm:text-xl">
                          <span className="inline-block -mt-1 text-2xl font-bold leading-none">|</span> {titleMatch ? titleMatch[1] : p}
                        </h2>
                      </div>
                    );
                  }

                  // 마무리 멘트 시작 부분인지 확인
                  const isClosingSection = p.includes("개발부터 운영까지 전 과정을 아우르며");
                  
                  // 다음 문단이 "대규모 핀테크 플랫폼 운영 체계" 제목인지 확인
                  const nextIsSecondTitle = idx + 1 < paragraphs.length && 
                    (/^\*\*대규모 핀테크 플랫폼 운영 체계의 기틀 마련\*\*$/.test(paragraphs[idx + 1]) ||
                     /^\*\*대규모 핀테크 플랫폼 운영 체계 구축\*\*$/.test(paragraphs[idx + 1]));
                  
                  // "특히 금융 IT 환경에서는..." 문단 뒤에 간격 추가
                  const isBeforeSecondTitle = p.includes("특히 금융 IT 환경에서는") && p.includes("현장의 암묵지를 표준 가이드로 체계화하여");
                  
                  return (
                    <p
                      key={idx}
                      className={`whitespace-pre-line text-base font-medium leading-6 text-foreground/85 sm:text-lg sm:leading-8 ${isClosingSection ? "mt-20" : ""} ${nextIsSecondTitle ? "mb-16" : ""} ${isBeforeSecondTitle ? "mb-16" : ""}`}
                    >
                      {parseBold(p)}
                    </p>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </main>
    </div>
  );
}


