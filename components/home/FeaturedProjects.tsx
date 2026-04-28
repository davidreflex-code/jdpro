import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { projects } from '@/content/projects'

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured)
  const large = featured.find((p) => p.large)
  const rest = featured.filter((p) => !p.large)

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <SectionLabel color="orange">תיק עבודות</SectionLabel>
          <h2 className="font-display font-extrabold leading-tight text-[clamp(2rem,4vw,3rem)]">
            פרויקטים נבחרים
          </h2>
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:auto-rows-[260px]">
          {large && (
            <ScrollReveal className="md:col-span-1 md:row-span-2 h-full">
              <ProjectCard project={large} large />
            </ScrollReveal>
          )}
          {rest.map((p, i) => (
            <ScrollReveal key={p.slug} delay={(i + 1) * 0.1} className="md:col-span-1 lg:col-span-2 md:row-span-1">
              <ProjectCard project={p} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-body font-semibold text-brand-orange hover:text-white transition-colors"
          >
            לכל הפרויקטים
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
