import { ServiceCategory } from '@/types/serviceCategory'

export const serviceCategories: ServiceCategory[] = [
  {
    name: 'Home Inspection Services',
    slug: 'home-inspections',
    description: 'Whether you are purchasing a pre-existing home or have a new build, we provide honest and thorough inspections to give you an accurate understanding of the home you are purchasing.',
    icon: 'ph:house-fill',
    image: '/images/gallery/gallery4-1920w.webp',
    services: [
      'full-home-inspection',
      '4-point-wind-mitigation',
      'water-testing',
      'commercial-inspection',
      'termite-wdo-inspection'
    ]
  },
  {
    name: 'Mold Testing',
    slug: 'mold-testing',
    description: 'Complete home health evaluation including airborne mold spore testing, wall cavity sampling, and visible mold inspection. We test mold types and evaluate air quality to identify health hazards.',
    icon: 'ph:drop-fill',
    image: '/images/gallery/gallery6-1920w.webp'
  },
  {
    name: 'Real Estate Photography',
    slug: 'real-estate-photography',
    description: 'Professional photography services to showcase your property in the best light, helping you attract buyers and sell faster.',
    icon: 'ph:camera-fill',
    image: '/images/gallery/FB_IMG_1695315253528-1920w.webp'
  }
]
