import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

export const metadata: Metadata = {
  title: "Pre-listing Inspection | Mizell Home Inspections",
  description: "Pre-listing inspection services to identify potential issues before putting your home on the market. Sell with confidence.",
};

export default function PreListingInspectionPage() {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/services/pre-listing-inspection", text: "Pre-listing Inspection" }
  ];

  return (
    <main>
      <Breadcrumb links={breadcrumbLinks} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-5 2xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-dark dark:text-white mb-6">
                Pre-listing Inspection
              </h1>
              <p className="text-lg text-dark/60 dark:text-white/60 mb-8">
                Get ahead of potential issues before putting your home on the market. Our pre-listing inspections help you address problems proactively, negotiate from a position of strength, and sell with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="tel:352-652-0259" 
                  className="inline-flex items-center gap-3 py-4 px-8 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300"
                >
                  <Icon icon="ph:phone-fill" className="text-xl" />
                  Call 352-652-0259
                </Link>
                <Link 
                  href="/schedule" 
                  className="inline-flex items-center gap-3 py-4 px-8 border-2 border-primary text-primary rounded-full font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon icon="ph:calendar-fill" className="text-xl" />
                  Schedule Inspection
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/categories/appartment.jpg"
                alt="Pre-listing Home Inspection"
                width={600}
                height={400}
                className="rounded-2xl w-full"
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-5 2xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-dark dark:text-white mb-6">
              Benefits of Pre-listing Inspection
            </h2>
            <p className="text-lg text-dark/60 dark:text-white/60 max-w-3xl mx-auto">
              Take control of your home sale process and avoid surprises that could derail negotiations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "ph:trending-up-fill",
                title: "Maximize Sale Price",
                description: "Address issues beforehand to justify your asking price and avoid last-minute negotiations"
              },
              {
                icon: "ph:clock-fill",
                title: "Faster Sale Process",
                description: "Reduce delays by identifying and resolving potential deal-breakers early"
              },
              {
                icon: "ph:shield-check-fill",
                title: "Negotiation Power",
                description: "Know your property's condition and negotiate from a position of strength"
              },
              {
                icon: "ph:target-fill",
                title: "Targeted Repairs",
                description: "Focus repair efforts on issues that matter most to potential buyers"
              },
              {
                icon: "ph:handshake-fill",
                title: "Build Trust",
                description: "Demonstrate transparency and build confidence with potential buyers"
              },
              {
                icon: "ph:calendar-check-fill",
                title: "Timeline Control",
                description: "Complete repairs on your timeline rather than rushing to meet closing deadlines"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon icon={item.icon} className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-dark/60 dark:text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Cover Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-5 2xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-dark dark:text-white mb-6">
                Comprehensive Pre-listing Coverage
              </h2>
              <p className="text-lg text-dark/60 dark:text-white/60 mb-8">
                Our pre-listing inspection covers all the same areas as a buyer's inspection, giving you the same perspective potential buyers will have.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Structural Systems",
                  "Electrical Systems", 
                  "Plumbing Systems",
                  "HVAC Systems",
                  "Roofing & Exterior",
                  "Interior Components",
                  "Safety Systems",
                  "Insulation & Ventilation"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon icon="ph:check" className="text-white text-xs" />
                    </div>
                    <p className="text-dark/80 dark:text-white/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-dark rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-dark dark:text-white mb-4">
                Seller's Advantage Report
              </h3>
              <p className="text-dark/60 dark:text-white/60 mb-6">
                Our detailed report prioritizes findings by their potential impact on the sale, helping you make informed decisions about which repairs to address.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <Icon icon="ph:star-fill" className="text-primary" />
                  <span className="text-dark/80 dark:text-white/80">Priority repair recommendations</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon icon="ph:star-fill" className="text-primary" />
                  <span className="text-dark/80 dark:text-white/80">Cost-benefit analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon icon="ph:star-fill" className="text-primary" />
                  <span className="text-dark/80 dark:text-white/80">Market impact assessment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-5 2xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-dark dark:text-white mb-6">
              Pre-listing Process
            </h2>
            <p className="text-lg text-dark/60 dark:text-white/60 max-w-3xl mx-auto">
              A streamlined process designed to get you market-ready quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Schedule",
                description: "Book your pre-listing inspection at your convenience"
              },
              {
                step: "02",
                title: "Inspect",
                description: "Comprehensive evaluation with seller-focused perspective"
              },
              {
                step: "03",
                title: "Prioritize",
                description: "Receive prioritized recommendations for maximum impact"
              },
              {
                step: "04",
                title: "List",
                description: "Go to market with confidence and full disclosure"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-dark dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-dark/60 dark:text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-5 2xl:px-0">
          <div className="bg-primary rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Sell Smart?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Get ahead of the game with a pre-listing inspection. Sell faster, for more money, with fewer surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="tel:352-652-0259" 
                className="inline-flex items-center gap-3 py-4 px-8 bg-white text-primary rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                <Icon icon="ph:phone-fill" className="text-xl" />
                Call 352-652-0259
              </Link>
              <Link 
                href="/schedule" 
                className="inline-flex items-center gap-3 py-4 px-8 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300"
              >
                <Icon icon="ph:calendar-fill" className="text-xl" />
                Schedule Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
