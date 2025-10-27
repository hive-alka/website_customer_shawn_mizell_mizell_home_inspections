import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

export const metadata: Metadata = {
  title: "Commercial Property Inspection | Mizell Home Inspections",
  description: "Thorough commercial property inspections for investors and business owners. Professional evaluation of commercial buildings and systems.",
};

export default function CommercialInspectionPage() {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/services/commercial-inspection", text: "Commercial Inspections" }
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
                Commercial Property Inspections
              </h1>
              <p className="text-lg text-dark/60 dark:text-white/60 mb-8">
                Thorough evaluation of commercial properties for investors and business owners. Our comprehensive inspections help you make informed decisions about your commercial real estate investments and ensure regulatory compliance.
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
                src="/images/categories/office.jpg"
                alt="Commercial Property Inspection"
                width={600}
                height={400}
                className="rounded-2xl w-full"
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-5 2xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-dark dark:text-white mb-6">
              Commercial Property Types
            </h2>
            <p className="text-lg text-dark/60 dark:text-white/60 max-w-3xl mx-auto">
              We inspect all types of commercial properties to help you make informed investment decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "ph:buildings-fill",
                title: "Office Buildings",
                description: "Multi-tenant office buildings, corporate headquarters, and professional service buildings"
              },
              {
                icon: "ph:storefront-fill",
                title: "Retail Spaces",
                description: "Shopping centers, standalone retail stores, restaurants, and commercial storefronts"
              },
              {
                icon: "ph:warehouse-fill",
                title: "Industrial Properties",
                description: "Warehouses, manufacturing facilities, distribution centers, and industrial complexes"
              },
              {
                icon: "ph:hospital-fill",
                title: "Healthcare Facilities",
                description: "Medical offices, clinics, dental practices, and specialized healthcare buildings"
              },
              {
                icon: "ph:graduation-cap-fill",
                title: "Educational Buildings",
                description: "Schools, training centers, daycare facilities, and educational institutions"
              },
              {
                icon: "ph:bed-fill",
                title: "Hospitality Properties",
                description: "Hotels, motels, bed & breakfasts, and other hospitality accommodations"
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

      {/* What We Inspect Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-5 2xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-dark dark:text-white mb-6">
              Comprehensive Commercial Inspection
            </h2>
            <p className="text-lg text-dark/60 dark:text-white/60 max-w-3xl mx-auto">
              Our thorough inspection covers all critical systems and components of your commercial property.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-dark dark:text-white mb-6">Structural & Exterior Systems</h3>
              <div className="space-y-4">
                {[
                  "Foundation and structural integrity",
                  "Exterior walls and building envelope",
                  "Roofing systems and drainage",
                  "Windows, doors, and security systems",
                  "Parking areas and site conditions",
                  "ADA compliance assessment"
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

            <div>
              <h3 className="text-2xl font-bold text-dark dark:text-white mb-6">Mechanical & Safety Systems</h3>
              <div className="space-y-4">
                {[
                  "HVAC systems and controls",
                  "Electrical systems and distribution",
                  "Plumbing and water systems",
                  "Fire safety and suppression systems",
                  "Emergency lighting and exits",
                  "Environmental compliance"
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
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-5 2xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-dark dark:text-white mb-6">
              Why Choose Commercial Inspection?
            </h2>
            <p className="text-lg text-dark/60 dark:text-white/60 max-w-3xl mx-auto">
              Protect your investment and ensure business continuity with professional commercial property inspection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "ph:shield-check-fill",
                title: "Risk Mitigation",
                description: "Identify potential issues before they become costly problems"
              },
              {
                icon: "ph:coins-fill",
                title: "Investment Protection",
                description: "Protect your commercial real estate investment with thorough due diligence"
              },
              {
                icon: "ph:gavel-fill",
                title: "Compliance Verification",
                description: "Ensure compliance with building codes and safety regulations"
              },
              {
                icon: "ph:chart-line-up-fill",
                title: "Value Assessment",
                description: "Accurate property condition assessment for informed decision making"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-5 2xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-dark dark:text-white mb-6">
              Our Commercial Inspection Process
            </h2>
            <p className="text-lg text-dark/60 dark:text-white/60 max-w-3xl mx-auto">
              A systematic approach tailored to the unique requirements of commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Initial consultation to understand your specific needs and property type"
              },
              {
                step: "02",
                title: "Site Survey",
                description: "Comprehensive on-site evaluation of all systems and components"
              },
              {
                step: "03",
                title: "Analysis",
                description: "Detailed analysis of findings with risk assessment and priorities"
              },
              {
                step: "04",
                title: "Report Delivery",
                description: "Professional report with recommendations and compliance notes"
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
              Ready to Inspect Your Commercial Property?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Make informed decisions about your commercial real estate investment. Contact us for a comprehensive inspection.
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
