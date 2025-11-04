import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Inspection Services | Comprehensive Property Inspections',
  description: 'Professional home inspection services including thermal imaging, mold testing, drone roof inspections, and comprehensive property evaluations. Certified Master Inspector® services across Central Florida.',
  openGraph: {
    title: 'Professional Home Inspection Services',
    description: 'Comprehensive home inspection services with advanced technology and certified expertise.',
    url: 'https://www.mizellhomeinspections.com/services',
    images: ['/og-services.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Home Inspection Services',
    description: 'Comprehensive inspections with certified expertise.',
  },
  alternates: {
    canonical: 'https://www.mizellhomeinspections.com/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
