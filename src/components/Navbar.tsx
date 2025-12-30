import Link from "next/link";
import { site } from "@/lib/site";

const navItems = [
  { href: "/about", label: "소개" },
  { href: "/skills", label: "기술" },
  { href: "/experience", label: "경력" },
  { href: "/application", label: "지원" },
  { href: "/projects", label: "프로젝트" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-semibold tracking-tight text-foreground"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-card text-lg shadow-sm ring-1 ring-border">
            {"profileEmoji" in site ? site.profileEmoji : "👩🏻‍💻"}
          </span>
          <span className="hidden sm:block">포트폴리오</span>
        </Link>

        <nav className="flex items-center gap-1 overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}


