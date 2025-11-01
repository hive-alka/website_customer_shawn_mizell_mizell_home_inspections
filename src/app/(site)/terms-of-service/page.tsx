import { Icon } from '@iconify/react'
import Link from 'next/link'
import { Metadata } from 'next'
import HeroSub from '@/components/shared/HeroSub'

export const metadata: Metadata = {
  title: 'Terms of Service | Mizell Home Inspections',
  description: 'Terms of service for Mizell Home Inspections LLC',
}

export default function TermsOfService() {
  return (
    <>
      <HeroSub
        title="Terms of Service"
        description="Last Updated: January 2025"
        badge="Legal"
      />
      <div className='container max-w-5xl mx-auto px-5 2xl:px-0 pb-14 md:pb-28'>

      <div className='prose prose-lg dark:prose-invert max-w-none'>
        <div className='bg-white dark:bg-white/5 rounded-2xl p-8 border border-black/10 dark:border-white/10 shadow-lg'>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>1. Agreement to Terms</h2>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              By engaging Mizell Home Inspections LLC (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) for home inspection services, you (&quot;Client&quot;, &quot;you&quot;, or &quot;your&quot;) agree to be bound by these Terms of Service.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>2. Services Provided</h2>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              Mizell Home Inspections LLC provides professional home inspection services, mold testing, and real estate photography services. Our inspections are visual examinations of readily accessible areas and systems of a property.
            </p>
            <ul className='list-disc pl-6 text-black/70 dark:text-white/70 space-y-2'>
              <li>Inspections are non-invasive and do not involve destructive testing</li>
              <li>Inspection reports are based on conditions observed at the time of inspection</li>
              <li>We do not guarantee the future condition or performance of any system or component</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>3. Scheduling and Payment</h2>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              <strong>Scheduling:</strong> Inspections must be scheduled in advance. Same-day scheduling may be available based on availability.
            </p>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              <strong>Payment:</strong> Payment is due at the time of inspection unless other arrangements have been made in advance. We accept Visa, Mastercard, American Express, Discover, PayPal, cash, check, and CashApp.
            </p>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              <strong>Cancellation:</strong> Cancellations must be made at least 24 hours in advance to avoid cancellation fees.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>4. Client Responsibilities</h2>
            <ul className='list-disc pl-6 text-black/70 dark:text-white/70 space-y-2'>
              <li>Ensure the property is accessible and utilities are turned on</li>
              <li>Provide safe access to all areas to be inspected</li>
              <li>Inform us of any known defects or concerns prior to inspection</li>
              <li>Remove any obstacles that may prevent access to areas or systems</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>5. Limitations of Inspection</h2>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              Home inspections have inherent limitations. We do not inspect:
            </p>
            <ul className='list-disc pl-6 text-black/70 dark:text-white/70 space-y-2'>
              <li>Areas that are not readily accessible or visible</li>
              <li>Systems or components that are shut down or not functioning</li>
              <li>Underground utilities or systems</li>
              <li>Any area requiring destructive measures to access</li>
              <li>Cosmetic conditions or aesthetic concerns</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>6. Inspection Reports</h2>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              Inspection reports will be delivered within 24 hours of the completed inspection. Reports are provided digitally and are for the exclusive use of the client who engaged our services.
            </p>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              Reports may not be transferred, assigned, or provided to third parties without our written consent.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>7. Limitation of Liability</h2>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              Our liability is limited to the fee paid for the inspection. We maintain professional errors and omissions insurance as required by Florida law.
            </p>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              We are not responsible for the cost of repair or replacement of unreported defects or deficiencies, either current or arising in the future.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>8. Recommendations</h2>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              We may recommend further evaluation by qualified specialists for specific concerns. It is the client&apos;s responsibility to follow up on all recommendations before completing any real estate transaction.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>9. Governing Law</h2>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              These terms are governed by the laws of the State of Florida. Any disputes shall be resolved in the courts of Florida.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>10. Licensing Information</h2>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              Mizell Home Inspections LLC is licensed, bonded, and insured in the State of Florida.
            </p>
            <ul className='list-disc pl-6 text-black/70 dark:text-white/70 space-y-2'>
              <li>Home Inspector License: HI12770</li>
              <li>Mold Inspection License: MRSA 4693</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>11. Contact Information</h2>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              For questions regarding these terms or our services, please contact:
            </p>
            <div className='bg-dark/5 dark:bg-white/5 p-6 rounded-xl'>
              <p className='text-black dark:text-white font-semibold mb-3'>Mizell Home Inspections LLC</p>
              <p className='text-black/70 dark:text-white/70'>687 Harvard St., Brooksville, FL 34601</p>
              <p className='text-black/70 dark:text-white/70'>Phone: <a href='tel:352-652-0259' className='text-primary hover:underline'>352-652-0259</a></p>
              <p className='text-black/70 dark:text-white/70'>Email: <a href='mailto:shawn@mizellhomeinspections.com' className='text-primary hover:underline'>shawn@mizellhomeinspections.com</a></p>
            </div>
          </section>

        </div>

        <div className='text-center mt-12'>
          <Link
            href='/contactus'
            className='inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors'
          >
            <Icon icon='ph:calendar-check' width={24} height={24} />
            Schedule Your Inspection
          </Link>
        </div>
      </div>
      </div>
    </>
  )
}
