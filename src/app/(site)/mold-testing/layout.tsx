import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mold Testing & Inspection Services | Florida',
  description: 'Professional mold testing and inspection services in Florida. Certified mold assessment, air quality testing, and detailed reports. Protect your home and health.',
  openGraph: {
    title: 'Mold Testing & Inspection Services',
    description: 'Professional mold testing with certified analysis and detailed reporting.',
    url: 'https://www.mizellhomeinspections.com/mold-testing',
    images: ['/og-mold.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mold Testing & Inspection Services',
    description: 'Professional mold testing and air quality analysis.',
  },
  alternates: {
    canonical: 'https://www.mizellhomeinspections.com/mold-testing',
  },
}

export default function MoldTestingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
