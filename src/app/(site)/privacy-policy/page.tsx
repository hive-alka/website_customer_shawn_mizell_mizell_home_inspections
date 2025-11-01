import { Icon } from '@iconify/react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Mizell Home Inspections',
  description: 'Privacy policy for Mizell Home Inspections LLC',
}

export default function PrivacyPolicy() {
  return (
    <div className='container max-w-5xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28'>
      <div className='mb-12'>
        <div className='flex gap-2.5 items-center justify-center mb-3'>
          <Icon icon='ph:shield-check' width={24} height={24} className='text-primary' />
          <p className='text-base font-semibold text-badge dark:text-white/90'>
            Legal
          </p>
        </div>
        <div className='text-center mb-8'>
          <h1 className='text-4xl sm:text-52 font-medium tracking-tighter text-black dark:text-white mb-3 leading-10 sm:leading-14'>
            Privacy Policy
          </h1>
          <p className='text-sm text-black/50 dark:text-white/50'>
            Last Updated: January 2025
          </p>
        </div>
      </div>

      <div className='prose prose-lg dark:prose-invert max-w-none'>
        <div className='bg-white dark:bg-white/5 rounded-2xl p-8 border border-black/10 dark:border-white/10 shadow-lg'>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>1. Introduction</h2>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              Mizell Home Inspections LLC (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>2. Information We Collect</h2>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              We collect information that you provide directly to us, including:
            </p>
            <ul className='list-disc pl-6 text-black/70 dark:text-white/70 space-y-2'>
              <li>Name, email address, and phone number</li>
              <li>Property address for inspection services</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>3. How We Use Your Information</h2>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              We use the information we collect to:
            </p>
            <ul className='list-disc pl-6 text-black/70 dark:text-white/70 space-y-2'>
              <li>Provide, maintain, and improve our inspection services</li>
              <li>Process your transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about services, offers, and events</li>
              <li>Monitor and analyze trends and usage</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>4. Information Sharing</h2>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className='list-disc pl-6 text-black/70 dark:text-white/70 space-y-2'>
              <li>With your consent or at your direction</li>
              <li>With service providers who perform services on our behalf</li>
              <li>To comply with legal obligations or protect our rights</li>
              <li>In connection with a business transaction (merger, sale, etc.)</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>5. Data Security</h2>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>6. Data Retention</h2>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>7. Your Rights</h2>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              You have the right to:
            </p>
            <ul className='list-disc pl-6 text-black/70 dark:text-white/70 space-y-2'>
              <li>Access and receive a copy of your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to or restrict certain processing of your information</li>
              <li>Withdraw consent where we rely on consent to process your information</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>8. Cookies and Tracking</h2>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              Our website may use cookies and similar tracking technologies to improve your browsing experience. You can control cookies through your browser settings.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>9. Third-Party Links</h2>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>10. Children&apos;s Privacy</h2>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              Our services are not directed to children under 18. We do not knowingly collect personal information from children under 18.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>11. Changes to This Policy</h2>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>12. Contact Us</h2>
            <p className='text-black/70 dark:text-white/70 mb-4'>
              If you have questions about this Privacy Policy or our privacy practices, please contact:
            </p>
            <div className='bg-dark/5 dark:bg-white/5 p-6 rounded-xl'>
              <p className='text-black dark:text-white font-semibold mb-3'>Mizell Home Inspections LLC</p>
              <p className='text-black/70 dark:text-white/70'>687 Harvard St., Brooksville, FL 34601</p>
              <p className='text-black/70 dark:text-white/70'>Phone: <a href='tel:352-652-0259' className='text-primary hover:underline'>352-652-0259</a></p>
              <p className='text-black/70 dark:text-white/70'>Email: <a href='mailto:shawn@mizellhomeinspections.com' className='text-primary hover:underline'>shawn@mizellhomeinspections.com</a></p>
            </div>
          </section>

          <section className='mb-0'>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>Copyright Notice</h2>
            <p className='text-black/70 dark:text-white/70'>
              Content, including images, displayed on this website is protected by copyright laws. Downloading, republication, retransmission or reproduction of content on this website is strictly prohibited.
            </p>
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
  )
}
