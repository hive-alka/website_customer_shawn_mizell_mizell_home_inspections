import ServiceCard from '@/components/Services/ServiceCard/ServiceCard'
import { homeInspectionServices } from '@/app/api/services'

const ServicesList: React.FC = () => {
  return (
    <section className='pt-0!'>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
          {homeInspectionServices.map((item, index) => (
            <div key={index} className=''>
              <ServiceCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesList
