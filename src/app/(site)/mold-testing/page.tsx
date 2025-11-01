'use client'

import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import HeroSub from '@/components/shared/HeroSub'
import CTA from '@/components/shared/CTA'

const MoldTestingPage = () => {
  const testingTypes = [
    {
      category: 'Category 1',
      title: 'Airborne Mold Spore Sample',
      description: 'If you are coughing, sneezing, or have itchy eyes in your home, this test will tell the inspector what type of mold is in the air. It tests the airborne mold spore concentration to see what you are breathing.',
      icon: 'ph:wind'
    },
    {
      category: 'Category 2',
      title: 'Wall Cavity Air Sample',
      description: 'If you suspect mold but don\'t have any bad symptoms and don\'t see it anywhere on your surfaces, this sample will help you find out the truth. This test gathers air from inside the ceiling or walls where it is not visible, but still causing damage.',
      icon: 'ph:wall'
    },
    {
      category: 'Category 3',
      title: 'Visible Mold Test',
      description: 'This is when you can visibly see a dark stain on your wall or floor. If the inspector can see the mold, he will provide you with remediation companies to get rid of the mold. There is no need to perform a test.',
      icon: 'ph:eye'
    }
  ]

  return (
    <>
      <HeroSub
        title="Reliable Mold Testing Services"
        description="Comprehensive mold testing and air quality evaluation for your home"
        badge="Mold Testing"
      />

      <section className='py-20'>
        <div className='container max-w-7xl mx-auto px-5 2xl:px-0'>
          {/* Main Content Section */}
          <div className='grid grid-cols-12 gap-12 items-start mb-20'>
            {/* Video Column */}
            <div className='lg:col-span-5 col-span-12'>
              <div className='sticky top-24'>
                <div className='relative rounded-2xl overflow-hidden shadow-2xl mb-6'>
                  <div className='aspect-video'>
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/NTC0riR3EeI"
                      title="Mold Inspection Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className='rounded-2xl'
                    ></iframe>
                  </div>
                </div>

                {/* Quick Contact Card */}
                <div className='bg-primary/10 rounded-2xl p-6 border border-primary/20'>
                  <h3 className='text-xl font-semibold text-dark mb-4'>
                    Schedule Your Mold Assessment
                  </h3>
                  <p className='text-dark/70 mb-6 text-sm'>
                    Concerned about mold in your home? Contact Inspector Shawn today for a comprehensive evaluation.
                  </p>
                  <div className='space-y-3 mb-6'>
                    <a href='tel:352-652-0259' className='flex items-center gap-3 text-dark hover:text-primary transition-colors'>
                      <Icon icon='ph:phone-fill' width={20} height={20} className='text-primary' />
                      <span className='font-semibold'>352-652-0259</span>
                    </a>
                    <a href='mailto:shawn@mizellhomeinspections.com' className='flex items-center gap-3 text-dark hover:text-primary transition-colors'>
                      <Icon icon='ph:envelope-simple-fill' width={20} height={20} className='text-primary' />
                      <span className='text-sm'>shawn@mizellhomeinspections.com</span>
                    </a>
                  </div>
                  <Link
                    href='/contactus'
                    className='block w-full text-center bg-primary text-white py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors'
                  >
                    Schedule Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className='lg:col-span-7 col-span-12'>
              <div className='mb-10'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='p-3 bg-primary/10 rounded-full'>
                    <Icon icon="ph:drop-fill" width={32} height={32} className='text-primary' />
                  </div>
                  <h2 className='text-3xl lg:text-4xl font-semibold text-dark'>
                    Professional Mold Testing
                  </h2>
                </div>

                <div className='space-y-4 text-lg text-dark/80 leading-relaxed'>
                  <p>
                    Do you have mold problems or are not sure but think you might? Make sure to call Mizell Home Inspections LLC today! Our inspector, Shawn, will provide a complete home health evaluation in Hillsborough County, up to Marion County and the surrounding areas.
                  </p>
                  <p>
                    His testing services will not only test the type of mold you have but also evaluate the quality of air in your home. This will help you know what hazards are present that can damage your health.
                  </p>
                  <p>
                    If your property tests positive for mold content and needs remediation, we can refer you to reputable companies that provide remediation services. Call Shawn today at <a href='tel:352-652-0259' className='text-primary font-semibold hover:underline'>352-652-0259</a> to schedule your mold assessment.
                  </p>
                </div>
              </div>

              {/* Testing Types Section */}
              <div className='mb-10'>
                <h3 className='text-2xl font-semibold text-dark mb-6'>
                  Mold Testing Process
                </h3>
                <p className='text-dark/70 mb-6'>
                  During the mold testing process, we will gather one or all 3 of the following types of samples:
                </p>

                <div className='space-y-6'>
                  {testingTypes.map((type, index) => (
                    <div
                      key={index}
                      className='bg-white rounded-2xl p-6 border border-dark/10 shadow-lg hover:shadow-xl transition-shadow'
                    >
                      <div className='flex items-start gap-4'>
                        <div className='flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                          <Icon icon={type.icon} width={24} height={24} className='text-primary' />
                        </div>
                        <div className='flex-1'>
                          <div className='flex items-center gap-3 mb-2'>
                            <span className='text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full'>
                              {type.category}
                            </span>
                            <h4 className='text-xl font-semibold text-dark'>
                              {type.title}
                            </h4>
                          </div>
                          <p className='text-dark/70 leading-relaxed'>
                            {type.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Area */}
              <div className='bg-dark rounded-2xl p-6 border border-dark/10'>
                <div className='flex items-start gap-4'>
                  <Icon icon='ph:map-trifold' width={32} height={32} className='text-primary flex-shrink-0' />
                  <div>
                    <h4 className='text-lg font-semibold text-white mb-2'>Service Areas</h4>
                    <p className='text-white/80'>
                      Serving Hillsborough County up to Marion County and surrounding areas. From Gainesville down to St Pete, West Coast over to Orlando.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

export default MoldTestingPage
