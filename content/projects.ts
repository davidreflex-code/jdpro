import type { BrandColor } from './services'

export type ProjectCategory = 'rental' | 'retail' | 'production'

export interface Project {
  slug: string
  title: string
  client: string
  description: string
  image: string
  tag: string
  tagColor: BrandColor
  category: ProjectCategory
  featured?: boolean
  large?: boolean
}

export const projects: Project[] = [
  {
    slug: 'mega-concert-tlv',
    title: 'הופעת ענק בפארק הירקון',
    client: 'Live Nation Israel',
    description:
      'מסך LED ראשי 12×7 מטר + שני מסכי IMAG, הפקה מלאה כולל מולטי-קאם וסטרימינג חי ל-50K צופים.',
    image:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&q=80&auto=format&fit=crop',
    tag: 'הפקת אירוע',
    tagColor: 'magenta',
    category: 'rental',
    featured: true,
    large: true,
  },
  {
    slug: 'fashion-store-dizengoff',
    title: 'חלון ראווה דיגיטלי — דיזנגוף',
    client: 'Boutique Chain',
    description:
      'קיר LED P2.5 פנימי לחלון ראווה, התקנה קבועה עם בקרה מרחוק וניהול תוכן.',
    image:
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1200&q=80&auto=format&fit=crop',
    tag: 'שילוט דיגיטלי',
    tagColor: 'green',
    category: 'retail',
    featured: true,
  },
  {
    slug: 'tech-conference-expo',
    title: 'כנס טכנולוגיה — Expo TLV',
    client: 'Tech Summit',
    description:
      'הפקה חיה מלאה: 4 מצלמות, מיקס וידאו, סטרימינג ל-YouTube ו-3 מסכי LED.',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80&auto=format&fit=crop',
    tag: 'הפקה חיה',
    tagColor: 'cyan',
    category: 'production',
    featured: true,
  },
]
