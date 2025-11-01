import Hero from '@/components/Home/Hero'
import Services from '@/components/Home/Services'
import HowItWorks from '@/components/Home/HowItWorks'
import WhyChooseUs from '@/components/Home/WhyChooseUs'
import About from '@/components/Home/About'
import Testimonial from '@/components/Home/Testimonial'
import CTA from '@/components/shared/CTA'
import FAQ from '@/components/Home/FAQs'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <About />
      <Testimonial />
      <CTA />
      <FAQ />
    </main>
  )
}
