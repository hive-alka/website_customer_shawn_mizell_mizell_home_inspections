'use client'
import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'

function GoogleAnalyticsContent({ measurementId }: { measurementId: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname && typeof window !== 'undefined') {
      const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag
      if (gtag) {
        gtag('config', measurementId, {
          page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
        })
      }
    }
  }, [pathname, searchParams, measurementId])

  return null
}

export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
    return null // Don't render if no valid ID
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Suspense fallback={null}>
        <GoogleAnalyticsContent measurementId={measurementId} />
      </Suspense>
    </>
  )
}
