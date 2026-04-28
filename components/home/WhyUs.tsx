import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { whyUs } from '@/content/whyUs'
import { brandHex, colorClass } from '@/lib/colors'

export function WhyUs() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <SectionLabel color="green">למה לבחור בנו</SectionLabel>
          <h2 className="font-display font-extrabold leading-tight text-[clamp(2rem,4vw,3rem)]">
            לא רק ספק — שותפים להצלחה
          </h2>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {whyUs.map((item, i) => {
            const Icon = item.icon
            const hex = brandHex[item.color]
            return (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div
                  className="why-card glass-card group relative h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    ['--glow' as never]: hex,
                  }}
                >
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border bg-white/5 ${colorClass[item.color].border} ${colorClass[item.color].text}`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-bold text-[1.2rem] mb-2">{item.title}</h3>
                  <p className="text-white-dim text-[0.92rem] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
