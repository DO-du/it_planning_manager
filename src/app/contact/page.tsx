import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "연락처",
};

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="min-w-0">
        <div className="text-xs font-medium uppercase tracking-wide text-muted">
          {label}
        </div>
        <div className="mt-1 truncate text-sm font-medium text-foreground">
          {value}
        </div>
      </div>
      <div className="text-sm text-primary transition-colors group-hover:opacity-90">
        열기 →
      </div>
    </a>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-10 sm:px-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Contact
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-muted">
            빠른 연락은 이메일이 가장 좋아요. 아래 링크들은 본인 정보에 맞게
            수정해서 제출용으로 사용하세요.
          </p>
          <div>
            <Link
              href="/"
              className="text-sm font-medium text-primary hover:opacity-90"
            >
              ← 홈으로
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <ContactItem
            label="Email"
            value={site.email}
            href={`mailto:${site.email}`}
          />

          <ContactItem
            label="Phone"
            value={site.phone}
            href={`tel:${site.phone.replaceAll("-", "")}`}
          />

          {(() => {
            const github = site.links.github as string;
            if (github && github.length > 0) {
              return (
                <ContactItem
                  label="GitHub"
                  value={github.replace("https://", "")}
                  href={github}
                />
              );
            }
            return null;
          })()}

          {(() => {
            const linkedin = site.links.linkedin as string;
            if (linkedin && linkedin.length > 0) {
              return (
                <ContactItem
                  label="LinkedIn"
                  value={linkedin.replace("https://", "")}
                  href={linkedin}
                />
              );
            }
            return null;
          })()}

          {(() => {
            const blog = site.links.blog as string;
            if (blog && blog.length > 0) {
              return (
                <ContactItem
                  label="Blog"
                  value={blog.replace("https://", "")}
                  href={blog}
                />
              );
            }
            return null;
          })()}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6 text-sm leading-6 text-foreground/85 shadow-sm">
          <p className="font-medium text-foreground">제출 팁</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>프로젝트마다 역할/기여/성과(숫자)를 2~3개 넣어주세요.</li>
            <li>라이브 링크가 없다면 GitHub/데모 영상 링크라도 추가하면 좋아요.</li>
            <li>
              이 페이지의 내용은 <code className="font-mono">src/lib/site.ts</code>
              에서 한 번에 관리할 수 있어요.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}


