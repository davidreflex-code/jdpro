import type { BrandColor } from './services'

export interface Stat {
  value: number
  suffix?: string
  prefix?: string
  label: string
  color: BrandColor
}

export const stats: Stat[] = [
  { value: 500, prefix: '+', label: 'אירועים', color: 'magenta' },
  { value: 12, prefix: '+', label: 'שנות ניסיון', color: 'green' },
  { value: 98, suffix: '%', label: 'שביעות רצון', color: 'orange' },
  { value: 50, suffix: 'm²', label: 'ההתקנה הגדולה', color: 'cyan' },
]
