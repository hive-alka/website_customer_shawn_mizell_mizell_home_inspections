import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import FloatingButton from '@/components/shared/FloatingButton'
import NextTopLoader from 'nextjs-toploader'
import LocalBusinessSchema from '@/components/StructuredData/LocalBusiness'
import BreadcrumbSchema from '@/components/StructuredData/Breadcrumb'
import GoogleAnalytics from '@/components/Analytics/GoogleAnalytics'

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mizellhomeinspections.com'),

  title: {
    default: 'Mizell Home Inspections | Florida Home Inspector',
    template: '%s | Mizell Home Inspections',
  },

  description: 'Certified Master Inspector® Shawn Mizell provides thorough, professional home inspection services. Serving Gainesville down to St Pete, West Coast over to Orlando.',

  keywords: [
    'home inspection Florida',
    'home inspector Gainesville',
    'home inspection St Pete',
    'certified master inspector',
    'mold testing Florida',
    'thermal imaging inspection',
    'drone roof inspection',
    'InterNACHI certified',
  ],

  authors: [{ name: 'Shawn Mizell' }],
  creator: 'Mizell Home Inspections',
  publisher: 'Mizell Home Inspections',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mizellhomeinspections.com',
    siteName: 'Mizell Home Inspections',
    title: 'Mizell Home Inspections | Professional Home Inspector in Florida',
    description: 'Certified Master Inspector® Shawn Mizell provides thorough, professional home inspection services across Central Florida.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mizell Home Inspections - Professional Home Inspector',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Mizell Home Inspections | Professional Home Inspector in Florida',
    description: 'Certified Master Inspector® providing thorough home inspections across Central Florida.',
    images: ['/twitter-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://www.mizellhomeinspections.com',
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <LocalBusinessSchema />
      </head>
      <body className={`${font.className} bg-white antialiased overflow-x-hidden`}>
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'} />
        <BreadcrumbSchema />
        <NextTopLoader color="#C41E3A" />
        <Header />
        {children}
        <Footer />
        <FloatingButton />
      </body>
    </html>
  )
}
