import { Button } from "@/components/ui/button"
import { useRoleTyper } from "@/hooks/use-role-typer"
import { ROLES, SOCIAL } from "@/data/profile"

export function Hero() {
  const { displayed, fade } = useRoleTyper(ROLES)

  return (
    <section className="relative z-[1] flex min-h-screen items-center px-4 py-24 pt-[110px] sm:px-6 md:px-8 md:py-20 md:pt-[120px]">
      <div className="mx-auto grid w-full max-w-[1160px] grid-cols-1 gap-12 sm:gap-14 md:grid-cols-[1fr_420px] md:items-center md:gap-20">

        <div className="animate-hero-in min-w-0">

          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-success/25 bg-success/6 py-1.5 pr-3.5 pl-2 text-[11.5px] font-medium text-success/90 sm:text-[12.5px]">
            <span className="inline-block size-[7px] shrink-0 rounded-full bg-success" />
            <span>Open to opportunities · Kigali, Rwanda</span>
          </div>

          <h1 className="text-[clamp(42px,11vw,68px)] leading-[1.04] font-bold tracking-[-0.03em]">
            Uwingeli
            <br />
            <span className="text-violet-light">Romeo</span>
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-1.5 text-[clamp(17px,5vw,21px)] text-foreground/90">
            <span>I&apos;m a</span>

            <span
              className="inline-block font-semibold text-violet-light transition-opacity duration-[280ms]"
              style={{ opacity: fade ? 1 : 0 }}
            >
              {displayed}
            </span>
          </div>

          <p className="mt-6 max-w-[50ch] text-[15px] leading-[1.75] text-muted-foreground sm:text-base">
            I build full-stack web products using React, Node.js, and
            PostgreSQL, with Python for automation in between.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button
              asChild
              className="h-auto w-full rounded-full bg-violet px-[26px] py-[13px] font-semibold hover:bg-violet-deep sm:w-auto"
            >
              <a href="#capabilities">Explore skills</a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-auto w-full rounded-full border-white/12 bg-white/4 px-[26px] py-[13px] font-semibold sm:w-auto"
            >
              <a href="#contact">Get in touch →</a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-auto w-full rounded-full border-white/12 bg-white/4 px-[26px] py-[13px] font-semibold sm:w-auto"
            >
              <a
                href="/Uwingeli_Romeo_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View resume →
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2.5 sm:mt-10 sm:gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  s.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center gap-[7px] rounded-[10px] border border-white/8 bg-white/3 px-3 py-2 text-[12px] text-muted-foreground transition-colors hover:border-violet/40 hover:bg-violet/8 hover:text-foreground sm:px-3.5 sm:text-[13px]"
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-center">
          <div className="relative h-[300px] w-[270px] sm:h-[340px] sm:w-[300px] md:h-[380px] md:w-[340px]">

            <div className="animate-spin-slow absolute -inset-5 rounded-full bg-[conic-gradient(from_180deg,rgba(139,124,246,0.3),rgba(255,138,101,0.15),rgba(139,124,246,0.3))] opacity-70 blur-[20px]" />

            <div className="animate-float relative z-[3] flex size-full items-center justify-center overflow-hidden rounded-[44%_56%_52%_48%/46%_44%_56%_54%] border border-white/9 bg-gradient-to-br from-[#17152C] via-[#1E1A38] to-[#231C30]">
              <img
                src="/hero-photo.png"
                alt="Uwingeli Romeo"
                className="size-full object-cover"
              />
            </div>

            <div className="animate-float absolute -right-3 bottom-3 z-10 rounded-[14px] border border-white/10 bg-[#0e0c1cea] px-3 py-2.5 backdrop-blur-md sm:-right-5 sm:bottom-5 sm:px-4">
              <div className="text-[20px] leading-none font-bold text-violet sm:text-[22px]">
                1+
              </div>
              <div className="mt-[3px] text-[10.5px] text-muted-foreground sm:text-[11.5px]">
                Years exp.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}