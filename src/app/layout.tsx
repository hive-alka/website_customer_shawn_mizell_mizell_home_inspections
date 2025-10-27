import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import FloatingButton from '@/components/shared/FloatingButton'
import { ThemeProvider } from 'next-themes'
import NextTopLoader from 'nextjs-toploader';

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Mizell Home Inspections | Professional Home Inspection Services in Florida',
  description: 'Certified Master Inspector® Shawn Mizell provides thorough, professional home inspection services. Serving Gainesville down to St Pete, West Coast over to Orlando.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${font.className} bg-white dark:bg-black antialiased`}>
        <NextTopLoader color="#07be8a" />
        <ThemeProvider
          attribute='class'
          enableSystem={true}
          defaultTheme='light'>
          <Header />
          {children}
          <Footer />
          <FloatingButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
