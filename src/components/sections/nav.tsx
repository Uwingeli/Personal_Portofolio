import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { NAV_LINKS } from "@/data/profile"
import { cn } from "@/lib/utils"

export function Nav() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] border-b border-transparent transition-all duration-400",
        solid && "border-border bg-background/92 backdrop-blur-xl"
      )}
    >
      <div className="mx-auto max-w-[1160px] px-8">
        <nav className="flex h-[68px] items-center justify-between">
          <div className="font-bold text-[17px] tracking-tight">
            <span className="text-violet">U</span>wingeli
            <span className="font-normal text-muted-foreground">.dev</span>
          </div>

          <div className="flex items-center gap-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-lg px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/6 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button
              asChild
              className="ml-2 rounded-full bg-violet px-5 font-semibold hover:bg-violet-deep"
            >
              <a href="mailto:uwingeliromeo@gmail.com">Hire me</a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}