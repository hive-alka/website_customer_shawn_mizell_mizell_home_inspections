# SEO Optimization Checklist for Future Website Projects

**Purpose:** Use this checklist from day one to build SEO-optimized websites
**Based on:** SEO Site Checkup Report Analysis (Nov 2025)
**Target Score:** 85-90/100 from launch

---

## Table of Contents

1. [Project Setup & Configuration](#project-setup--configuration)
2. [Meta Tags & Metadata](#meta-tags--metadata)
3. [Images & Media](#images--media)
4. [Performance Optimization](#performance-optimization)
5. [Structured Data](#structured-data)
6. [Technical SEO](#technical-seo)
7. [Analytics & Tracking](#analytics--tracking)
8. [Security & Best Practices](#security--best-practices)
9. [Testing & Validation](#testing--validation)
10. [Launch Checklist](#launch-checklist)

---

## Project Setup & Configuration

### Initial Setup ✓

- [ ] **Choose SEO-friendly framework**
  - Next.js (recommended for React)
  - Nuxt.js (for Vue)
  - Gatsby (static sites)
  - Astro (multi-framework)

- [ ] **Configure build settings from start**
  - Enable image optimization
  - Set up compression
  - Configure caching headers
  - Enable security headers

- [ ] **Set up version control**
  - Initialize Git repository
  - Create `.gitignore` (exclude `.next`, `node_modules`, `.env`)
  - First commit with basic SEO config

---

### Next.js Configuration (next.config.js/ts)

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    remotePatterns: [
      // Add if using external images
      {
        protocol: 'https',
        hostname: 'example.com',
      },
    ],
  },

  // Compression
  compress: true,

  // Security and Performance Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },

  // Optimize build
  swcMinify: true,

  // Experimental optimizations
  experimental: {
    optimizePackageImports: ['@iconify/react', 'lucide-react'],
  },
};

export default nextConfig;
```

**Checklist:**
- [ ] Copy and customize this configuration
- [ ] Update domain names and image sources
- [ ] Test build output size
- [ ] Verify headers are working

---

## Meta Tags & Metadata

### Root Layout Metadata

**File:** `src/app/layout.tsx` (App Router) or `pages/_app.tsx` (Pages Router)

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.yourwebsite.com'),

  title: {
    default: 'Your Brand | Short Description (50-60 chars)',
    template: '%s | Your Brand',
  },

  description: 'Compelling description that explains what you do. 150-160 characters maximum. Include primary keywords naturally.',

  keywords: [
    'primary keyword',
    'secondary keyword',
    'long-tail keyword',
    'location + service',
    'brand name',
  ],

  authors: [{ name: 'Your Name or Company' }],
  creator: 'Your Company Name',
  publisher: 'Your Company Name',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.yourwebsite.com',
    siteName: 'Your Brand Name',
    title: 'Your Brand | Engaging Title for Social Media',
    description: 'Description that will appear when shared on social media.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Brand - Descriptive Alt Text',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Your Brand | Twitter-Specific Title',
    description: 'Description for Twitter shares.',
    images: ['/twitter-image.jpg'],
    creator: '@yourtwitterhandle',
    site: '@yourtwitterhandle',
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

  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    bing: 'your-bing-verification-code',
  },

  alternates: {
    canonical: 'https://www.yourwebsite.com',
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}
```

**Checklist:**
- [ ] Update all URLs to your domain
- [ ] Create og-image.jpg (1200×630px)
- [ ] Create twitter-image.jpg (1200×630px)
- [ ] Keep title under 60 characters
- [ ] Keep description between 150-160 characters
- [ ] Add relevant keywords (don't stuff)
- [ ] Create favicon and apple-touch-icon

---

### Page-Specific Metadata

**For each page, create unique metadata:**

```typescript
// Example: src/app/about/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Company History & Team',
  description: 'Learn about our story, mission, values, and the team behind [Your Brand]. Serving [location] since [year].',
  openGraph: {
    title: 'About Us | Company History & Team',
    description: 'Learn about our story, mission, and values.',
    url: 'https://www.yourwebsite.com/about',
    images: ['/og-about.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Company History & Team',
    description: 'Learn about our story, mission, and values.',
    images: ['/twitter-about.jpg'],
  },
  alternates: {
    canonical: 'https://www.yourwebsite.com/about',
  },
}

export default function AboutPage() {
  return (
    // Page content
  )
}
```

**Required for every page:**
- [ ] Unique title (50-60 chars)
- [ ] Unique description (150-160 chars)
- [ ] Canonical URL
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Page-specific OG image (optional but recommended)

---

### Dynamic Metadata (Blog Posts, Products, etc.)

```typescript
// Example: src/app/blog/[slug]/page.tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug)

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      url: `https://www.yourwebsite.com/blog/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
    alternates: {
      canonical: `https://www.yourwebsite.com/blog/${params.slug}`,
    },
  }
}
```

**Checklist:**
- [ ] Generate unique metadata for each dynamic page
- [ ] Include publish date for articles
- [ ] Use high-quality cover images
- [ ] Ensure descriptions are compelling

---

## Images & Media

### Image Optimization Setup

**NEVER use `unoptimized={true}` unless absolutely necessary**

#### Best Practices:

```tsx
// ✅ GOOD - Optimized image
import Image from 'next/image'

<Image
  src="/images/hero.jpg"
  alt="Descriptive alt text including keywords"
  width={1920}
  height={1080}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
  quality={85}
  priority={false} // true only for above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>

// ❌ BAD - Unoptimized image
<Image
  src="/images/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  unoptimized={true} // DON'T DO THIS
/>
```

---

### Image Checklist

**Before adding any image:**

- [ ] **Resize appropriately**
  - Hero images: 1920×1080 max
  - Content images: 1200×800 max
  - Thumbnails: 400×300 max
  - Icons: Use SVG when possible

- [ ] **Convert to modern formats**
  - Use WebP or AVIF
  - Keep original as fallback
  - Let Next.js Image handle conversion automatically

- [ ] **Optimize file size**
  - Use tools: TinyPNG, Squoosh, Sharp
  - Target: <200KB for hero, <100KB for content images
  - Compress without visible quality loss

- [ ] **Add descriptive alt text**
  - Describe what's in the image
  - Include keywords naturally
  - Keep under 125 characters
  - Don't start with "Image of" or "Picture of"

- [ ] **Specify dimensions**
  - Always include width and height
  - Maintains aspect ratio
  - Prevents layout shift (CLS)

- [ ] **Use appropriate loading strategy**
  - `priority={true}` for above-the-fold images
  - `loading="lazy"` for below-the-fold (default)
  - Preload critical images

- [ ] **Configure responsive sizes**
  - Use `sizes` attribute
  - Serve appropriate size for viewport
  - Example: `sizes="(max-width: 768px) 100vw, 50vw"`

---

### Social Media Images

**Create these images before launch:**

| Image Type | Dimensions | Format | Max Size | Usage |
|------------|------------|--------|----------|-------|
| Open Graph | 1200×630px | JPG/PNG | 300KB | Facebook, LinkedIn |
| Twitter Card | 1200×630px | JPG/PNG | 300KB | Twitter |
| Favicon | 32×32px | ICO/PNG | 10KB | Browser tab |
| Apple Touch Icon | 180×180px | PNG | 20KB | iOS home screen |
| Android Icon | 192×192px | PNG | 30KB | Android home screen |

**Design Checklist:**
- [ ] Use brand colors consistently
- [ ] Include logo
- [ ] Make text large and readable
- [ ] Test at thumbnail size (tiny!)
- [ ] Keep important content in safe zone (avoid outer 30px)
- [ ] Use high contrast

---

### Image Naming Convention

**Use SEO-friendly filenames:**

```
✅ GOOD:
- modern-kitchen-remodel-2024.jpg
- certified-home-inspector-florida.webp
- mold-testing-process-diagram.png

❌ BAD:
- IMG_1234.jpg
- DSC_5678.png
- untitled.webp
```

**Rules:**
- Use lowercase
- Separate words with hyphens (not underscores)
- Include relevant keywords
- Be descriptive but concise

---

## Performance Optimization

### Core Web Vitals Targets

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| **LCP** (Largest Contentful Paint) | ≤2.5s | 2.5s-4.0s | >4.0s |
| **FID** (First Input Delay) | ≤100ms | 100ms-300ms | >300ms |
| **CLS** (Cumulative Layout Shift) | ≤0.1 | 0.1-0.25 | >0.25 |

---

### Largest Contentful Paint (LCP) Optimization

- [ ] **Optimize hero/main image**
  - Add `priority={true}` to above-the-fold images
  - Preload critical images
  - Use appropriate format (WebP/AVIF)
  - Compress aggressively

- [ ] **Reduce server response time**
  - Use edge hosting (Vercel, Netlify)
  - Enable CDN
  - Optimize API calls

- [ ] **Eliminate render-blocking resources**
  - Inline critical CSS
  - Defer non-critical JavaScript
  - Use `next/script` with appropriate strategies

- [ ] **Use proper font loading**
  - Use `next/font` for Google Fonts
  - Subset fonts (only load needed characters)
  - Use `font-display: swap`

---

### Cumulative Layout Shift (CLS) Optimization

- [ ] **Always specify image dimensions**
  ```tsx
  <Image src="..." width={800} height={600} alt="..." />
  ```

- [ ] **Reserve space for ads/embeds**
  - Use aspect ratio containers
  - Set min-height for dynamic content

- [ ] **Avoid inserting content above existing content**
  - Load content in order
  - Don't shift layout after load

- [ ] **Use CSS containment**
  ```css
  .dynamic-content {
    contain: layout;
  }
  ```

---

### HTTP Requests Optimization

**Target: <20 requests per page**

- [ ] **Bundle and minify**
  - Use Next.js automatic bundling
  - Enable SWC minification
  - Remove unused dependencies

- [ ] **Combine small files**
  - Use CSS modules (automatic in Next.js)
  - Create SVG sprites for icons
  - Inline small SVGs

- [ ] **Lazy load non-critical resources**
  ```tsx
  import dynamic from 'next/dynamic'

  const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
    loading: () => <Skeleton />,
  })
  ```

- [ ] **Use resource hints**
  ```tsx
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="dns-prefetch" href="https://analytics.google.com" />
  ```

---

### Third-Party Scripts

**Use `next/script` with appropriate strategies:**

```tsx
import Script from 'next/script'

// Critical scripts (not recommended)
<Script src="..." strategy="beforeInteractive" />

// Analytics and tracking
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" strategy="afterInteractive" />

// Non-essential widgets
<Script src="https://widget.example.com/script.js" strategy="lazyOnload" />
```

**Checklist:**
- [ ] Audit all third-party scripts
- [ ] Remove unused scripts
- [ ] Defer non-critical scripts
- [ ] Consider self-hosting if possible

---

## Structured Data

### LocalBusiness Schema (for local businesses)

```typescript
// src/components/StructuredData/LocalBusiness.tsx
export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness", // or specific type: "Restaurant", "Store", etc.
    "@id": "https://www.yoursite.com/#organization",
    "name": "Your Business Name",
    "description": "Brief description of your business",
    "url": "https://www.yoursite.com",
    "logo": "https://www.yoursite.com/logo.png",
    "image": "https://www.yoursite.com/og-image.jpg",
    "telephone": "+1-555-555-5555",
    "email": "contact@yoursite.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "City",
      "addressRegion": "State",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128",
      "longitude": "-74.0060"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/yourpage",
      "https://www.instagram.com/yourprofile",
      "https://twitter.com/yourhandle",
      "https://www.linkedin.com/company/yourcompany"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

**Checklist:**
- [ ] Choose correct @type (LocalBusiness, Organization, etc.)
- [ ] Add all available properties
- [ ] Include social media links
- [ ] Add opening hours if applicable
- [ ] Include geo coordinates
- [ ] Validate with Schema.org validator

---

### Organization Schema (for companies/brands)

```typescript
const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.yoursite.com/#organization",
  "name": "Your Company Name",
  "url": "https://www.yoursite.com",
  "logo": "https://www.yoursite.com/logo.png",
  "description": "What your company does",
  "foundingDate": "2020-01-01",
  "founders": [
    {
      "@type": "Person",
      "name": "Founder Name"
    }
  ],
  "address": { /* same as LocalBusiness */ },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-555-5555",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": ["English"]
  },
  "sameAs": [ /* social media URLs */ ]
}
```

---

### Article/BlogPosting Schema

```typescript
// For blog posts
const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Article Title",
  "description": "Article description/excerpt",
  "image": "https://www.yoursite.com/article-image.jpg",
  "datePublished": "2024-01-15T08:00:00+00:00",
  "dateModified": "2024-01-20T10:30:00+00:00",
  "author": {
    "@type": "Person",
    "name": "Author Name",
    "url": "https://www.yoursite.com/authors/author-name"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Your Company",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.yoursite.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.yoursite.com/blog/article-slug"
  }
}
```

---

### Service Schema

```typescript
const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Your Service Name",
  "provider": {
    "@id": "https://www.yoursite.com/#organization"
  },
  "areaServed": {
    "@type": "State",
    "name": "Your State/Country"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Service Offerings",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Specific Service",
          "description": "Service description"
        }
      }
    ]
  }
}
```

---

### Breadcrumb Schema

```typescript
'use client'
import { usePathname } from 'next/navigation'

export default function BreadcrumbSchema() {
  const pathname = usePathname()
  const paths = pathname.split('/').filter(Boolean)

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.yoursite.com"
      },
      ...paths.map((path, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": formatPathName(path),
        "item": `https://www.yoursite.com/${paths.slice(0, index + 1).join('/')}`
      }))
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

function formatPathName(path: string): string {
  return path
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
```

---

### FAQ Schema

```typescript
const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer text here."
      }
    },
    // More Q&A pairs...
  ]
}
```

---

### Structured Data Checklist

For each page type, add appropriate schemas:

- [ ] **Homepage:** Organization or LocalBusiness
- [ ] **About:** Organization + Person (for team members)
- [ ] **Services:** Service schema for each service
- [ ] **Blog:** Article or BlogPosting
- [ ] **Products:** Product schema (e-commerce)
- [ ] **Contact:** ContactPage
- [ ] **FAQ:** FAQPage
- [ ] **All pages:** Breadcrumb

**Validation:**
- [ ] Test with Google Rich Results Test
- [ ] Validate with Schema.org validator
- [ ] Check Search Console for errors

---

## Technical SEO

### Sitemap Generation

**File:** `src/app/sitemap.ts` (App Router)

```typescript
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.yoursite.com'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Add more static pages...
  ]

  // Dynamic pages (e.g., blog posts)
  const posts = await getAllPosts() // Your function to fetch posts
  const dynamicPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...dynamicPages]
}
```

**Checklist:**
- [ ] Create sitemap.ts file
- [ ] Include all static pages
- [ ] Include all dynamic pages
- [ ] Set appropriate priorities (0.0-1.0)
- [ ] Set change frequencies
- [ ] Test at `/sitemap.xml`

---

### Robots.txt

**File:** `src/app/robots.ts` (App Router)

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.yoursite.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/*.json$',
          '/_next/',
        ],
      },
      // Block specific bad bots (optional)
      {
        userAgent: ['BadBot', 'ScraperBot'],
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
```

**Checklist:**
- [ ] Create robots.ts file
- [ ] Allow all pages you want indexed
- [ ] Block admin/private areas
- [ ] Include sitemap URL
- [ ] Test at `/robots.txt`

---

### URL Structure Best Practices

**✅ GOOD URLs:**
```
https://www.yoursite.com/about
https://www.yoursite.com/services/web-development
https://www.yoursite.com/blog/seo-guide-2024
https://www.yoursite.com/products/category/product-name
```

**❌ BAD URLs:**
```
https://www.yoursite.com/page?id=123
https://www.yoursite.com/index.php?page=about
https://www.yoursite.com/ABOUT (use lowercase)
https://www.yoursite.com/services_web_development (use hyphens, not underscores)
```

**Rules:**
- [ ] Use lowercase
- [ ] Use hyphens, not underscores
- [ ] Keep URLs short and descriptive
- [ ] Include keywords
- [ ] Avoid query parameters when possible
- [ ] Use logical hierarchy
- [ ] Keep consistent structure

---

### Canonical URLs

**Always specify canonical URLs to avoid duplicate content issues:**

```typescript
// In metadata
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.yoursite.com/page-path',
  },
}
```

**Checklist:**
- [ ] Add canonical URL to every page
- [ ] Use absolute URLs, not relative
- [ ] Point to the preferred version (www vs non-www)
- [ ] Ensure consistency across all pages

---

### 404 Page

**File:** `src/app/not-found.tsx`

```typescript
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found | Your Brand',
  description: 'The page you\'re looking for doesn\'t exist.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl mt-4">Page Not Found</h2>
      <p className="mt-2 text-gray-600">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="mt-8 space-x-4">
        <Link href="/" className="btn btn-primary">
          Go Home
        </Link>
        <Link href="/contact" className="btn btn-secondary">
          Contact Us
        </Link>
      </div>
    </div>
  )
}
```

**Checklist:**
- [ ] Create custom 404 page
- [ ] Use brand-specific title
- [ ] Set robots to noindex, nofollow
- [ ] Provide helpful links
- [ ] Match site design
- [ ] Consider adding search functionality

---

## Analytics & Tracking

### Google Analytics 4 Setup

**1. Create GA4 Property**
- Go to analytics.google.com
- Create new GA4 property
- Get Measurement ID (G-XXXXXXXXXX)

**2. Add GA Script**

**File:** `src/components/Analytics/GoogleAnalytics.tsx`

```typescript
'use client'
import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname && window.gtag) {
      window.gtag('config', measurementId, {
        page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
      })
    }
  }, [pathname, searchParams, measurementId])

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
    </>
  )
}
```

**3. Add to Layout**

```tsx
// src/app/layout.tsx
import GoogleAnalytics from '@/components/Analytics/GoogleAnalytics'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
        {children}
      </body>
    </html>
  )
}
```

