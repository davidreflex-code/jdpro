import { brand } from '@/config/brand'

export function WhatsAppFloat() {
  const href = `https://wa.me/${brand.whatsapp}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 left-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-brand-green text-bg-deep shadow-[0_0_25px_rgba(140,198,63,0.5)] transition-transform duration-200 hover:scale-110 hover:shadow-[0_0_35px_rgba(140,198,63,0.8)]"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.83 11.83 0 0 0 12 0a11.83 11.83 0 0 0-10.05 17.86L0 24l6.32-1.92A11.83 11.83 0 0 0 24 12a11.74 11.74 0 0 0-3.48-8.52ZM12 21.82a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.74 1.13 1.15-3.65-.23-.37A9.84 9.84 0 1 1 21.82 12 9.85 9.85 0 0 1 12 21.82Zm5.4-7.34c-.3-.15-1.76-.87-2.04-.97s-.47-.15-.67.15-.77.97-.95 1.17-.35.22-.65.07a8 8 0 0 1-2.36-1.46 9 9 0 0 1-1.64-2.04c-.17-.3 0-.45.13-.6s.3-.35.45-.52.2-.3.3-.5.05-.37-.02-.52-.67-1.62-.92-2.22-.49-.5-.67-.51h-.57a1.1 1.1 0 0 0-.8.37 3.35 3.35 0 0 0-1.04 2.5 5.83 5.83 0 0 0 1.22 3.1 13.32 13.32 0 0 0 5.1 4.5 17.6 17.6 0 0 0 1.7.63 4.1 4.1 0 0 0 1.88.12 3.07 3.07 0 0 0 2-1.42 2.49 2.49 0 0 0 .17-1.42c-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </a>
  )
}
