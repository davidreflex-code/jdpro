import { Hero } from '@/components/home/Hero'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { StatsBar } from '@/components/home/StatsBar'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { WhyUs } from '@/components/home/WhyUs'
import { Testimonials } from '@/components/home/Testimonials'
import { CTASection } from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <StatsBar />
      <FeaturedProjects />
      <WhyUs />
      <Testimonials />
      <CTASection />
    </>
  )
}
