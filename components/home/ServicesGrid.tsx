import { ServiceCard } from '@/components/ui/ServiceCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { services } from '@/content/services'

export function ServicesGrid() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <SectionLabel color="magenta">מה אנחנו עושים</SectionLabel>
          <h2 className="font-display font-extrabold leading-tight text-[clamp(2rem,4vw,3rem)]">
            שלושה עמודי תווך של מצוינות ויזואלית
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white-dim text-[1rem] leading-relaxed">
            מהשכרת מסכי ענק להופעות, דרך התקנות קבועות בחנויות ובבתים, ועד הפקות שידור ברמה הגבוהה ביותר.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 0.1}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
