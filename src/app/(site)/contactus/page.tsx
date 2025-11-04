import { Icon } from '@iconify/react'
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact Us | Mizell Home Inspections",
};

export default function ContactUs() {
  return (
    <div className='container max-w-8xl mx-auto px-4 sm:px-5 md:px-6 2xl:px-0 pt-24 sm:pt-28 md:pt-36 lg:pt-44 pb-14 md:pb-28'>
      <div className='mb-12 text-center'>
        <h1 className='text-5xl font-semibold text-black mb-6'>
          Schedule Your Inspection
        </h1>
        <div className='flex items-center justify-center gap-6 text-black/60 text-sm'>
          <span className='flex items-center gap-2'>
            <Icon icon='ph:clock-clockwise' width={18} height={18} />
            Same-Day Available
          </span>
          <span>•</span>
          <span className='flex items-center gap-2'>
            <Icon icon='ph:check-circle' width={18} height={18} />
            24-Hour Reports
          </span>
        </div>
      </div>

      {/* Spectora Scheduling */}
      <div className='mb-16'>
        <div className='border border-black/10 rounded-2xl overflow-hidden shadow-xl'>
          <iframe
            src='https://app.spectora.com/home-inspectors/my-inspection-company-eef1ca1ab8/schedule?iframe=1'
            style={{border: 0, height: '1100px', width: '100%'}}
            title='Schedule Home Inspection'
          />
        </div>
      </div>

      {/* Contact Information - Simplified */}
      <div className='text-center'>
        <h3 className='text-2xl font-semibold text-black mb-6'>
          Questions? Contact Us
        </h3>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-6 text-black/70'>
          <a href='tel:352-652-0259' className='flex items-center gap-2 hover:text-primary transition-colors'>
            <Icon icon='ph:phone' width={24} height={24} />
            <span className='font-semibold'>352-652-0259</span>
          </a>
          <span className='hidden sm:block'>•</span>
          <a href='mailto:shawn@mizellhomeinspections.com' className='flex items-center gap-2 hover:text-primary transition-colors'>
            <Icon icon='ph:envelope-simple' width={24} height={24} />
            <span className='font-semibold'>shawn@mizellhomeinspections.com</span>
          </a>
          <span className='hidden sm:block'>•</span>
          <a href='https://maps.google.com/?q=687+Harvard+St+Brooksville+FL+34601' target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 hover:text-primary transition-colors'>
            <Icon icon='ph:map-pin' width={24} height={24} />
            <span className='font-semibold'>Get Directions</span>
          </a>
        </div>
        <p className='text-sm text-black/50 mt-4'>
          Mon - Fri: 9am - 6pm
        </p>
      </div>
    </div>
  )
}