**4. Add to .env.local**

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Checklist:**
- [ ] Create GA4 property
- [ ] Add measurement ID to environment variables
- [ ] Implement GA component
- [ ] Add to layout
- [ ] Test with GA Debugger extension
- [ ] Set up conversion goals
- [ ] Configure event tracking

---

### Event Tracking

**File:** `src/lib/analytics.ts`

```typescript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      params?: Record<string, any>
    ) => void
  }
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

// Predefined events
export const analytics = {
  // Button clicks
  clickButton: (buttonName: string) => {
    trackEvent('button_click', { button_name: buttonName })
  },

  // Form submissions
  submitForm: (formName: string) => {
    trackEvent('form_submit', { form_name: formName })
  },

  // Page engagement
  scrollToSection: (sectionName: string) => {
    trackEvent('scroll_to_section', { section_name: sectionName })
  },

  // Conversions
  scheduleService: (serviceName: string) => {
    trackEvent('schedule_service', { service_name: serviceName })
  },

  // Outbound links
  clickExternalLink: (url: string) => {
    trackEvent('click_external_link', { url })
  },

  // Downloads
  downloadFile: (fileName: string) => {
    trackEvent('file_download', { file_name: fileName })
  },
}
```

**Usage:**

```tsx
import { analytics } from '@/lib/analytics'

// In your component
<button onClick={() => {
  analytics.clickButton('CTA - Schedule Now')
  // ... rest of logic
}}>
  Schedule Now
</button>
```

