'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'
import CTA from '@/components/shared/CTA'
import HeroSub from '@/components/shared/HeroSub'

const AboutPage = () => {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <HeroSub
        title="About Inspector Shawn"
        description="Certified Master Inspector®"
        badge="About Us"
      />

      {/* Main Content Section */}
      <section className='py-20'>
        <div className='container max-w-7xl mx-auto px-5 2xl:px-0'>
          <div className='grid grid-cols-12 gap-12 items-center'>
            {/* Image Column */}
            <div className='lg:col-span-5 col-span-12'>
              <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
                <Image
                  src='/images/about/inspector-shawn.jpg'
                  alt='Inspector Shawn Mizell'
                  width={600}
                  height={700}
                  className='w-full h-auto'
                  
                />
                {/* Social Media Badge */}
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6'>
                  <div className='flex gap-4 justify-center'>
                    <a href='https://youtube.com/@inspectorshawn' target='_blank' rel='noopener noreferrer' className='text-white hover:text-primary transition-colors'>
                      <Icon icon='mdi:youtube' width={32} height={32} />
                    </a>
                    <a href='https://tiktok.com/@inspectorshawn' target='_blank' rel='noopener noreferrer' className='text-white hover:text-primary transition-colors'>
                      <Icon icon='ic:baseline-tiktok' width={32} height={32} />
                    </a>
                    <a href='https://facebook.com/inspectorshawn' target='_blank' rel='noopener noreferrer' className='text-white hover:text-primary transition-colors'>
                      <Icon icon='mdi:facebook' width={32} height={32} />
                    </a>
                    <a href='https://instagram.com/inspectorshawn' target='_blank' rel='noopener noreferrer' className='text-white hover:text-primary transition-colors'>
                      <Icon icon='mdi:instagram' width={32} height={32} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className='lg:col-span-7 col-span-12'>
              <div className='space-y-6 text-lg text-black/80 leading-relaxed'>
                <p>
                  <strong className='text-primary'>Inspector Shawn</strong> (Shawn Mizell) is a Certified Master Inspector® and licensed Commercial Property Inspector with years of experience helping Florida homeowners and investors make informed decisions. As the owner of Mizell Home Inspections, Inspector Shawn is known for his meticulous attention to detail, deep building science knowledge, and commitment to integrity on every inspection.
                </p>
                <p>
                  With over 1,000 inspections completed and a reputation for excellence, Inspector Shawn brings both expertise and personality to the industry. His approachable style and ability to clearly explain complex findings have earned him the trust of clients, agents, and contractors alike.
                </p>
                <p>
                  Beyond the job site, Shawn is also a well-known voice in the inspection community, sharing educational and entertaining content as <strong>&quot;Inspector Shawn&quot;</strong> across YouTube, TikTok, Facebook, and Instagram, where his combined audience of tens of thousands follows his insights, humor, and real-world inspection tips.
                </p>
                <p className='text-xl font-semibold text-black pt-4'>
                  When you hire Mizell Home Inspections, you&apos;re not just getting an inspection—you&apos;re getting the experience, expertise, and enthusiasm of one of Florida&apos;s most trusted inspectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  )
}

export default AboutPage
