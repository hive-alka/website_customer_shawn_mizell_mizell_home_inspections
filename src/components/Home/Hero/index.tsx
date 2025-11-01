import Image from 'next/image'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section className='!py-0'>
      <div className='bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 overflow-hidden relative'>
        <div className='container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-60 md:pb-68'>
          <div className='relative text-white dark:text-dark text-center md:text-start z-10'>
            <p className='text-inherit text-xm font-medium'>Professional Home Inspections</p>
            <h1 className='text-inherit text-5xl sm:text-7xl lg:text-8xl font-semibold -tracking-wider md:max-w-45p mt-4 mb-4'>
              Your Home's Safety First
            </h1>
            <p className='text-xl font-bold text-primary mb-2'>We INSPECT what you EXPECT!</p>
            <p className='text-lg text-white/90 dark:text-dark/90 mb-6'>We are a small, family-owned business.</p>
            <p className='text-white/90 dark:text-dark/90 text-lg font-medium mb-6'>
              5000+ Inspections • Commercial and Residential • Same Day Reports • Fully Licensed and Insured
            </p>
            <div className='flex flex-col xs:flex-row justify-center md:justify-start gap-4'>
              <Link href="/contactus" className='px-8 py-4 border border-white dark:border-dark bg-white dark:bg-dark text-dark dark:text-white duration-300 dark:hover:text-dark hover:bg-transparent hover:text-white text-base font-semibold rounded-full hover:cursor-pointer'>
                Schedule Inspection
              </Link>
              <Link href="/services" className='px-8 py-4 border border-white dark:border-dark bg-transparent text-white dark:text-dark hover:bg-white dark:hover:bg-dark dark:hover:text-white hover:text-dark duration-300 text-base font-semibold rounded-full hover:cursor-pointer'>
                Our Services
              </Link>
            </div>
          </div>
          <div className='hidden md:block absolute -top-2 -right-68'>
            <Image
              src={'/images/hero/heroBanner.png'}
              alt='heroImg'
              width={1082}
              height={1016}
              priority={false}
              unoptimized={true}
            />
          </div>
        </div>
        <div className='md:absolute bottom-0 md:-right-68 xl:right-0 bg-white dark:bg-black py-20 px-8 mobile:px-16 md:pl-16 md:pr-[295px] rounded-t-2xl md:rounded-none md:rounded-tl-2xl mt-24 shadow-lg'>
          {/* Simplified Social Proof Section */}
          <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
            {/* Google Reviews - Clean Design */}
            <a 
              href="https://www.google.com/search?q=mizellhomeinspections&oq=mizell+&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyDAgCECMYJxiABBiKBTINCAMQLhivARjHARiABDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg90gEIMjI1MGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center gap-4 hover:opacity-80 transition-opacity duration-300'
            >
              <span className='text-yellow-500 text-4xl'>★★★★★</span>
              <div>
                <p className='text-xl font-bold text-gray-800 dark:text-white'>5.0 Google Reviews</p>
              </div>
            </a>

            {/* Certifications & Service Area - Minimal */}
            <div className='flex flex-col sm:flex-row items-center gap-8 text-xl text-gray-600 dark:text-gray-300'>
              <div className='flex items-center gap-4'>
                <Image
                  src='/images/internachi-certified.webp'
                  alt='InterNACHI Certified'
                  width={48}
                  height={48}
                  className='object-contain'
                  unoptimized={true}
                />
                <span>InterNACHI Certified</span>
              </div>
              
              <div className='flex items-center gap-4'>
                <span className='text-3xl'>📍</span>
                <span>Gainesville - Orlando</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
