import { colorClass } from '@/lib/colors'
import type { BrandColor } from '@/content/services'

interface SectionLabelProps {
  color: BrandColor
  children: React.ReactNode
}

export function SectionLabel({ color, children }: SectionLabelProps) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className={`block w-8 h-px ${colorClass[color].bg}`} />
      <span
        className={`font-body font-semibold uppercase tracking-[0.2em] text-[0.78rem] ${colorClass[color].text}`}
      >
        {children}
      </span>
      <span className={`block w-8 h-px ${colorClass[color].bg}`} />
    </div>
  )
}
