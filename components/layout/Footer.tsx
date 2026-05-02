import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { brand } from '@/config/brand'
import { ColorDivider } from './ColorDivider'

const serviceLinks = [
  { href: '/services/led-rental', label: 'השכרת מסכי LED' },
  { href: '/services/retail-home', label: 'מסכים לחנויות ובתים' },
  { href: '/services/live-production', label: 'הפקה חיה ושידור' },
  { href: '/projects', label: 'פרויקטים' },
]

const companyLinks = [
  { href: '/about', label: 'אודות' },
  { href: '/blog', label: 'בלוג' },
  { href: '/faq', label: 'שאלות נפוצות' },
  { href: '/contact', label: 'צור קשר' },
]

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-bg-deep/60">
      <ColorDivider />
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="ltr font-display font-black text-2xl mb-4 hero-gradient-text">
            {brand.name}
          </div>
          <p className="text-white-dim text-[0.9rem] leading-relaxed mb-5">
            {brand.tagline}
          </p>
          <div className="flex gap-3">
            <a
              href={brand.social.facebook}
              aria-label="Facebook"
              className="h-9 w-9 rounded-full border border-white/10 grid place-items-center text-white-dim hover:text-brand-cyan hover:border-brand-cyan transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={brand.social.instagram}
              aria-label="Instagram"
              className="h-9 w-9 rounded-full border border-white/10 grid place-items-center text-white-dim hover:text-brand-magenta hover:border-brand-magenta transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={brand.social.linkedin}
              aria-label="LinkedIn"
              className="h-9 w-9 rounded-full border border-white/10 grid place-items-center text-white-dim hover:text-brand-cyan hover:border-brand-cyan transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={brand.social.youtube}
              aria-label="YouTube"
              className="h-9 w-9 rounded-full border border-white/10 grid place-items-center text-white-dim hover:text-brand-red hover:border-brand-red transition-colors"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold text-[0.95rem] mb-4 text-white">שירותים</h3>
          <ul className="space-y-2.5">
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white-dim text-[0.9rem] hover:text-brand-cyan transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-[0.95rem] mb-4 text-white">החברה</h3>
          <ul className="space-y-2.5">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white-dim text-[0.9rem] hover:text-brand-cyan transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-[0.95rem] mb-4 text-white">צור קשר</h3>
          <ul className="space-y-3 text-[0.9rem]">
            <li className="flex items-center gap-2 text-white-dim">
              <Phone className="h-4 w-4 text-brand-cyan flex-none" />
              <a href={`tel:${brand.phone}`} className="ltr hover:text-white transition-colors">
                {brand.phone}
              </a>
            </li>
            <li className="flex items-center gap-2 text-white-dim">
              <Mail className="h-4 w-4 text-brand-magenta flex-none" />
              <a href={`mailto:${brand.email}`} className="ltr hover:text-white transition-colors">
                {brand.email}
              </a>
            </li>
            <li className="flex items-center gap-2 text-white-dim">
              <MapPin className="h-4 w-4 text-brand-orange flex-none" />
              <span>{brand.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 text-center text-white-muted text-[0.8rem]">
          © {new Date().getFullYear()} {brand.fullName}. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  )
}
