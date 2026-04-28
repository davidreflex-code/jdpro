import type { BrandColor } from '@/content/services'

export const brandHex: Record<BrandColor, string> = {
  magenta: '#ec268f',
  green: '#8cc63f',
  cyan: '#27aae1',
  orange: '#f7941d',
  red: '#ed1c24',
}

export const colorClass: Record<
  BrandColor,
  { text: string; bg: string; border: string; ring: string }
> = {
  magenta: {
    text: 'text-brand-magenta',
    bg: 'bg-brand-magenta',
    border: 'border-brand-magenta',
    ring: 'ring-brand-magenta',
  },
  green: {
    text: 'text-brand-green',
    bg: 'bg-brand-green',
    border: 'border-brand-green',
    ring: 'ring-brand-green',
  },
  cyan: {
    text: 'text-brand-cyan',
    bg: 'bg-brand-cyan',
    border: 'border-brand-cyan',
    ring: 'ring-brand-cyan',
  },
  orange: {
    text: 'text-brand-orange',
    bg: 'bg-brand-orange',
    border: 'border-brand-orange',
    ring: 'ring-brand-orange',
  },
  red: {
    text: 'text-brand-red',
    bg: 'bg-brand-red',
    border: 'border-brand-red',
    ring: 'ring-brand-red',
  },
}

export function glowShadow(color: BrandColor, opacity = 0.3) {
  const hex = brandHex[color]
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `0 0 25px rgba(${r}, ${g}, ${b}, ${opacity})`
}