**Checklist:**
- [ ] Set up event tracking system
- [ ] Track button clicks
- [ ] Track form submissions
- [ ] Track conversions
- [ ] Track outbound links
- [ ] Track file downloads
- [ ] Set up custom events for your specific goals

---

### Google Search Console Setup

**After launch:**

1. **Verify Ownership**
   - Go to search.google.com/search-console
   - Add property
   - Verify via DNS, HTML file, or meta tag

2. **Add verification to metadata:**

```typescript
export const metadata: Metadata = {
  verification: {
    google: 'your-google-verification-code',
  },
}
```

3. **Submit Sitemap**
   - Go to Sitemaps section
   - Submit: https://www.yoursite.com/sitemap.xml

4. **Monitor**
   - Check for crawl errors
   - Review Core Web Vitals
   - Monitor search performance
   - Fix any issues reported

**Checklist:**
- [ ] Verify site ownership
- [ ] Submit sitemap
- [ ] Set preferred domain (www vs non-www)
- [ ] Set up email alerts
- [ ] Monitor weekly

---

## Security & Best Practices

### Security Headers

Already included in next.config.ts, but verify these are present:

- [ ] **Strict-Transport-Security** - Forces HTTPS
- [ ] **X-Frame-Options** - Prevents clickjacking
- [ ] **X-Content-Type-Options** - Prevents MIME sniffing
- [ ] **X-XSS-Protection** - XSS protection
- [ ] **Referrer-Policy** - Controls referrer information
- [ ] **Permissions-Policy** - Controls browser features

