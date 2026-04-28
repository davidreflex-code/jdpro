import { SectionLabel } from '@/components/ui/SectionLabel'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/content/projects'

export const metadata = { title: 'פרויקטים' }

export default function Page() {
  return (
    <section className="pt-32 pb-24 mx-auto max-w-7xl px-5 lg:px-8">
      <div className="text-center mb-12">
        <SectionLabel color="orange">תיק עבודות</SectionLabel>
        <h1 className="font-display font-black text-4xl md:text-5xl">פרויקטים נבחרים</h1>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div key={p.slug} id={p.slug} className="aspect-[4/3]">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>
  )
}
