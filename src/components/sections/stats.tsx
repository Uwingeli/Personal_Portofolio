import { STATS } from "@/data/profile"
import { cn } from "@/lib/utils"

export function Stats() {
  return (
    <section id="about" className="relative z-[1] border-y border-border">
      <div className="mx-auto grid max-w-[1160px] grid-cols-2 px-8 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={i}
            className={cn(
              "px-8 py-10 text-center",
              i < 3 && "border-b border-border md:border-r md:border-b-0"
            )}
          >
            <div className="text-[40px] font-bold tracking-[-0.02em] text-violet-light">
              {s.value}
            </div>
            <div className="mt-1.5 text-[13px] tracking-wide text-muted-foreground uppercase">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}