**Test headers:**
```bash
curl -I https://www.yoursite.com
```

Or use: https://securityheaders.com/

---

### SSL/HTTPS

- [ ] Obtain SSL certificate (free from Let's Encrypt or hosting provider)
- [ ] Force HTTPS (redirect HTTP to HTTPS)
- [ ] Update all internal links to use HTTPS
- [ ] Check for mixed content warnings
- [ ] Test with SSL Labs: https://www.ssllabs.com/ssltest/

---

### Email Protection

**NEVER display plain email addresses in HTML**

**Option 1: Contact Form (Best)**
```tsx
<Link href="/contact">
  Contact Us
</Link>
```

**Option 2: JavaScript Obfuscation**
```tsx
'use client'
export function ObfuscatedEmail() {
  const [email, setEmail] = useState('')

  useEffect(() => {
    const parts = ['contact', '@', 'yoursite', '.', 'com']
    setEmail(parts.join(''))
  }, [])

  return <a href={`mailto:${email}`}>{email}</a>
}
```

**Option 3: CSS Reversal**
```tsx
<span className="email-reversed">
  moc.etisruoy@tcatnoc
</span>

/* CSS */
.email-reversed {
  unicode-bidi: bidi-override;
  direction: rtl;
}
```

**Checklist:**
- [ ] Never use plain email addresses
- [ ] Prefer contact forms
- [ ] Obfuscate if email display is necessary
- [ ] Add honeypot fields to forms (spam prevention)

---

### Accessibility (A11y)

**SEO and accessibility overlap significantly:**

- [ ] **Semantic HTML**
  - Use proper heading hierarchy (h1 → h2 → h3)
  - Only one h1 per page
  - Use `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`

- [ ] **Alt text for all images**
  - Descriptive, includes keywords naturally
  - Don't start with "Image of" or "Picture of"
  - Keep under 125 characters

- [ ] **Keyboard navigation**
  - All interactive elements accessible via Tab key
  - Visible focus indicators
  - Logical tab order

- [ ] **Color contrast**
  - Minimum 4.5:1 for normal text
  - Minimum 3:1 for large text
  - Test with: https://webaim.org/resources/contrastchecker/

- [ ] **ARIA labels where needed**
  ```tsx
  <button aria-label="Close menu">
    <XIcon />
  </button>
  ```

- [ ] **Form labels**
  ```tsx
  <label htmlFor="email">Email Address</label>
  <input id="email" type="email" name="email" />
  ```

**Test with:**
- Lighthouse (Accessibility score)
- WAVE (Web Accessibility Evaluation Tool)
- axe DevTools

---

## Testing & Validation

### Pre-Launch Testing Checklist

**1. Metadata Testing**
- [ ] Google Rich Results Test - https://search.google.com/test/rich-results
- [ ] Facebook Sharing Debugger - https://developers.facebook.com/tools/debug/
- [ ] Twitter Card Validator - https://cards-dev.twitter.com/validator
- [ ] LinkedIn Post Inspector - https://www.linkedin.com/post-inspector/
- [ ] Schema Markup Validator - https://validator.schema.org/

**2. Performance Testing**
- [ ] Google PageSpeed Insights - https://pagespeed.web.dev/
  - Target: 90+ score on both mobile and desktop
- [ ] GTmetrix - https://gtmetrix.com/
- [ ] WebPageTest - https://www.webpagetest.org/
- [ ] Chrome DevTools Lighthouse
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 95+
  - SEO: 95+

**3. SEO Testing**
- [ ] SEO Site Checkup - https://seositecheckup.com/
  - Target: 85+ score
- [ ] Screaming Frog SEO Spider (free up to 500 URLs)
- [ ] Test sitemap.xml loads correctly
- [ ] Test robots.txt loads correctly
- [ ] Check all pages are indexable
- [ ] Verify canonical URLs on all pages

**4. Mobile Testing**
- [ ] Google Mobile-Friendly Test - https://search.google.com/test/mobile-friendly
- [ ] Test on real devices (iPhone, Android)
- [ ] Check responsive design at various breakpoints
- [ ] Test touch targets (min 48×48px)
- [ ] Verify text readability (min 16px)

**5. Cross-Browser Testing**
- [ ] Chrome
- [ ] Firefox
- [ ] Safari (desktop and iOS)
- [ ] Edge
- [ ] Check console for errors

**6. Link Testing**
- [ ] All internal links work
- [ ] All external links work
- [ ] No 404 errors
- [ ] No redirect chains

**7. Security Testing**
- [ ] SSL certificate valid
- [ ] Security headers present
- [ ] No mixed content warnings
- [ ] Test at: https://securityheaders.com/

**8. Structured Data Testing**
- [ ] All schemas validate without errors
- [ ] Test each page type with schema
- [ ] Verify in Google Search Console after launch

---

### Testing Tools Quick Reference

| Tool | Purpose | URL |
|------|---------|-----|
| PageSpeed Insights | Performance, Core Web Vitals | https://pagespeed.web.dev/ |
| Rich Results Test | Structured data | https://search.google.com/test/rich-results |
| Mobile-Friendly Test | Mobile usability | https://search.google.com/test/mobile-friendly |
| Facebook Debugger | OG tags | https://developers.facebook.com/tools/debug/ |
| Twitter Card Validator | Twitter cards | https://cards-dev.twitter.com/validator |
| Schema Validator | JSON-LD syntax | https://validator.schema.org/ |
| SEO Site Checkup | Comprehensive SEO | https://seositecheckup.com/ |
| Security Headers | Security headers | https://securityheaders.com/ |
| SSL Test | SSL/TLS configuration | https://www.ssllabs.com/ssltest/ |
| WAVE | Accessibility | https://wave.webaim.org/ |
| GTmetrix | Performance analysis | https://gtmetrix.com/ |

---

## Launch Checklist

### Before Going Live

**Configuration:**
- [ ] Environment variables set for production
- [ ] Analytics ID configured
- [ ] Domain name configured
- [ ] SSL certificate active
- [ ] CDN configured (if using)
- [ ] Error pages working (404, 500)

**Content:**
- [ ] All pages have unique metadata
- [ ] All images have alt text
- [ ] All images optimized
- [ ] All links work
- [ ] All forms tested
- [ ] Contact information correct
- [ ] Legal pages (Privacy Policy, Terms) present

**SEO:**
- [ ] Sitemap.xml accessible
- [ ] Robots.txt accessible
- [ ] Structured data on all relevant pages
- [ ] Canonical URLs on all pages
- [ ] Social media images created
- [ ] All meta tags present

**Testing:**
- [ ] Passed all pre-launch tests
- [ ] Mobile-friendly
- [ ] Fast loading (LCP <2.5s)
- [ ] No console errors
- [ ] Analytics tracking working

---

### After Launch

**Immediate (Day 1):**
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify analytics is tracking
- [ ] Test from different locations
- [ ] Share on social media to test OG tags

**Week 1:**
- [ ] Monitor Search Console for crawl errors
- [ ] Check analytics for traffic
- [ ] Review Core Web Vitals in Search Console
- [ ] Fix any issues found

**Month 1:**
- [ ] Review search performance in Search Console
- [ ] Check which pages are indexed
- [ ] Monitor keyword rankings
- [ ] Analyze user behavior in GA4
- [ ] Make adjustments based on data

---

## Ongoing SEO Maintenance

### Weekly Tasks
- [ ] Monitor analytics traffic
- [ ] Check Search Console for errors
- [ ] Review site speed
- [ ] Check for broken links

### Monthly Tasks
- [ ] Review top-performing pages
- [ ] Update meta descriptions based on CTR
- [ ] Add new content (blog posts)
- [ ] Check competitor rankings
- [ ] Review and update keywords

### Quarterly Tasks
- [ ] Full site SEO audit
- [ ] Update structured data if needed
- [ ] Refresh old content
- [ ] Update images and OG images
- [ ] Review and improve slow pages

### Yearly Tasks
- [ ] Major content refresh
- [ ] Review and update all meta tags
- [ ] Audit and optimize entire image library
- [ ] Review technical SEO setup
- [ ] Update schema markup
- [ ] Review security and update as needed

---

## Quick Reference: Common Mistakes to Avoid

### ❌ DON'T:
1. Use `unoptimized={true}` on images
2. Forget alt text on images
3. Use duplicate meta titles/descriptions
4. Have missing or generic 404 pages
5. Display plain email addresses
6. Ignore mobile optimization
7. Skip structured data
8. Forget to create sitemap
9. Leave out canonical URLs
10. Use poor URL structure (uppercase, underscores, etc.)
11. Have slow loading times (LCP >2.5s)
12. Use too many HTTP requests (>20)
13. Forget to test on real devices
14. Skip analytics setup
15. Ignore security headers

### ✅ DO:
1. Optimize all images with Next.js Image
2. Add descriptive alt text to every image
3. Create unique metadata for every page
4. Build custom 404 with helpful links
5. Use contact forms instead of email addresses
6. Test mobile thoroughly
7. Add structured data to all relevant pages
8. Generate dynamic sitemap
9. Use canonical URLs everywhere
10. Follow URL best practices
11. Optimize for Core Web Vitals
12. Minimize HTTP requests
13. Test on multiple devices and browsers
14. Set up analytics from day one
15. Implement all security headers

---

## Environment Variables Template

**File:** `.env.local` (add to `.gitignore`)

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.yoursite.com
NEXT_PUBLIC_SITE_NAME="Your Brand Name"

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Search Console
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code

# Social Media
NEXT_PUBLIC_FACEBOOK_APP_ID=your-fb-app-id
NEXT_PUBLIC_TWITTER_HANDLE=@yourhandle

# Contact
NEXT_PUBLIC_CONTACT_EMAIL=contact@yoursite.com
NEXT_PUBLIC_PHONE=+1-555-555-5555

# Business Info (for structured data)
NEXT_PUBLIC_BUSINESS_NAME="Your Business Name"
NEXT_PUBLIC_ADDRESS_STREET="123 Main Street"
NEXT_PUBLIC_ADDRESS_CITY="City"
NEXT_PUBLIC_ADDRESS_STATE="State"
NEXT_PUBLIC_ADDRESS_ZIP="12345"
NEXT_PUBLIC_ADDRESS_COUNTRY="US"
NEXT_PUBLIC_LATITUDE="40.7128"
NEXT_PUBLIC_LONGITUDE="-74.0060"

# API Keys (if needed)
# Keep these server-side only (no NEXT_PUBLIC_ prefix)
PRIVATE_API_KEY=your-private-key
```

---

## Useful Resources

### Official Documentation
- **Next.js SEO:** https://nextjs.org/learn/seo/introduction-to-seo
- **Google Search Central:** https://developers.google.com/search/docs
- **Schema.org:** https://schema.org/docs/documents.html
- **Web.dev (Google):** https://web.dev/learn/

### Tools
- **Google Search Console:** https://search.google.com/search-console
- **Google Analytics:** https://analytics.google.com/
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Lighthouse:** https://developers.google.com/web/tools/lighthouse

### Communities
- **Next.js Discord:** https://discord.gg/nextjs
- **Reddit r/SEO:** https://www.reddit.com/r/SEO/
- **Stack Overflow:** Tag: next.js, seo

---

## Final Notes

### Remember:
1. **SEO is ongoing** - It's not a one-time task
2. **Content is king** - Great technical SEO won't help poor content
3. **User experience matters** - Fast, accessible sites rank better
4. **Mobile-first** - Most traffic is mobile, optimize for it
5. **Test everything** - Don't assume, verify
6. **Monitor regularly** - Use Search Console and Analytics
7. **Stay updated** - SEO best practices evolve

### Success Metrics:
- SEO Score: 85-90/100 at launch
- LCP: <2.5 seconds
- Page Load: <3 seconds
- Mobile-Friendly: Yes
- Core Web Vitals: All "Good"
- Structured Data: All valid
- All pages indexed within 1 month

---

## Document Information

**Version:** 1.0
**Created:** November 2025
**Based on:** SEO Site Checkup Report Analysis
**Maintained by:** Your Development Team
**Next Review:** Quarterly

---

**Print this checklist and check off items as you complete them for each new project!**
