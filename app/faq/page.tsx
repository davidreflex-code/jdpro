import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata = { title: 'שאלות נפוצות' }

export default function Page() {
  return (
    <section className="pt-32 pb-24 mx-auto max-w-3xl px-5 lg:px-8 text-center">
      <SectionLabel color="cyan">FAQ</SectionLabel>
      <h1 className="font-display font-black text-4xl md:text-5xl mb-6">שאלות נפוצות</h1>
      <p className="text-white-dim text-lg">בקרוב.</p>
    </section>
  )
}
