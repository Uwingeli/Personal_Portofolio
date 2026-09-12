import { SOCIAL } from "@/data/profile"

export function Footer() {
  return (
    <footer className="relative z-[1] border-t border-border py-7">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-3 px-8">
        <div className="text-[15px] font-bold">
          <span className="text-violet">U</span>wingeli
          <span className="font-normal text-muted-foreground/60">.dev</span>
        </div>
        <span className="text-[13px] text-muted-foreground/60">
          © 2026 Uwingeli Romeo · Kigali, Rwanda
        </span>
        <div className="flex gap-4">
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-muted-foreground/60 transition-colors hover:text-violet"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}