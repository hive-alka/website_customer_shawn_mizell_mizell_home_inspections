export type Service = {
  name: string
  slug: string
  description: string
  features: string[]
  icon: string
  images: ServiceImage[]
  category?: string
}

interface ServiceImage {
  src: string
}
