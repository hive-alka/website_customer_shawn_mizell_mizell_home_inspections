import Image from 'next/image'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section className='!py-0'>
      <div className='bg-gradient-to-b from-sky-200/60 via-sky-100/40 to-white overflow-hidden relative'>
        <div className='container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 pt-36 sm:pt-40 md:pt-40 lg:pt-60 pb-8 md:pb-68'>
          <div className='relative text-dark text-center md:text-start z-10'>
            <p className='text-sm sm:text-base text-dark/70 font-medium mb-3 md:max-w-lg'>
              We INSPECT what you EXPECT
            </p>
            <h1 className='text-dark text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-semibold md:max-w-45p mb-4'>
              Your Home&apos;s Safety First
            </h1>
            <p className='text-sm sm:text-base text-dark/60 mb-6 md:max-w-lg'>
              Certified Master Inspector® • 1,000+ Inspections • 24-Hour Reports • Small, Family-Owned Business
            </p>
            <div className='flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8 md:mb-0'>
              <Link href="/contactus" className='px-8 py-4 bg-primary text-white hover:bg-dark duration-300 text-base font-semibold rounded-full hover:cursor-pointer'>
                Schedule Inspection
              </Link>
              <Link href="/services" className='px-8 py-4 border border-dark bg-transparent text-dark hover:bg-dark hover:text-white duration-300 text-base font-semibold rounded-full hover:cursor-pointer'>
                Our Services
              </Link>
            </div>
          </div>
          <div className='hidden lg:block absolute -top-2 -right-68 overflow-hidden max-w-[1000px]'>
            <Image
              src={'/images/hero/heroBanner.png'}
              alt='Professional home inspection services in Florida'
              width={1082}
              height={1016}
              priority={true}
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              className='max-w-full h-auto'
            />
          </div>
        </div>
        <div className='md:absolute bottom-0 md:-right-68 xl:right-0 bg-white py-8 sm:py-12 md:py-20 px-4 sm:px-6 md:pl-16 md:pr-8 rounded-t-2xl md:rounded-none md:rounded-tl-2xl mt-0 md:mt-24 shadow-lg max-w-full overflow-hidden'>
          {/* Simplified Social Proof Section */}
          <div className='flex flex-col md:flex-row items-center justify-end gap-6 sm:gap-8 md:gap-12'>
            {/* Google Reviews - Clean Design */}
            <a
              href="https://www.google.com/search?q=mizellhomeinspections&oq=mizell+&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyDAgCECMYJxiABBiKBTINCAMQLhivARjHARiABDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg90gEIMjI1MGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center gap-3 hover:opacity-80 transition-opacity duration-300'
            >
              <span className='text-yellow-500 text-3xl sm:text-4xl'>★★★★★</span>
              <div>
                <p className='text-lg sm:text-xl font-bold text-gray-800'>5.0 Google Reviews</p>
              </div>
            </a>

            {/* Certifications & Service Area - Minimal */}
            <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 text-base sm:text-lg md:text-xl text-gray-600'>
              <div className='flex items-center gap-3'>
                <Image
                  src='/images/internachi-certified.webp'
                  alt='InterNACHI Certified Master Inspector'
                  width={40}
                  height={40}
                  className='object-contain sm:w-12 sm:h-12'
                />
                <span className='text-sm sm:text-base md:text-lg'>InterNACHI Certified</span>
              </div>

              <div className='flex items-center gap-3 text-center sm:text-left'>
                <span className='text-2xl sm:text-3xl'>📍</span>
                <span className='text-sm sm:text-base md:text-lg'>West Central FL: Gainesville to St Pete & Orlando</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
