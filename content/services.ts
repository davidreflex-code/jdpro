import { Monitor, Store, Video, type LucideIcon } from 'lucide-react'

export type BrandColor = 'magenta' | 'green' | 'cyan' | 'orange' | 'red'

export interface Service {
  slug: string
  title: string
  shortTitle: string
  description: string
  bullets: string[]
  color: BrandColor
  icon: LucideIcon
  href: string
}

export const services: Service[] = [
  {
    slug: 'led-rental',
    title: 'השכרת והתקנת מסכי LED',
    shortTitle: 'השכרת מסכי LED',
    description:
      'מסכי LED בכל גודל לאירועים, הופעות, כנסים וחתונות — תכנון, הובלה, התקנה ותפעול מקצה לקצה.',
    bullets: ['פנימיים וחיצוניים', 'בהירות 5000+ ניטים', 'HD / 4K', 'התקנה ופירוק'],
    color: 'magenta',
    icon: Monitor,
    href: '/services/led-rental',
  },
  {
    slug: 'retail-home',
    title: 'מסכי LED לחנויות ובתים',
    shortTitle: 'חנויות ובתים',
    description:
      'פתרונות LED קבועים — שילוט דיגיטלי לחנויות, חלונות ראווה, תפריטים דיגיטליים וקירות וידאו ביתיים.',
    bullets: ['שילוט דיגיטלי', 'תפריטים דיגיטליים', 'קולנוע ביתי', 'התקנה והדרכה'],
    color: 'green',
    icon: Store,
    href: '/services/retail-home',
  },
  {
    slug: 'live-production',
    title: 'הפקה חיה ושידור',
    shortTitle: 'הפקה חיה',
    description:
      'הפקה ברמת שידור — מולטי-קאם, IMAG, סטרימינג חי, מיקס וידאו ותפעול גרפיקה לאירועים גדולים.',
    bullets: ['מולטי-קאם', 'IMAG', 'סטרימינג חי', 'הקלטה ועריכה'],
    color: 'cyan',
    icon: Video,
    href: '/services/live-production',
  },
]
