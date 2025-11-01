'use client'

import { Icon } from '@iconify/react'

const reasons = [
  {
    icon: 'mdi:certificate-outline',
    title: 'Certified Master Inspector®',
    description: 'Licensed and certified with years of experience and industry-leading credentials ensuring thorough, professional inspections.'
  },
  {
    icon: 'mdi:clock-fast',
    title: '24-Hour Report Delivery',
    description: 'Detailed inspection reports delivered within 24 hours with high-resolution photos and clear recommendations.'
  },
  {
    icon: 'mdi:magnify-plus-outline',
    title: 'We Notice the Little Things',
    description: 'Our inspectors crawl into the smallest spaces and deepest corners using infrared cameras, moisture meters, and drones.'
  },
  {
    icon: 'mdi:message-text-outline',
    title: 'Strong Communication',
    description: 'We\'re available before, during, and after your inspection. Honest communication is part of our business model.'
  },
  {
    icon: 'mdi:tools',
    title: 'State-of-the-Art Tools',
    description: 'Advanced inspection equipment including thermal imaging, moisture detection, and drone technology for comprehensive analysis.'
  },
  {
    icon: 'mdi:star-circle',
    title: '1,000+ Inspections',
    description: 'Trusted by homebuyers, sellers, and real estate professionals throughout Central Florida with a 5.0 Google rating.'
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
            <p className='text-base font-semibold text-dark/75'>
              Why Choose Us
            </p>
          </div>
          <h2 className='text-[40px] leading-[1.2] font-semibold text-black text-center mb-3'>
            Your Trusted Home Inspection Partner
          </h2>
          <p className='text-[17px] leading-[1.5] text-black/60 text-center max-w-2xl mx-auto'>
            Professional inspections backed by experience, integrity, and commitment to excellence.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
          {reasons.map((item, index) => (
            <div key={index} className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow'>
              <div className='mb-4'>
                <Icon
                  icon={item.icon}
                  width={48}
                  height={48}
                  className='text-primary'
                />
              </div>
              <h3 className='text-[24px] leading-[1.3] font-semibold text-black mb-3'>
                {item.title}
              </h3>
              <p className='text-[17px] leading-[1.5] text-black/60'>
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
