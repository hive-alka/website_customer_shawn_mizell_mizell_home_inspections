export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.mizellhomeinspections.com/#organization",
    "name": "Mizell Home Inspections",
    "description": "Certified Master Inspector® providing professional home inspection services across Central Florida",
    "url": "https://www.mizellhomeinspections.com",
    "logo": "https://www.mizellhomeinspections.com/images/header/dark-logo.svg",
    "image": "https://www.mizellhomeinspections.com/og-image.jpg",
    "telephone": "+1-352-219-5963",
    "email": "contact@mizellhomeinspections.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Central Florida",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Gainesville"
      },
      {
        "@type": "City",
        "name": "St Petersburg"
      },
      {
        "@type": "City",
        "name": "Orlando"
      },
      {
        "@type": "City",
        "name": "Tampa"
      },
      {
        "@type": "City",
        "name": "Brooksville"
      },
      {
        "@type": "City",
        "name": "Spring Hill"
      }
    ],
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "100",
      "bestRating": "5",
      "worstRating": "1"
    },
    "founder": {
      "@type": "Person",
      "name": "Shawn Mizell",
      "jobTitle": "Certified Master Inspector®"
    },
    "sameAs": [
      "https://www.facebook.com/mizellhomeinspections",
      "https://www.google.com/search?q=mizellhomeinspections"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
