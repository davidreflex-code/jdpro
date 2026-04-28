import type { Metadata } from 'next'
import { Heebo, Rubik } from 'next/font/google'
import { brand } from '@/config/brand'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ColorDivider } from '@/components/layout/ColorDivider'
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat'
import '@/styles/globals.css'

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  variable: '--font-rubik',
  weight: ['500', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${brand.fullName} — מסכי LED. הפקות חיות.`,
    template: `%s | ${brand.name}`,
  },
  description:
    'השכרת והתקנת מסכי LED, פתרונות שילוט דיגיטלי לחנויות ובתים, והפקות חיות ברמת שידור. JD PRO Media Solutions — מקצוענים בתחום מ-2014.',
  metadataBase: new URL('https://jdpro.co.il'),
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    siteName: brand.fullName,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${rubik.variable}`}>
      <body>
        <Navbar />
        <ColorDivider />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
