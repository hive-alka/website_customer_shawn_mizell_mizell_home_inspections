import { Service } from '@/types/service'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const ServiceCard: React.FC<{ item: Service }> = ({ item }) => {
  const { name, description, slug, images, icon, category } = item

  const mainImage = images[0]?.src;

  return (
    <div>
      <div className='relative rounded-2xl border border-dark/10 group hover:shadow-3xl duration-300'>
        <div className='overflow-hidden rounded-t-2xl'>
          <Link href={`/services/${slug}`}>
            {mainImage && (
              <Image
                src={mainImage}
                alt={name}
                width={440}
                height={300}
                className='w-full rounded-t-2xl group-hover:brightness-50 group-hover:scale-125 transition duration-300 delay-75'
                unoptimized={true}
              />
            )}
          </Link>
          <div className='absolute top-6 right-6 p-4 bg-white rounded-full hidden group-hover:block'>
            <Icon
              icon={'solar:arrow-right-linear'}
              width={24}
              height={24}
              className='text-black'
            />
          </div>
        </div>
        <div className='p-6'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-start gap-3'>
              <div className='p-3 bg-primary/10 rounded-full flex-shrink-0'>
                <Icon icon={icon} width={24} height={24} className='text-primary' />
              </div>
              <div className='flex-1'>
                <Link href={`/services/${slug}`}>
                  <h3 className='text-xl font-medium text-black duration-300 group-hover:text-primary mb-1'>
                    {name}
                  </h3>
                </Link>
                {category && (
                  <p className='text-xs text-primary font-semibold mb-2'>
                    {category}
                  </p>
                )}
                <p className='text-sm text-black/70 line-clamp-3'>
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
