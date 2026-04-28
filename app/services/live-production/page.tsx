import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata = { title: 'הפקה חיה ברמת שידור' }

export default function Page() {
  return (
    <section className="pt-32 pb-24 mx-auto max-w-4xl px-5 lg:px-8">
      <SectionLabel color="cyan">שירות</SectionLabel>
      <h1 className="font-display font-black text-4xl md:text-5xl text-center mb-6">
        הפקה חיה ברמת שידור — מהבמה אל המסך
      </h1>
      <p className="text-white-dim text-center text-lg leading-relaxed">
        עמוד זה בבנייה — תוכן יבוא בקרוב.
      </p>
    </section>
  )
}
