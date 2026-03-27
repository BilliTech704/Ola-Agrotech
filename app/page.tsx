import Hero from '@/components/Hero'
import ServicesOverview from '@/components/ServicesOverview'
import AboutPreview from '@/components/AboutPreview'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <div className="pb-8">
      <Hero />
      <ServicesOverview />
      <AboutPreview />
      <CallToAction />
    </div>
  )
}
