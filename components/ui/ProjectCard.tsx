import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/content/projects'
import { colorClass } from '@/lib/colors'

interface ProjectCardProps {
  project: Project
  large?: boolean
}

export function ProjectCard({ project, large }: ProjectCardProps) {
  return (
    <Link
      href={`/projects#${project.slug}`}
      className={`group relative block overflow-hidden rounded-2xl glass-card ${large ? 'md:row-span-2' : ''}`}
    >
      <div className={`relative w-full ${large ? 'aspect-[4/5] md:aspect-auto md:h-full' : 'aspect-[4/3]'}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={large ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 100vw'}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/40 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6">
        <span
          className={`inline-block mb-3 rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider ${colorClass[project.tagColor].text} ${colorClass[project.tagColor].border} bg-bg-deep/60`}
        >
          {project.tag}
        </span>
        <h3 className={`font-display font-bold text-white leading-snug ${large ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
          {project.title}
        </h3>
        <p className={`text-white-dim mt-1 ${large ? 'text-[0.95rem]' : 'text-[0.85rem]'}`}>
          {project.client}
        </p>
        {large && (
          <p className="text-white-dim mt-3 text-[0.9rem] leading-relaxed">{project.description}</p>
        )}
      </div>
    </Link>
  )
}
