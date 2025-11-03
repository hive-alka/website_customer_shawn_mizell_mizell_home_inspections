"use client"
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { serviceCategories } from "@/app/api/serviceCategories";

const Categories = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-0 top-0">
        <Image
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          unoptimized={true}
        />
      </div>
      <div className="container max-w-8xl mx-auto px-4 sm:px-5 lg:px-6 2xl:px-0 relative z-10">
        <div className="grid grid-cols-12 items-center gap-10">
          <div className="lg:col-span-6 col-span-12">
            <p className="text-dark/75 text-base font-semibold flex gap-2.5">
              <Icon icon="ph:house-simple-fill" className="text-2xl text-primary " />
              Our Services
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] leading-[1.2] font-semibold text-dark mt-4 mb-4">
              Professional Home Inspection Services
            </h2>
            <p className="text-[17px] leading-[1.5] text-dark/60 lg:max-w-full md:max-w-3/4">
              Comprehensive inspections to protect your investment and ensure peace of mind.
            </p>
            <Link href="/services" className="py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark duration-300">
              View all services
            </Link>
          </div>

          {/* First Category - Split Card */}
          <div className="lg:col-span-6 col-span-12">
            <Link href={`/services#${serviceCategories[0].slug}`} className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group h-full">
              <div className="lg:w-[45%] w-full overflow-hidden">
                <Image
                  src={serviceCategories[0].image}
                  alt={serviceCategories[0].name}
                  width={680}
                  height={386}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized={true}
                />
              </div>
              <div className="lg:w-[55%] w-full p-3 xs:p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-dark text-2xl font-semibold mb-3">
                    {serviceCategories[0].name}
                  </h3>
                  <p className="text-dark/70 text-base leading-[1.6]">
                    {serviceCategories[0].description}
                  </p>
                </div>
                <div className="flex justify-end mt-6">
                  <div className="bg-primary/10 text-primary rounded-full w-fit p-3 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon icon="ph:arrow-right" width={20} height={20} />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Second Category - Split Card */}
          <div className="lg:col-span-6 col-span-12">
            <Link href={`/services#${serviceCategories[1].slug}`} className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group h-full">
              <div className="lg:w-[45%] w-full overflow-hidden">
                <Image
                  src={serviceCategories[1].image}
                  alt={serviceCategories[1].name}
                  width={680}
                  height={386}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized={true}
                />
              </div>
              <div className="lg:w-[55%] w-full p-3 xs:p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-dark text-2xl font-semibold mb-3">
                    {serviceCategories[1].name}
                  </h3>
                  <p className="text-dark/70 text-base leading-[1.6]">
                    {serviceCategories[1].description}
                  </p>
                </div>
                <div className="flex justify-end mt-6">
                  <div className="bg-primary/10 text-primary rounded-full w-fit p-3 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon icon="ph:arrow-right" width={20} height={20} />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Third Category - Split Card */}
          <div className="lg:col-span-6 col-span-12">
            <Link href={`/services#${serviceCategories[2].slug}`} className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group h-full">
              <div className="lg:w-[45%] w-full overflow-hidden">
                <Image
                  src={serviceCategories[2].image}
                  alt={serviceCategories[2].name}
                  width={680}
                  height={386}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized={true}
                />
              </div>
              <div className="lg:w-[55%] w-full p-3 xs:p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-dark text-2xl font-semibold mb-3">
                    {serviceCategories[2].name}
                  </h3>
                  <p className="text-dark/70 text-base leading-[1.6]">
                    {serviceCategories[2].description}
                  </p>
                </div>
                <div className="flex justify-end mt-6">
                  <div className="bg-primary/10 text-primary rounded-full w-fit p-3 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon icon="ph:arrow-right" width={20} height={20} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
