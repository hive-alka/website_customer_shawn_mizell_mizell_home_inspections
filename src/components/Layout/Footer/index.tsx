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
              </div>
              <Link href="/contactus" className="bg-primary text-base font-semibold py-4 px-8 rounded-full text-white hover:bg-white hover:text-dark duration-300 hover:cursor-pointer">
                Schedule Your Inspection
              </Link>
            </div>
            <div className="md:col-span-3 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-4 w-fit">
                {FooterLinks.slice(0, 4).map((item, index) => (
                  <div key={index}>
                    <Link href={item.href} className="text-white/40 text-xm hover:text-white">
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-4 w-fit">
                {FooterLinks.slice(4, 8).map((item, index) => (
                  <div key={index}>
                    <Link href={item.href} className="text-white/40 text-xm hover:text-white">
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between md:flex-nowrap flex-wrap items-center py-6 gap-6">
          <p className="text-white/40 text-sm ">
            ©2025 Mizell Home Inspections LLC - All Rights Reserved
          </p>
          <div className="flex gap-8 items-center">
            <Link href="#" className="text-white/40 hover:text-primary text-sm">
              Terms of service
            </Link>
            <Link href="#" className="text-white/40 hover:text-primary text-sm">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;