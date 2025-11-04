import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Shawn Mizell | Certified Master Inspector',
  description: 'Learn about Certified Master Inspector® Shawn Mizell, his experience, qualifications, and commitment to providing thorough home inspection services across Central Florida.',
  openGraph: {
    title: 'About Shawn Mizell | Certified Master Inspector',
    description: 'Learn about Certified Master Inspector® Shawn Mizell and his professional home inspection services.',
    url: 'https://www.mizellhomeinspections.com/about',
    images: ['/og-about.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Shawn Mizell | Certified Master Inspector',
    description: 'Professional home inspector serving Central Florida',
  },
  alternates: {
    canonical: 'https://www.mizellhomeinspections.com/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
