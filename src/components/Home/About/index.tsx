'use client'

import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const About: React.FC = () => {
  return (
    <section className='bg-gray-50 dark:bg-dark-200'>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left side - Image */}
          <div className='relative'>
            <div className='relative rounded-2xl overflow-hidden shadow-lg'>
              <Image
                src='/images/gallery/FB_IMG_1761485265232.jpg'
                alt='Shawn Mizell - Certified Master Inspector'
                width={600}
                height={750}
                className='w-full h-full object-cover'
                unoptimized={true}
              />

              {/* Credentials badge overlay */}
              <div className='absolute bottom-6 left-6 right-6 bg-white dark:bg-dark p-6 rounded-xl shadow-lg'>
                <div className='flex items-center gap-4'>
                  <div className='bg-primary/10 dark:bg-primary/20 p-3 rounded-full'>
                    <Icon icon='mdi:certificate' width={32} height={32} className='text-primary' />
                  </div>
                  <div>
                    <p className='text-dark dark:text-white font-semibold text-lg'>Certified Master Inspector®</p>
                    <p className='text-dark/60 dark:text-white/60 text-sm'>InterNACHI Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <div className='mb-6'>
              <div className='flex gap-2.5 items-center mb-3'>
                <Icon
                  icon='mdi:account-tie'
                  width={20}
                  height={20}
                  className='text-primary'
                />
                <p className='text-base font-semibold text-dark/75 dark:text-white/75'>
                  Meet Your Inspector
                </p>
              </div>
              <h2 className='text-[40px] leading-[1.2] font-semibold text-dark dark:text-white mb-4'>
                Inspector Shawn (Shawn Mizell)
              </h2>
              <p className='text-[18px] leading-[1.6] text-dark/70 dark:text-white/70 mb-6'>
                Certified Master Inspector® with over 1,000 home inspections completed. Known online as "Inspector Shawn," providing thorough, professional inspections backed by experience and integrity.
              </p>
            </div>

            {/* Key credentials */}
            <div className='space-y-4 mb-8'>
              <div className='flex items-start gap-4'>
                <div className='bg-primary/10 dark:bg-primary/20 p-2 rounded-lg mt-1'>
                  <Icon icon='mdi:certificate' width={24} height={24} className='text-primary' />
                </div>
                <div>
                  <h3 className='text-[18px] font-semibold text-dark dark:text-white mb-1'>
                    Certified Master Inspector®
                  </h3>
                  <p className='text-[16px] leading-[1.5] text-dark/60 dark:text-white/60'>
                    InterNACHI Certified with licensed Commercial Property Inspector credentials
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='bg-primary/10 dark:bg-primary/20 p-2 rounded-lg mt-1'>
                  <Icon icon='mdi:shield-check' width={24} height={24} className='text-primary' />
                </div>
                <div>
                  <h3 className='text-[18px] font-semibold text-dark dark:text-white mb-1'>
                    1,000+ Inspections
                  </h3>
                  <p className='text-[16px] leading-[1.5] text-dark/60 dark:text-white/60'>
                    Proven track record across Central Florida with a reputation for excellence
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='bg-primary/10 dark:bg-primary/20 p-2 rounded-lg mt-1'>
                  <Icon icon='mdi:account-group' width={24} height={24} className='text-primary' />
                </div>
                <div>
                  <h3 className='text-[18px] font-semibold text-dark dark:text-white mb-1'>
                    Community Educator
                  </h3>
                  <p className='text-[16px] leading-[1.5] text-dark/60 dark:text-white/60'>
                    Social media presence educating thousands about home maintenance and safety
                  </p>
                </div>
              </div>
            </div>

            {/* CTA and Service Area */}
            <div className='flex flex-col sm:flex-row gap-4 items-start'>
              <Link
                href='/about'
                className='bg-primary py-3 px-6 rounded-full text-white hover:bg-dark duration-300 font-semibold text-base inline-flex items-center gap-2'
              >
                Learn More About Shawn
                <Icon icon='mdi:arrow-right' width={20} height={20} />
              </Link>

              <div className='flex items-center gap-2 py-3'>
                <Icon icon='mdi:map-marker' width={20} height={20} className='text-primary' />
                <span className='text-[16px] text-dark/60 dark:text-white/60'>
                  Gainesville down to St Pete, West Coast over to Orlando
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
