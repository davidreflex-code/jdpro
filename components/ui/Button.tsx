import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'md' | 'lg'

interface BaseProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

const base =
  'inline-flex items-center justify-center gap-2 font-body font-bold rounded-full transition-all duration-300 whitespace-nowrap'

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-[0.9rem]',
  lg: 'px-7 py-3.5 text-[0.95rem]',
}

const variants: Record<Variant, string> = {
  primary:
    'text-white bg-gradient-cta shadow-[0_0_25px_rgba(236,38,143,0.35)] hover:shadow-[0_0_35px_rgba(236,38,143,0.6)] hover:-translate-y-0.5',
  outline:
    'text-white border border-white/25 hover:border-brand-cyan hover:text-brand-cyan hover:shadow-[0_0_25px_rgba(39,170,225,0.25)] hover:-translate-y-0.5',
  ghost: 'text-white-dim hover:text-white',
}

function classes(variant: Variant, size: Size, extra?: string) {
  return [base, sizes[size], variants[variant], extra].filter(Boolean).join(' ')
}

interface ButtonProps extends BaseProps, Omit<ComponentProps<'button'>, keyof BaseProps> {}
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}: ButtonProps) {
  return (
    <button className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  )
}

interface LinkButtonProps extends BaseProps, Omit<ComponentProps<typeof Link>, keyof BaseProps> {}
export function LinkButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}: LinkButtonProps) {
  return (
    <Link className={classes(variant, size, className)} {...rest}>
      {children}
    </Link>
  )
}
