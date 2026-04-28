import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Service } from '@/content/services'
import { brandHex, colorClass } from '@/lib/colors'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon
  const hex = brandHex[service.color]

  return (
    <Link
      href={service.href}
      className="service-card glass-card group relative block h-full rounded-2xl p-7"
      style={{ ['--glow' as never]: hex }}
    >
      <div
        className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl border transition-all duration-300 ${colorClass[service.color].border} bg-white/5 ${colorClass[service.color].text} group-hover:bg-[var(--glow)] group-hover:text-bg-deep group-hover:shadow-[0_0_20px_var(--glow)]`}
      >
        <Icon className="h-7 w-7" strokeWidth={1.8} />
      </div>

      <h3 className="font-display text-[1.3rem] font-bold mb-3 leading-snug">{service.title}</h3>
      <p className="text-white-dim text-[0.95rem] leading-relaxed mb-5">{service.description}</p>

      <ul className="space-y-2 mb-6">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-center gap-2 text-[0.85rem] text-white-dim">
            <span
              className={`inline-block h-1.5 w-1.5 rounded-full ${colorClass[service.color].bg}`}
            />
            {b}
          </li>
        ))}
      </ul>

      <span
        className={`inline-flex items-center gap-1 font-semibold text-[0.9rem] ${colorClass[service.color].text}`}
      >
        קרא עוד
        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
      </span>
    </Link>
  )
}
