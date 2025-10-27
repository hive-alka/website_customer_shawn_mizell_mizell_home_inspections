import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

export const metadata: Metadata = {
  title: "Residential Home Inspection | Mizell Home Inspections",
  description: "Comprehensive residential home inspection services for buyers and sellers. Complete evaluation of all major home systems and components.",
};

export default function ResidentialInspectionPage() {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/services/residential-inspection", text: "Residential Inspection" }
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
                Complete Home Inspection
              </h1>
              <p className="text-lg text-dark/60 dark:text-white/60 mb-8">
                Comprehensive evaluation of all major home systems and components for buyers and sellers. Our detailed inspection reports help you make informed decisions about your property investment.
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
                src="/images/categories/villas.jpg"
                alt="Residential Home Inspection"
                width={600}
                height={400}
                className="rounded-2xl w-full"
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Inspect Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-5 2xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-dark dark:text-white mb-6">
              What We Inspect
            </h2>
            <p className="text-lg text-dark/60 dark:text-white/60 max-w-3xl mx-auto">
              Our comprehensive home inspection covers all major systems and components to ensure your safety and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "ph:house-fill",
                title: "Structural Systems",
                description: "Foundation, framing, roof structure, and load-bearing elements"
              },
              {
                icon: "ph:lightning-fill",
                title: "Electrical Systems",
                description: "Main panel, circuits, outlets, switches, and electrical safety"
              },
              {
                icon: "ph:drop-fill",
                title: "Plumbing Systems",
                description: "Water supply, drainage, fixtures, and water pressure testing"
              },
              {
                icon: "ph:thermometer-fill",
                title: "HVAC Systems",
                description: "Heating, ventilation, air conditioning, and ductwork inspection"
              },
              {
                icon: "ph:shield-check-fill",
                title: "Safety Features",
                description: "Smoke detectors, carbon monoxide detectors, and safety systems"
              },
              {
                icon: "ph:door-fill",
                title: "Interior & Exterior",
                description: "Doors, windows, insulation, ventilation, and weatherproofing"
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-5 2xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-dark dark:text-white mb-6">
              Our Inspection Process
            </h2>
            <p className="text-lg text-dark/60 dark:text-white/60 max-w-3xl mx-auto">
              A systematic approach to ensure nothing is missed during your home inspection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Schedule",
                description: "Book your inspection online or call us directly"
              },
              {
                step: "02",
                title: "Inspect",
                description: "Thorough on-site evaluation of all major systems"
              },
              {
                step: "03",
                title: "Report",
                description: "Detailed digital report with photos and recommendations"
              },
              {
                step: "04",
                title: "Follow-up",
                description: "Available for questions and clarifications"
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
              Ready to Schedule Your Inspection?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Get peace of mind with our comprehensive home inspection. Contact us today to schedule your appointment.
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
                Schedule Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
