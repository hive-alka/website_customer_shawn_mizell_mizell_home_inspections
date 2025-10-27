import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

export const metadata: Metadata = {
  title: "Mold Testing & Inspection | Mizell Home Inspections",
  description: "Professional mold inspection and testing services to identify potential health hazards and ensure air quality in your home.",
};

export default function MoldInspectionPage() {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/services/mold-inspection", text: "Mold Testing" }
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
                Mold Testing & Inspection
              </h1>
              <p className="text-lg text-dark/60 dark:text-white/60 mb-8">
                Professional mold inspection and testing to identify potential health hazards and ensure air quality. Our certified inspectors use advanced testing methods to detect mold presence and provide detailed remediation recommendations.
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
                  Schedule Testing
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/categories/luxury-villa.jpg"
                alt="Mold Testing and Inspection"
                width={600}
                height={400}
                className="rounded-2xl w-full"
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Mold Testing Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-5 2xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-dark dark:text-white mb-6">
              Why Mold Testing Matters
            </h2>
            <p className="text-lg text-dark/60 dark:text-white/60 max-w-3xl mx-auto">
              Mold can cause serious health issues and property damage. Early detection is key to preventing costly remediation and protecting your family's health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "ph:heart-fill",
                title: "Health Protection",
                description: "Prevent respiratory issues, allergies, and other health problems caused by mold exposure"
              },
              {
                icon: "ph:shield-check-fill",
                title: "Early Detection",
                description: "Identify mold growth before it becomes a major problem requiring extensive remediation"
              },
              {
                icon: "ph:house-fill",
                title: "Property Value",
                description: "Maintain your home's value by addressing mold issues promptly and professionally"
              },
              {
                icon: "ph:wind-fill",
                title: "Air Quality",
                description: "Ensure healthy indoor air quality for you and your family's wellbeing"
              },
              {
                icon: "ph:eye-fill",
                title: "Hidden Mold",
                description: "Detect mold in areas not visible to the naked eye using professional testing methods"
              },
              {
                icon: "ph:file-text-fill",
                title: "Documentation",
                description: "Receive detailed reports for insurance claims or remediation contractors"
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

      {/* Testing Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-5 2xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-dark dark:text-white mb-6">
              Our Mold Testing Process
            </h2>
            <p className="text-lg text-dark/60 dark:text-white/60 max-w-3xl mx-auto">
              Comprehensive testing using state-of-the-art equipment and certified laboratory analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Visual Inspection",
                description: "Thorough visual examination of property for signs of moisture and mold growth"
              },
              {
                step: "02",
                title: "Air Sampling",
                description: "Collection of air samples to test for airborne mold spores and concentration levels"
              },
              {
                step: "03",
                title: "Surface Testing",
                description: "Direct sampling of suspected mold growth areas for species identification"
              },
              {
                step: "04",
                title: "Lab Analysis",
                description: "Professional laboratory analysis with detailed results and recommendations"
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

      {/* When to Test Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-5 2xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-dark dark:text-white mb-6">
                When to Test for Mold
              </h2>
              <div className="space-y-6">
                {[
                  "After water damage or flooding",
                  "Persistent musty odors in your home",
                  "Visible signs of mold growth",
                  "Unexplained health symptoms",
                  "Before purchasing a home",
                  "After major renovations",
                  "HVAC system contamination",
                  "High humidity or moisture issues"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon icon="ph:check" className="text-white text-sm" />
                    </div>
                    <p className="text-dark/80 dark:text-white/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-dark dark:text-white mb-4">
                Emergency Mold Testing
              </h3>
              <p className="text-dark/60 dark:text-white/60 mb-6">
                If you suspect mold growth or have experienced recent water damage, don't wait. Contact us immediately for emergency mold testing services.
              </p>
              <Link 
                href="tel:352-652-0259" 
                className="inline-flex items-center gap-3 py-3 px-6 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                <Icon icon="ph:phone-fill" className="text-lg" />
                Emergency Testing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-5 2xl:px-0">
          <div className="bg-primary rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Protect Your Health Today
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Don't take chances with mold. Get professional testing and peace of mind for your family's health and safety.
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
                Schedule Testing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
