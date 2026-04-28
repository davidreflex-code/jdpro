'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { brand } from '@/config/brand'
import { LinkButton } from '@/components/ui/Button'

const links = [
  { href: '/', label: 'בית' },
  { href: '/services/led-rental', label: 'השכרת LED' },
  { href: '/services/retail-home', label: 'חנויות ובתים' },
  { href: '/services/live-production', label: 'הפקה חיה' },
  { href: '/projects', label: 'פרויקטים' },
  { href: '/about', label: 'אודות' },
  { href: '/contact', label: 'צור קשר' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-deep/80 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8 h-16 lg:h-20">
        <Link href="/" className="ltr font-display font-black text-xl tracking-tight">
          <span className="hero-gradient-text">JD PRO</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.slice(0, 6).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link font-body font-medium text-[0.9rem] text-white-dim hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LinkButton href="/contact" variant="primary" size="md" className="animate-pulse-glow">
            קבלו הצעת מחיר
          </LinkButton>
        </div>

        <button
          aria-label={open ? 'סגור תפריט' : 'פתח תפריט'}
          className="lg:hidden text-white p-2 -ml-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute inset-x-0 top-full bg-bg-deep/95 backdrop-blur-md border-b border-white/5">
          <nav className="flex flex-col gap-1 px-5 py-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-body font-medium text-white-dim hover:text-white py-3 border-b border-white/5"
              >
                {l.label}
              </Link>
            ))}
            <LinkButton
              href="/contact"
              variant="primary"
              size="md"
              className="mt-4 self-start"
              onClick={() => setOpen(false)}
            >
              קבלו הצעת מחיר
            </LinkButton>
          </nav>
        </div>
      )}

      {/* hide brand var-name to keep tree-shaker happy */}
      <span className="sr-only">{brand.fullName}</span>
    </header>
  )
}
