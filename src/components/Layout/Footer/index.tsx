import Link from "next/link";
import { Icon } from "@iconify/react"
import { FooterLinks } from "@/app/api/footerlinks";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-dark pb-6">
      <div className="container mx-auto max-w-7xl py-12 px-4 sm:px-5 lg:px-6 2xl:px-0">

        {/* Main Footer Content - Single Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10">

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-white/60 text-sm">
              <Link href="tel:352-652-0259" className="block hover:text-primary transition-colors">
                352-652-0259
              </Link>
              <Link href="/contactus" className="block hover:text-primary transition-colors">
                Contact Us via Email
              </Link>
              <p>Mon - Fri: 9am - 6pm</p>
              <p className="pt-2">687 Harvard St.<br/>Brooksville, FL 34601</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {FooterLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-white/60 text-sm hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & Payment */}
          <div className="md:col-span-4">
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center gap-4 mb-6">
              <Link href="https://www.youtube.com/@inspectorshawn" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
                <Icon icon="mdi:youtube" width={24} height={24} />
              </Link>
              <Link href="https://www.tiktok.com/@inspectorshawn" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
                <Icon icon="ic:baseline-tiktok" width={24} height={24} />
              </Link>
              <Link href="https://www.facebook.com/inspectorshawn" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
                <Icon icon="ph:facebook-logo-bold" width={24} height={24} />
              </Link>
              <Link href="https://www.instagram.com/inspectorshawn" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
                <Icon icon="ph:instagram-logo-bold" width={24} height={24} />
              </Link>
            </div>

            {/* Payment Methods - Compact */}
            <div>
              <p className="text-white/60 text-xs mb-2">We Accept</p>
              <div className="flex flex-wrap items-center gap-1.5">
                <div className="bg-white rounded px-1.5 py-0.5 h-6 flex items-center">
                  <Icon icon="logos:visa" width={32} height={16} />
                </div>
                <div className="bg-white rounded px-1.5 py-0.5 h-6 flex items-center">
                  <Icon icon="logos:mastercard" width={24} height={16} />
                </div>
                <div className="bg-white rounded px-1.5 py-0.5 h-6 flex items-center">
                  <Icon icon="logos:amex" width={24} height={16} />
                </div>
                <div className="bg-white rounded px-1.5 py-0.5 h-6 flex items-center">
                  <Icon icon="logos:discover" width={32} height={16} />
                </div>
                <div className="bg-white rounded px-1.5 py-0.5 h-6 flex items-center">
                  <Icon icon="logos:paypal" width={32} height={16} />
                </div>
                <div className="bg-white/10 rounded px-2 py-0.5 h-6 flex items-center">
                  <span className="text-[10px] font-semibold text-white">Cash</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Compact */}
        <div className="pt-6 space-y-3">
          <p className="text-white/60 text-xs">
            Licensed | Bonded | Insured | HI12770 | MRSA 4693
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-2 text-white/40 text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <p>
                Website Powered By <Link href="https://www.hiveinspect.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">Hive - AI Copilot for Home Inspectors</Link>
              </p>
              <span className="hidden sm:inline">|</span>
              <p>©2025 Mizell Home Inspections LLC. All Rights Reserved.</p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/terms-of-service" className="hover:text-primary transition-colors min-h-[44px] flex items-center">
                Terms
              </Link>
              <Link href="/privacy-policy" className="hover:text-primary transition-colors min-h-[44px] flex items-center">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;