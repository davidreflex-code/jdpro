import type { BrandColor } from './services'

export interface Testimonial {
  quote: string
  author: string
  role: string
  rating: number
  color: BrandColor
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'JD PRO הקימו לנו מסך LED ענק להופעה — האיכות הייתה ברמה אחרת לגמרי. צוות מקצועי, עמידה בלוחות זמנים, ותוצאה שלא ראיתי בארץ.',
    author: 'דניאל לוי',
    role: 'מפיק ראשי, Live Nation Israel',
    rating: 5,
    color: 'magenta',
  },
  {
    quote:
      'התקנו מסך LED בחלון הראווה של הסניף בדיזנגוף — המכירות עלו ב-30% תוך חודש. שירות, מקצועיות וייעוץ מצוין.',
    author: 'מיכל כהן',
    role: 'מנהלת שיווק, רשת בוטיק',
    rating: 5,
    color: 'cyan',
  },
]
