import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CAPABILITIES } from "@/data/profile"

export function Capabilities() {
  return (
    <section id="capabilities" className="relative z-[1] py-[100px]">
      <div className="mx-auto max-w-[1160px] px-8">
        <div className="mb-16 max-w-[52ch]">
          <div className="mb-3.5 text-xs font-semibold tracking-[0.12em] text-violet uppercase">
            What I do
          </div>
          <h2 className="text-[clamp(28px,3.5vw,40px)] leading-[1.15] font-bold tracking-[-0.02em]">
            Skills built for the full product lifecycle
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.7] text-muted-foreground">
            From pixel-perfect frontends to database schemas and Python
            automation scripts — I handle the whole stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((cap) => (
            <Card
              key={cap.title}
              className="gap-4 rounded-[20px] border-border bg-white/3 py-7 transition-all duration-200 hover:-translate-y-1.5 hover:border-violet/30 hover:bg-violet/6"
            >
              <CardHeader>
                <div className="mb-5 flex size-[42px] items-center justify-center rounded-xl border border-violet/20 bg-violet/12 text-violet">
                  {cap.icon}
                </div>
                <h3 className="text-[15px] font-semibold text-foreground">
                  {cap.title}
                </h3>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-2.5">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[13.5px] text-muted-foreground">
                      <span className="size-1 shrink-0 rounded-full bg-violet/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}