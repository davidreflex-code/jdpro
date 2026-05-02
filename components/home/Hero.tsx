'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import { LinkButton } from '@/components/ui/Button'
import { brand } from '@/config/brand'

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Background glow orbs */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full blur-[100px] opacity-40 animate-float-1"
        style={{ background: 'radial-gradient(circle, #ec268f, transparent 60%)' }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-32 h-[520px] w-[520px] rounded-full blur-[110px] opacity-35 animate-float-2"
        style={{ background: 'radial-gradient(circle, #27aae1, transparent 60%)' }}
      />
      <div
        aria-hidden
        className="absolute top-1/3 left-1/4 h-[300px] w-[300px] rounded-full blur-[90px] opacity-25 animate-float-1"
        style={{ background: 'radial-gradient(circle, #8cc63f, transparent 60%)' }}
      />

      <div className="relative mx-auto max-w-5xl px-5 text-center">
        {/* Logo wordmark with glow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-logo-wrap mb-8 inline-block"
        >
          <span className="ltr font-display font-black text-5xl md:text-6xl tracking-tight hero-gradient-text">
            {brand.name}
          </span>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="mb-7"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/5 px-4 py-1.5 text-[0.78rem] font-semibold text-brand-green">
            <span className="inline-block h-2 w-2 rounded-full bg-brand-green animate-blink" />
            פתוחים להזמנות לאירועי 2026
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display font-black leading-[1.05] text-[clamp(2.5rem,6vw,4.5rem)]"
        >
          אנחנו מביאים את
          <br />
          החזון שלכם אל
          <br />
          <span className="hero-gradient-text">המסך הגדול</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-7 max-w-2xl text-[1.05rem] text-white-dim leading-relaxed"
        >
          השכרה והתקנת מסכי LED, פתרונות שילוט דיגיטלי לחנויות ובתים, והפקות חיות ברמת שידור — הכל מצוות אחד, מקצה לקצה.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <LinkButton href="/contact" variant="primary" size="lg">
            קבלו הצעת מחיר
            <ArrowLeft className="h-4 w-4" />
          </LinkButton>
          <LinkButton href="/projects" variant="outline" size="lg">
            צפו בפרויקטים
          </LinkButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col items-center gap-2"
        >
          <div className="relative h-10 w-px overflow-hidden bg-white/10">
            <span className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent via-brand-cyan to-transparent animate-scroll-line" />
          </div>
          <ChevronDown className="h-4 w-4 text-white-muted" />
        </motion.div>
      </div>
    </section>
  )
}
