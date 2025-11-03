'use client'

import { Icon } from '@iconify/react'

const steps = [
  {
    icon: 'mdi:calendar-check',
    number: '01',
    title: 'Schedule Your Inspection',
    description: 'Contact us by phone or online to book your inspection at a time that works for you.'
  },
  {
    icon: 'mdi:home-search',
    number: '02',
    title: 'Thorough Property Inspection',
    description: 'Our certified inspector examines every accessible component of your property, from foundation to roof.'
  },
  {
    icon: 'mdi:file-document-outline',
    number: '03',
    title: 'Receive Detailed Report',
    description: 'Get your comprehensive inspection report with photos and findings within 24 hours.'
  },
  {
    icon: 'mdi:phone-check',
    number: '04',
    title: 'Follow-Up Support',
    description: 'We\'re available after the inspection to answer questions and clarify any concerns about the report.'
  }
]

const HowItWorks: React.FC = () => {
  return (
    <section className='bg-gray-50'>
      <div className='container max-w-8xl mx-auto px-4 sm:px-5 lg:px-6 2xl:px-0'>
        <div className='mb-16 flex flex-col gap-3'>
          <div className='flex gap-2.5 items-center justify-center'>
            <Icon
              icon='mdi:clipboard-list-outline'
              width={20}
              height={20}
              className='text-primary'
            />
            <p className='text-base font-semibold text-dark/75'>
              How It Works
            </p>
          </div>
          <h2 className='text-2xl sm:text-3xl md:text-[40px] leading-[1.2] font-semibold text-dark text-center mb-3'>
            Simple, Straightforward Process
          </h2>
          <p className='text-base sm:text-[17px] leading-[1.5] text-dark/60 text-center max-w-2xl mx-auto px-4'>
            From scheduling to receiving your report, we make the home inspection process easy and stress-free.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {steps.map((step, index) => (
            <div key={index} className='relative'>
              {/* Connection line between steps (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className='hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-primary/30 z-0' />
              )}

              <div className='relative z-10 flex flex-col items-center text-center'>
                {/* Icon circle */}
                <div className='bg-primary/10 rounded-full p-6 mb-4 relative'>
                  <Icon
                    icon={step.icon}
                    width={40}
                    height={40}
                    className='text-primary'
                  />
                  {/* Step number badge */}
                  <div className='absolute -top-2 -right-2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold'>
                    {step.number}
                  </div>
                </div>

                <h3 className='text-lg sm:text-[20px] leading-[1.3] font-semibold text-dark mb-3'>
                  {step.title}
                </h3>
                <p className='text-sm sm:text-base leading-[1.5] text-dark/60'>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
