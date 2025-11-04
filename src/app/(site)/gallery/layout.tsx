import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inspection Gallery | Photos & Documentation Examples',
  description: 'View examples of our thorough home inspection documentation, thermal imaging, and professional photography. See the quality of our inspection reports.',
  openGraph: {
    title: 'Inspection Gallery | Documentation Examples',
    description: 'Professional inspection documentation and imaging examples.',
    url: 'https://www.mizellhomeinspections.com/gallery',
    images: ['/og-gallery.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inspection Gallery | Documentation Examples',
    description: 'Professional inspection documentation and imaging examples.',
  },
  alternates: {
    canonical: 'https://www.mizellhomeinspections.com/gallery',
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
