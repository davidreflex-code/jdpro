import { Star, Quote } from 'lucide-react'
import type { Testimonial } from '@/content/testimonials'
import { colorClass } from '@/lib/colors'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="glass-card relative rounded-2xl p-7">
      <Quote
        className={`absolute top-5 left-5 h-8 w-8 opacity-30 ${colorClass[testimonial.color].text}`}
        strokeWidth={1.5}
      />

      <div className="stars mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-brand-orange text-brand-orange" />
        ))}
      </div>

      <p className="text-white text-[1rem] leading-relaxed mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3">
        <div
          className={`h-11 w-11 rounded-full border-2 ${colorClass[testimonial.color].border} bg-white/5 flex items-center justify-center font-display font-bold ${colorClass[testimonial.color].text}`}
        >
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <div className="font-display font-bold text-[0.95rem] text-white">
            {testimonial.author}
          </div>
          <div className="text-white-muted text-[0.8rem]">{testimonial.role}</div>
        </div>
      </div>
    </div>
  )
}
