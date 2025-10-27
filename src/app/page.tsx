import Hero from '@/components/Home/Hero'
import Services from '@/components/Home/Services'
import WhyChooseUs from '@/components/Home/WhyChooseUs'
import Testimonial from '@/components/Home/Testimonial'
import BlogSmall from '@/components/shared/Blog'
import CTA from '@/components/shared/CTA'
import FAQ from '@/components/Home/FAQs'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonial />
      <BlogSmall />
      <CTA />
      <FAQ />
    </main>
  )
}
