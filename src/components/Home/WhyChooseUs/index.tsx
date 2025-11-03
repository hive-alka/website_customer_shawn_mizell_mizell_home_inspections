'use client'

import { Icon } from '@iconify/react'

const reasons = [
  {
    icon: 'mdi:certificate-outline',
    title: 'Certified Master Inspector®',
    description: 'The highest credential in home inspection. Less than 2% of inspectors earn it. Shawn has it.'
  },
  {
    icon: 'mdi:clock-fast',
    title: '24-Hour Report Delivery',
    description: 'Most inspectors take 3-5 days. We deliver in 24 hours. With photos and clear next steps.'
  },
  {
    icon: 'mdi:magnify-plus-outline',
    title: 'We Notice the Little Things',
    description: 'Crawl spaces. Attics. Rooftops. We go where others don\'t. Using thermal imaging and drones.'
  },
  {
    icon: 'mdi:message-text-outline',
    title: 'Strong Communication',
    description: 'Before. During. After. We\'re here. Call anytime. Get honest answers. That\'s our promise.'
  },
  {
    icon: 'mdi:tools',
    title: 'State-of-the-Art Tools',
    description: 'Thermal imaging reveals hidden issues. Moisture meters detect problems early. Drones inspect roofs safely.'
  },
  {
    icon: 'mdi:star-circle',
    title: '1,000+ Inspections',
    description: 'Over 1,000 homes inspected. 5.0 Google rating. Central Florida trusts us. You can too.'
  }
]

const WhyChooseUs: React.FC = () => {
  return (
    <section>
      <div className='container max-w-8xl mx-auto px-4 sm:px-5 lg:px-6 2xl:px-0'>
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
          <h2 className='text-2xl sm:text-3xl md:text-[40px] leading-[1.2] font-semibold text-black text-center mb-3'>
            Your Trusted Home Inspection Partner
          </h2>
          <p className='text-base sm:text-[17px] leading-[1.5] text-black/60 text-center max-w-2xl mx-auto'>
            Professional inspections backed by experience, integrity, and commitment to excellence.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10'>
          {reasons.map((item, index) => (
            <div key={index} className='bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow'>
              <div className='mb-4'>
                <Icon
                  icon={item.icon}
                  width={48}
                  height={48}
                  className='text-primary'
                />
              </div>
              <h3 className='text-xl sm:text-[22px] md:text-[24px] leading-[1.3] font-semibold text-black mb-3'>
                {item.title}
              </h3>
              <p className='text-base sm:text-[17px] leading-[1.6] text-black/60'>
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
