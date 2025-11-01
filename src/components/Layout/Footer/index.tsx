import Link from "next/link";
import { Icon } from "@iconify/react"
import { FooterLinks } from "@/app/api/footerlinks";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-dark">
      <div className="container mx-auto max-w-8xl pt-14 px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between pb-14 border-b border-white/10 flex-wrap gap-6">
          <div>
            <h3 className="text-white text-2xl font-semibold mb-2">Mizell Home Inspections</h3>
            <p className="text-white/60 text-sm max-w-md">
              Professional home inspection services you can trust. Certified Master Inspector® serving Central Florida.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="https://www.youtube.com/@inspectorshawn" target="_blank" rel="noopener noreferrer">
              <Icon icon="mdi:youtube" width={24} height={24} className="text-white hover:text-primary duration-300" />
            </Link>
            <Link href="https://www.tiktok.com/@inspectorshawn" target="_blank" rel="noopener noreferrer">
              <Icon icon="ic:baseline-tiktok" width={24} height={24} className="text-white hover:text-primary duration-300" />
            </Link>
            <Link href="https://www.facebook.com/inspectorshawn" target="_blank" rel="noopener noreferrer">
              <Icon icon="ph:facebook-logo-bold" width={24} height={24} className="text-white hover:text-primary duration-300" />
            </Link>
            <Link href="https://www.instagram.com/inspectorshawn" target="_blank" rel="noopener noreferrer">
              <Icon icon="ph:instagram-logo-bold" width={24} height={24} className="text-white hover:text-primary duration-300" />
            </Link>
          </div>
        </div>
        <div className="py-16 border-b border-white/10">
          <div className="grid grid-cols-12 sm:gap-10 gap-y-6">
            <div className="md:col-span-7 col-span-12">
              <h2 className="text-white leading-[1.2] text-40 font-medium mb-6 lg:max-w-3/4">
                Ready to schedule your home inspection?
              </h2>
              <div className="mb-6 text-white/60">
                <p className="flex items-center gap-2 mb-2">
                  <Icon icon="ph:map-pin" width={20} height={20} className="text-primary" />
                  687 Harvard St., Brooksville, FL 34601
                </p>
                <p className="flex items-start gap-2 mb-2 text-sm">
                  <Icon icon="ph:map-trifold" width={20} height={20} className="text-primary mt-0.5" />
                  <span>Serving Gainesville down to St Pete, West Coast over to Orlando</span>
                </p>
                <p className="flex items-center gap-2 mb-2">
                  <Icon icon="ph:phone" width={20} height={20} className="text-primary" />
                  <Link href="tel:352-652-0259" className="hover:text-primary">352-652-0259</Link>
                </p>
                <p className="flex items-center gap-2">
                  <Icon icon="ph:envelope-simple" width={20} height={20} className="text-primary" />
                  <Link href="mailto:shawn@mizellhomeinspections.com" className="hover:text-primary">shawn@mizellhomeinspections.com</Link>
                </p>
                <p className="flex items-start gap-2 mt-4">
                  <Icon icon="ph:clock" width={20} height={20} className="text-primary mt-0.5" />
                  <span>
                    <strong className="text-white">Business Hours:</strong><br />
                    Mon - Fri: 9:00 am - 6:00 pm<br />
                    Sat - Sun: Closed
                  </span>
                </p>
              </div>
              <Link href="/contactus" className="bg-primary text-base font-semibold py-4 px-8 rounded-full text-white hover:bg-white hover:text-dark duration-300 hover:cursor-pointer">
                Schedule Your Inspection
              </Link>

              {/* Payment Methods */}
              <div className="mt-8">
                <h3 className="text-white text-sm font-semibold mb-3">We Accept</h3>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="bg-white rounded px-2 py-1 flex items-center justify-center h-8">
                    <Icon icon="logos:visa" width={40} height={20} />
                  </div>
                  <div className="bg-white rounded px-2 py-1 flex items-center justify-center h-8">
                    <Icon icon="logos:mastercard" width={30} height={20} />
                  </div>
                  <div className="bg-white rounded px-2 py-1 flex items-center justify-center h-8">
                    <Icon icon="logos:amex" width={30} height={20} />
                  </div>
                  <div className="bg-white rounded px-2 py-1 flex items-center justify-center h-8">
                    <Icon icon="logos:discover" width={40} height={20} />
                  </div>
                  <div className="bg-white rounded px-2 py-1 flex items-center justify-center h-8">
                    <Icon icon="logos:paypal" width={40} height={20} />
                  </div>
                  <div className="bg-white rounded px-2 py-1 flex items-center justify-center h-8">
                    <span className="text-xs font-semibold text-dark">Check</span>
                  </div>
                  <div className="bg-white rounded px-2 py-1 flex items-center justify-center h-8">
                    <Icon icon="simple-icons:cashapp" width={20} height={20} className="text-[#00D632]" />
                  </div>
                  <div className="bg-white rounded px-2 py-1 flex items-center justify-center h-8">
                    <span className="text-xs font-semibold text-dark">Cash</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-4 w-fit">
                {FooterLinks.slice(0, 4).map((item, index) => (
                  <div key={index}>
                    <Link href={item.href} className="text-white/40 text-xm hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-4 w-fit">
                {FooterLinks.slice(4, 7).map((item, index) => (
                  <div key={index}>
                    <Link href={item.href} className="text-white/40 text-xm hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 space-y-4">
          <div className="flex flex-col gap-2">
            <p className="text-white/60 text-sm font-semibold">
              Licensed | Bonded | Insured | Home Inspector HI12770 | Mold Inspection: MRSA 4693
            </p>
            <p className="text-white/40 text-sm">
              Content, including images, displayed on this website is protected by copyright laws. Downloading, republication, retransmission or reproduction of content on this website is strictly prohibited.{' '}
              <Link href="/terms-of-service" className="text-white/60 hover:text-primary transition-colors underline">
                Terms of Use
              </Link>
              {' | '}
              <Link href="/privacy-policy" className="text-white/60 hover:text-primary transition-colors underline">
                Privacy Policy
              </Link>
            </p>
            <p className="text-white/40 text-sm ">
              ©2025 Mizell Home Inspections LLC - All Rights Reserved
            </p>
            <p className="text-white/40 text-sm">
              Website Powered By <Link href="https://www.hiveinspect.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary duration-300">Hive - AI Copilot for Home Inspectors</Link>
            </p>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;