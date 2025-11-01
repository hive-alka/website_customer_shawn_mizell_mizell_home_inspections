import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact Us | Mizell Home Inspections",
};

export default function ContactUs() {
  return (
    <div className='container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28'>
      <div className='mb-16'>
        <div className='flex gap-2.5 items-center justify-center mb-3'>
          <span>
            <Icon
              icon={'ph:house-simple-fill'}
              width={20}
              height={20}
              className='text-primary'
            />
          </span>
          <p className='text-base font-semibold text-badge dark:text-white/90'>
            Contact us
          </p>
        </div>
        <div className='text-center'>
          <h3 className='text-4xl sm:text-52 font-medium tracking-tighter text-black dark:text-white mb-3 leading-10 sm:leading-14'>
            Schedule Your Home Inspection Today
          </h3>
          <p className='text-xm font-normal tracking-tight text-black/50 dark:text-white/50 leading-6'>
            Ready to protect your investment? Contact Certified Master Inspector® Shawn Mizell
            for thorough, professional home inspections. Serving Gainesville down to St Pete, West Coast over to Orlando.
          </p>
        </div>
      </div>

      {/* Spectora Scheduling */}
      <div className='mb-16'>
        <div className='text-center mb-8'>
          <h3 className='text-3xl font-semibold text-black dark:text-white mb-2'>
            Schedule Online
          </h3>
          <p className='text-black/60 dark:text-white/60'>
            Choose your preferred date and time for your home inspection
          </p>
        </div>
        <div className='border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden shadow-xl dark:shadow-white/10'>
          <iframe
            src='https://app.spectora.com/home-inspectors/my-inspection-company-eef1ca1ab8/schedule?iframe=1'
            style={{border: 0, height: '1100px', width: '100%'}}
            title='Schedule Home Inspection'
          />
        </div>
      </div>

      {/* Contact Information Only - Intake Form Removed */}
      <div className='border border-black/10 dark:border-white/10 rounded-2xl p-4 shadow-xl dark:shadow-white/10'>
        <div className='flex flex-col lg:flex-row lg:items-center gap-12'>
          <div className='relative w-fit'>
            <Image
              src={'/images/contactUs/contactUs.jpg'}
              alt='wall'
              width={497}
              height={535}
              className='rounded-2xl brightness-50 h-full'
              unoptimized={true}
            />
            <div className='absolute top-6 left-6 lg:top-12 lg:left-12 flex flex-col gap-2'>
              <h5 className='text-xl xs:text-2xl mobile:text-3xl font-medium tracking-tight text-white'>
                Contact Information
              </h5>
              <p className='text-sm xs:text-base mobile:text-xm font-normal text-white/80'>
                Same-day scheduling available. Call or message us to book your inspection!
              </p>
            </div>
            <div className='absolute bottom-6 left-6 lg:bottom-12 lg:left-12 flex flex-col gap-4 text-white'>
              <a href='tel:352-652-0259' className='w-fit'>
                <div className='flex items-center gap-4 group w-fit'>
                  <Icon icon={'ph:phone'} width={32} height={32} />
                  <p className='text-sm xs:text-base mobile:text-xm font-normal group-hover:text-primary'>
                    352-652-0259
                  </p>
                </div>
              </a>
              <a href='mailto:shawn@mizellhomeinspections.com' className='w-fit'>
                <div className='flex items-center gap-4 group w-fit'>
                  <Icon icon={'ph:envelope-simple'} width={32} height={32} />
                  <p className='text-sm xs:text-base mobile:text-xm font-normal group-hover:text-primary'>
                    shawn@mizellhomeinspections.com
                  </p>
                </div>
              </a>
              <div className='flex items-center gap-4'>
                <Icon icon={'ph:map-pin'} width={32} height={32} />
                <p className='text-sm xs:text-base mobile:text-xm font-normal'>
                  687 Harvard St.<br />Brooksville, FL 34601
                </p>
              </div>
              <div className='flex items-start gap-4'>
                <Icon icon={'ph:clock'} width={32} height={32} className='flex-shrink-0' />
                <div className='text-sm xs:text-base mobile:text-xm font-normal'>
                  <p className='font-semibold mb-1'>Business Hours:</p>
                  <p>Mon - Fri: 9:00 am - 6:00 pm</p>
                  <p>Sat - Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
