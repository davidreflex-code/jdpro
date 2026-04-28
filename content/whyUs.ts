import { Zap, Target, Users, ShieldCheck, type LucideIcon } from 'lucide-react'
import type { BrandColor } from './services'

export interface WhyUsItem {
  icon: LucideIcon
  title: string
  description: string
  color: BrandColor
}

export const whyUs: WhyUsItem[] = [
  {
    icon: Zap,
    title: 'שירות מקצה לקצה',
    description: 'מהייעוץ הראשוני, דרך התכנון, ההתקנה והתפעול — אנחנו אתכם בכל שלב.',
    color: 'magenta',
  },
  {
    icon: Target,
    title: 'ציוד פרימיום',
    description: 'מסכי LED מהיצרנים המובילים בעולם, מצלמות שידור ומערכות מיקס מקצועיות.',
    color: 'green',
  },
  {
    icon: Users,
    title: 'צוות מומחים',
    description: 'טכנאים, מפיקים ומעצבים עם 12+ שנות ניסיון בהפקות הגדולות בישראל.',
    color: 'orange',
  },
  {
    icon: ShieldCheck,
    title: 'תמיכה 24/7',
    description: 'במהלך האירוע — צוות תמיכה זמין לפתרון מיידי של כל אתגר טכני.',
    color: 'cyan',
  },
]
