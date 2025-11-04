'use client'
import { usePathname } from 'next/navigation'
import { Suspense } from 'react'

function BreadcrumbSchemaContent() {
  const pathname = usePathname()
  const paths = pathname.split('/').filter(Boolean)

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.mizellhomeinspections.com"
      },
      ...paths.map((path, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' '),
        "item": `https://www.mizellhomeinspections.com/${paths.slice(0, index + 1).join('/')}`
      }))
    ]
  }

  if (paths.length === 0) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
    />
  )
}

export default function BreadcrumbSchema() {
  return (
    <Suspense fallback={null}>
      <BreadcrumbSchemaContent />
    </Suspense>
  )
}
