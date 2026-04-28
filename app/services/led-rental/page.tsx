import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata = { title: 'השכרת והתקנת מסכי LED' }

export default function Page() {
  return (
    <section className="pt-32 pb-24 mx-auto max-w-4xl px-5 lg:px-8">
      <SectionLabel color="magenta">שירות</SectionLabel>
      <h1 className="font-display font-black text-4xl md:text-5xl text-center mb-6">
        השכרת והתקנת מסכי LED — כל גודל. כל מקום. כל חזון.
      </h1>
      <p className="text-white-dim text-center text-lg leading-relaxed">
        עמוד זה בבנייה — תוכן יבוא בקרוב.
      </p>
    </section>
  )
}
