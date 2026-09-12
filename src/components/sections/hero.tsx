import { Button } from "@/components/ui/button"
import { useRoleTyper } from "@/hooks/use-role-typer"
import { ROLES, SOCIAL } from "@/data/profile"

export function Hero() {
  const { displayed, fade } = useRoleTyper(ROLES)

  return (
    <section className="relative z-[1] flex min-h-screen items-center py-20 pt-[120px] pb-20">
      <div className="mx-auto grid w-full max-w-[1160px] grid-cols-1 gap-20 px-8 md:grid-cols-[1fr_420px] md:items-center">
        {/* Left copy */}
        <div className="animate-hero-in">
          {/* Status pill */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-success/25 bg-success/6 py-1.5 pr-3.5 pl-2 text-[12.5px] font-medium text-success/90">
            <span className="inline-block size-[7px] rounded-full bg-success" />
            Open to opportunities · Kigali, Rwanda
          </div>

          <h1 className="text-[clamp(42px,5.5vw,68px)] leading-[1.04] font-bold tracking-[-0.03em]">
            Uwingeli
            <br />
            <span className="text-violet-light">Romeo</span>
          </h1>

          <div className="mt-[18px] flex flex-wrap items-center gap-[7px] text-[clamp(17px,2vw,21px)] text-foreground/90">
            <span>I&apos;m a</span>
            <span
              className="inline-block min-w-[18ch] font-semibold text-violet-light transition-opacity duration-[280ms]"
              style={{ opacity: fade ? 1 : 0 }}
            >
              {displayed}
            </span>
          </div>

          <p className="mt-6 max-w-[50ch] text-base leading-[1.75] text-muted-foreground">
            I build full-stack web products using React, Node.js, and
            PostgreSQL, with Python for automation in between.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild className="h-auto rounded-full bg-violet px-[26px] py-[13px] font-semibold hover:bg-violet-deep">
              <a href="#capabilities">Explore skills</a>
            </Button>
            <Button asChild variant="outline" className="h-auto rounded-full border-white/12 bg-white/4 px-[26px] py-[13px] font-semibold">
              <a href="#contact">Get in touch →</a>
            </Button>
          </div>

          {/* Social row */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-[7px] rounded-[10px] border border-white/8 bg-white/3 px-3.5 py-2 text-[13px] text-muted-foreground hover:border-violet/40 hover:bg-violet/8 hover:text-foreground"
              >
                {s.icon} {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — photo */}
        <div className="hidden justify-center md:flex">
          <div className="relative h-[380px] w-[340px]">
            {/* Glow ring behind the frame */}
            <div className="animate-spin-slow absolute -inset-5 rounded-full bg-[conic-gradient(from_180deg,rgba(139,124,246,0.3),rgba(255,138,101,0.15),rgba(139,124,246,0.3))] opacity-70 blur-[20px]" />

            {/* Main photo frame */}
            <div className="animate-float relative z-[3] flex size-full items-center justify-center overflow-hidden rounded-[44%_56%_52%_48%/46%_44%_56%_54%] border border-white/9 bg-gradient-to-br from-[#17152C] via-[#1E1A38] to-[#231C30]">
              <img src="/hero-photo.png" alt="Uwingeli Romeo" className="size-full object-cover" />
            </div>

            {/* Floating tag — experience */}
            <div className="animate-float absolute -right-5 bottom-5 z-10 rounded-[14px] border border-white/10 bg-[#0e0c1cea] px-4 py-2.5 backdrop-blur-md">
              <div className="text-[22px] leading-none font-bold text-violet">1+</div>
              <div className="mt-[3px] text-[11.5px] text-muted-foreground">Years exp.</div>
            </div>

            {/* Floating tag — stack
            /*
            <div className="animate-float absolute -left-5 top-5 z-10 rounded-[14px] border border-white/10 bg-[#0e0c1cea] px-4 py-2.5 backdrop-blur-md">
              <div className="mb-1 text-[11.5px] text-muted-foreground">Tech stack</div>
              <div className="flex gap-1 text-[10.5px] font-semibold text-violet-light">
                <span className="rounded-full bg-violet/15 px-2">React</span>
                <span className="rounded-full bg-violet/15 px-2">Node</span>
                <span className="rounded-full bg-violet/15 px-2">PG</span>
              </div>
            </div>
            */ }
          </div>
        </div>
      </div>
    </section>
  )
}