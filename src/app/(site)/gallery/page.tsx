'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import HeroSub from '@/components/shared/HeroSub'
import CTA from '@/components/shared/CTA'

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/images/gallery/gallery2-1920w.webp', alt: 'Home Inspection', category: 'Home Inspection' },
  { id: 2, src: '/images/gallery/gallery4-1920w.webp', alt: 'Home Inspection', category: 'Home Inspection' },
  { id: 3, src: '/images/gallery/gallery5-1920w.webp', alt: 'Home Inspection', category: 'Home Inspection' },
  { id: 4, src: '/images/gallery/gallery6-1920w.webp', alt: 'Home Inspection', category: 'Home Inspection' },
  { id: 5, src: '/images/gallery/gallery7-1920w.webp', alt: 'Home Inspection', category: 'Home Inspection' },
  { id: 6, src: '/images/gallery/gallery8-1920w.webp', alt: 'Home Inspection', category: 'Home Inspection' },
  { id: 7, src: '/images/gallery/FB_IMG_1695315253528-1920w.webp', alt: 'Real Estate Photography', category: 'Real Estate Photography' },
  { id: 8, src: '/images/gallery/FB_IMG_1695315380866-1920w.webp', alt: 'Real Estate Photography', category: 'Real Estate Photography' },
  { id: 9, src: '/images/gallery/FB_IMG_1695315562375.jpg', alt: 'Home Inspection', category: 'Home Inspection' },
  { id: 10, src: '/images/gallery/FB_IMG_1695315729568.jpg', alt: 'Home Inspection', category: 'Home Inspection' },
  { id: 11, src: '/images/gallery/FB_IMG_1761484857081.jpg', alt: 'Home Inspection', category: 'Home Inspection' },
  { id: 12, src: '/images/gallery/FB_IMG_1761484869119.jpg', alt: 'Home Inspection', category: 'Home Inspection' },
  { id: 13, src: '/images/gallery/FB_IMG_1761485218663.jpg', alt: 'Home Inspection', category: 'Home Inspection' },
  { id: 14, src: '/images/gallery/FB_IMG_1761485265232.jpg', alt: 'Home Inspection', category: 'Home Inspection' },
  { id: 15, src: '/images/gallery/FB_IMG_1761485320168.jpg', alt: 'Home Inspection', category: 'Home Inspection' },
  { id: 16, src: '/images/gallery/FB_IMG_1761485367048.jpg', alt: 'Home Inspection', category: 'Home Inspection' },
  { id: 17, src: '/images/gallery/FB_IMG_1761485442214.jpg', alt: 'Home Inspection', category: 'Home Inspection' },
  { id: 18, src: '/images/gallery/FB_IMG_1761485475395.jpg', alt: 'Home Inspection', category: 'Home Inspection' },
]

const categories = ['All', 'Home Inspection', 'Real Estate Photography']

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  const handlePrevious = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
      const previousIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
      setSelectedImage(filteredImages[previousIndex])
    }
  }

  const handleNext = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
      const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
      setSelectedImage(filteredImages[nextIndex])
    }
  }

  return (
    <>
      <HeroSub
        title="Inspection Gallery"
        description="Browse through our collection of residential inspections, mold testing, and real estate photography"
        badge="Gallery"
      />

      <section className='py-20'>
        <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
          {/* Category Filter */}
          <div className='flex flex-wrap gap-4 justify-center mb-12'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-dark/5 text-dark hover:bg-dark/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className='group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300'
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-500'
                  unoptimized={true}
                />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div className='w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center'>
                    <Icon icon='ph:magnifying-glass-plus' className='text-white text-2xl' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className='fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4'
          onClick={() => setSelectedImage(null)}
        >
          <button
            className='absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-50'
            onClick={() => setSelectedImage(null)}
          >
            <Icon icon='ph:x' className='text-white text-2xl' />
          </button>

          <button
            className='absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-50'
            onClick={(e) => {
              e.stopPropagation()
              handlePrevious()
            }}
          >
            <Icon icon='ph:caret-left' className='text-white text-2xl' />
          </button>

          <button
            className='absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-50'
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
          >
            <Icon icon='ph:caret-right' className='text-white text-2xl' />
          </button>

          <div
            className='relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='relative w-full h-full flex items-center justify-center'>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className='max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg'
                unoptimized={true}
              />
            </div>
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg'>
              <p className='text-white font-semibold text-lg'>{selectedImage.alt}</p>
              <p className='text-white/80 text-sm'>{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      <CTA />
    </>
  )
}

export default GalleryPage
