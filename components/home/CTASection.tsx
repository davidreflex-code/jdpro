'use client'

import { useState } from 'react'
import { Phone, Mail, Send } from 'lucide-react'
import { brand } from '@/config/brand'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

const serviceOptions = [
  { value: '', label: 'בחרו שירות' },
  { value: 'led-rental', label: 'השכרת מסכי LED' },
  { value: 'retail-home', label: 'מסך לחנות / לבית' },
  { value: 'live-production', label: 'הפקה חיה / שידור' },
  { value: 'other', label: 'אחר' },
]

export function CTASection() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <SectionLabel color="red">בואו נתחיל</SectionLabel>
          <h2 className="font-display font-extrabold leading-tight text-[clamp(2rem,4vw,3rem)]">
            מוכנים להאיר את האירוע הבא שלכם?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white-dim text-[1rem] leading-relaxed">
            השאירו פרטים — נחזור אליכם תוך 24 שעות עם הצעת מחיר מותאמת.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass-card rounded-3xl p-8 md:p-10">
            {sent ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-brand-green/15 text-brand-green text-3xl">
                  ✓
                </div>
                <h3 className="font-display font-bold text-xl mb-2">תודה! קיבלנו את הפנייה</h3>
                <p className="text-white-dim">נחזור אליכם בהקדם.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                <Field label="שם מלא" name="name" required />
                <Field label="טלפון" name="phone" type="tel" required dir="ltr" />
                <Field label="אימייל" name="email" type="email" required dir="ltr" className="sm:col-span-2" />

                <div className="flex flex-col gap-1.5">
                  <label className="text-white-dim text-[0.85rem]">סוג שירות</label>
                  <select
                    name="service"
                    className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-brand-magenta focus:outline-none transition-colors"
                  >
                    {serviceOptions.map((o) => (
                      <option key={o.value} value={o.value} className="bg-bg-deep">
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>

                <Field label="תאריך אירוע" name="date" type="date" />

                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-white-dim text-[0.85rem]">תוכלו לספר על האירוע?</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-brand-magenta focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cta px-7 py-4 font-bold text-white shadow-[0_0_25px_rgba(236,38,143,0.35)] hover:shadow-[0_0_45px_rgba(236,38,143,0.7)] transition-shadow"
                >
                  שלחו פנייה
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}

            <div className="mt-8 pt-8 border-t border-white/5 grid gap-4 sm:grid-cols-2 text-center text-[0.95rem]">
              <a
                href={`tel:${brand.phone}`}
                className="flex items-center justify-center gap-2 text-white-dim hover:text-brand-cyan transition-colors"
              >
                <Phone className="h-4 w-4 text-brand-cyan" />
                <span className="ltr">{brand.phone}</span>
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="flex items-center justify-center gap-2 text-white-dim hover:text-brand-magenta transition-colors"
              >
                <Mail className="h-4 w-4 text-brand-magenta" />
                <span className="ltr">{brand.email}</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  dir,
  className,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  dir?: 'ltr' | 'rtl'
  className?: string
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ''}`}>
      <label htmlFor={name} className="text-white-dim text-[0.85rem]">
        {label}
        {required && <span className="text-brand-magenta mr-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        dir={dir}
        className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-brand-magenta focus:outline-none transition-colors"
      />
    </div>
  )
}
