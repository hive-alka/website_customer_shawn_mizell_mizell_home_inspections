'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'
import CTA from '@/components/shared/CTA'

const AboutPage = () => {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 py-20'>
        <div className='container max-w-7xl mx-auto px-5 2xl:px-0'>
          <div className='text-center max-w-4xl mx-auto'>
            <div className='flex gap-2 items-center justify-center mb-4'>
              <Icon icon='mdi:account-star' className='text-3xl text-primary' />
              <p className='text-base font-semibold text-dark/75 dark:text-white/75'>
                About Us
              </p>
            </div>
            <h1 className='text-40 lg:text-60 font-bold text-black dark:text-white mb-6'>
              About Inspector Shawn
            </h1>
            <p className='text-xl text-black/70 dark:text-white/70'>
              Certified Master Inspector®
            </p>
          </div>
        </div>
      </section>

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
                  unoptimized={true}
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
              <div className='space-y-6 text-lg text-black/80 dark:text-white/80 leading-relaxed'>
                <p>
                  Shawn Mizell is a <strong className='text-primary'>Certified Master Inspector®</strong> and licensed Commercial Property Inspector with years of experience helping Florida homeowners and investors make informed decisions. As the owner of Mizell Home Inspections, Shawn is known for his meticulous attention to detail, deep building science knowledge, and commitment to integrity on every inspection.
                </p>
                <p>
                  With thousands of inspections completed and a reputation for excellence, Shawn brings both expertise and personality to the industry. His approachable style and ability to clearly explain complex findings have earned him the trust of clients, agents, and contractors alike.
                </p>
                <p>
                  Beyond the job site, Shawn is also a well-known voice in the inspection community, sharing educational and entertaining content as <strong>&quot;Inspector Shawn&quot;</strong> across YouTube, TikTok, Facebook, and Instagram, where his combined audience of tens of thousands follows his insights, humor, and real-world inspection tips.
                </p>
                <p className='text-xl font-semibold text-black dark:text-white pt-4'>
                  When you hire Mizell Home Inspections, you&apos;re not just getting an inspection—you&apos;re getting the experience, expertise, and enthusiasm of one of Florida&apos;s most trusted inspectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className='bg-dark py-20'>
        <div className='container max-w-7xl mx-auto px-5 2xl:px-0'>
          <h2 className='text-40 lg:text-52 font-bold text-white text-center mb-12'>
            Credentials & Expertise
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10'>
              <Icon icon='mdi:certificate' className='text-primary text-5xl mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-white mb-2'>Certified Master Inspector®</h3>
              <p className='text-white/60 text-sm'>Highest industry certification</p>
            </div>
            <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10'>
              <Icon icon='mdi:office-building' className='text-primary text-5xl mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-white mb-2'>Licensed Commercial Inspector</h3>
              <p className='text-white/60 text-sm'>Commercial property expertise</p>
            </div>
            <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10'>
              <Icon icon='mdi:counter' className='text-primary text-5xl mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-white mb-2'>Thousands of Inspections</h3>
              <p className='text-white/60 text-sm'>Years of field experience</p>
            </div>
            <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10'>
              <Icon icon='mdi:account-group' className='text-primary text-5xl mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-white mb-2'>Community Educator</h3>
              <p className='text-white/60 text-sm'>Tens of thousands of followers</p>
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
