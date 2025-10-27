'use client'

import { Icon } from '@iconify/react'

const reasons = [
  {
    icon: 'mdi:certificate-outline',
    title: 'Certified & Experienced',
    description: 'Licensed home inspector with years of experience and industry certifications to ensure thorough, professional inspections.'
  },
  {
    icon: 'mdi:clock-fast',
    title: 'Fast Turnaround',
    description: 'Detailed inspection reports delivered within 24-48 hours, helping you make informed decisions quickly.'
  },
  {
    icon: 'mdi:shield-check',
    title: 'Comprehensive Reports',
    description: 'Easy-to-understand reports with photos, detailed findings, and recommendations for every area inspected.'
  },
  {
    icon: 'mdi:handshake',
    title: 'Client-Focused Service',
    description: 'We work around your schedule and are available to answer questions even after the inspection is complete.'
  },
  {
    icon: 'mdi:home-search',
    title: 'Thorough Inspections',
    description: 'No stone left unturned - from foundation to roof, we inspect every accessible component of your property.'
  },
  {
    icon: 'mdi:star-circle',
    title: 'Trusted by the Community',
    description: 'Highly rated by homebuyers, sellers, and real estate professionals throughout the region.'
  }
]

const WhyChooseUs: React.FC = () => {
  return (
    <section>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        <div className='mb-16 flex flex-col gap-3 '>
          <div className='flex gap-2.5 items-center justify-center'>
            <span>
              <Icon
                icon={'mdi:medal-outline'}
                width={20}
                height={20}
                className='text-primary'
              />
            </span>
            <p className='text-base font-semibold text-dark/75 dark:text-white/75'>
              Why Choose Us
            </p>
          </div>
          <h2 className='text-40 lg:text-52 font-medium text-black dark:text-white text-center tracking-tight leading-11 mb-2'>
            Your Trusted Home Inspection Partner
          </h2>
          <p className='text-xm font-normal text-black/50 dark:text-white/50 text-center'>
            Professional inspections backed by experience, integrity, and commitment to excellence.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
          {reasons.map((item, index) => (
            <div key={index} className='bg-white dark:bg-dark-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow'>
              <div className='mb-4'>
                <Icon
                  icon={item.icon}
                  width={48}
                  height={48}
                  className='text-primary'
                />
              </div>
              <h3 className='text-2xl font-semibold text-black dark:text-white mb-3'>
                {item.title}
              </h3>
              <p className='text-base text-black/60 dark:text-white/60'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
