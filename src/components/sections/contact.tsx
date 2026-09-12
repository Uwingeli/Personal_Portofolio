import { Button } from "@/components/ui/button"
import { CONTACT_ITEMS } from "@/data/profile"

export function Contact() {
  return (
    <section id="contact" className="relative z-[1] border-t border-border py-[100px]">
      <div className="mx-auto max-w-[1160px] px-8">
        <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2">
          <div>
            <div className="mb-3.5 text-xs font-semibold tracking-[0.12em] text-violet uppercase">
              Get in touch
            </div>
            <h2 className="text-[clamp(28px,3.5vw,44px)] leading-[1.15] font-bold tracking-[-0.02em]">
              Let&apos;s build something
              <br />
              that holds up.
            </h2>
            <p className="mt-5 max-w-[40ch] text-[15.5px] leading-[1.75] text-muted-foreground">
              Open to full-time software engineering roles. If you have an
              idea or a problem to solve, I&apos;d love to hear about it.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            {CONTACT_ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-2xl border border-white/7 bg-white/3 px-[22px] py-[18px] transition-colors hover:border-violet/30 hover:bg-violet/5"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-[10px] border border-violet/18 bg-violet/10 text-base">
                  {item.icon}
                </div>
                <div>
                  <div className="mb-[3px] text-[11.5px] tracking-wide text-muted-foreground/50 uppercase">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-[14.5px] font-medium text-foreground"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-[14.5px] font-medium text-foreground">{item.value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* <Button
              asChild
              className="mt-2 h-auto rounded-2xl bg-violet py-4 font-semibold hover:bg-violet-deep"
            >
              <a href="mailto:uwingeliromeo@gmail.com">Send me a message →</a>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}