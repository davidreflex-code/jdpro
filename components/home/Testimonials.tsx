import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { testimonials } from '@/content/testimonials'

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <SectionLabel color="cyan">מה הלקוחות אומרים</SectionLabel>
          <h2 className="font-display font-extrabold leading-tight text-[clamp(2rem,4vw,3rem)]">
            לקוחות מספרים
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.author} delay={i * 0.1}>
              <TestimonialCard testimonial={t} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
