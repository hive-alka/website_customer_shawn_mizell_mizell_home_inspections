"use client"
import HeroSub from "@/components/shared/HeroSub/index";
import { homeInspectionServices } from "@/app/api/services";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import CTA from "@/components/shared/CTA";

const ServicesPage = () => {
    // Get services by category
    const inspectionServices = homeInspectionServices.filter(
        service => service.category === 'Home Inspection Services'
    );

    const moldServices = homeInspectionServices.filter(
        service => service.category === 'Mold Testing Services'
    );

    const photographyFeatures = [
        'Professional high-resolution photography',
        'Interior and exterior shots',
        'Wide-angle lens for spacious feel',
        'Proper lighting and staging consultation',
        'Quick turnaround time',
        'Edited and ready-to-use images',
        'Drone photography available',
        'Twilight/dusk photography',
        'Virtual staging options',
        'Floor plan photography',
        '360-degree virtual tours',
        'Video walkthroughs'
    ];

    return (
        <>
            <HeroSub
                title="Our Professional Services"
                description="Serving from Gainesville down to St Pete, West Coast over to Orlando. Call 352-652-0259 for a free over-the-phone quote."
                badge="Services"
            />

            <section className='pt-0!'>
                <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>

                    {/* HOME INSPECTION SERVICES SECTION */}
                    <div id="home-inspections" className='mb-20 scroll-mt-24'>
                        <div className='grid grid-cols-12 gap-8 items-center mb-12'>
                            {/* Image on Left */}
                            <div className='lg:col-span-5 col-span-12'>
                                <div className='relative rounded-2xl overflow-hidden'>
                                    <Image
                                        src="/images/properties/property1/property1.jpg"
                                        alt="Home Inspection Services"
                                        width={600}
                                        height={500}
                                        className='w-full h-96 object-cover'
                                        unoptimized={true}
                                    />
                                </div>
                            </div>

                            {/* Text on Right */}
                            <div className='lg:col-span-7 col-span-12'>
                                <div className='flex items-center gap-3 mb-4'>
                                    <div className='p-3 bg-primary/10 rounded-full'>
                                        <Icon icon="ph:house-fill" width={32} height={32} className='text-primary' />
                                    </div>
                                    <h2 className='text-3xl lg:text-4xl font-semibold text-dark'>
                                        Home Inspection Services
                                    </h2>
                                </div>
                                <p className='text-dark/70 text-base mb-6'>
                                    Whether you are purchasing a pre-existing home or have a new build, Mizell Home Inspections LLC aims to satisfy all clients by providing an honest and thorough inspection. We inspect homes and businesses from Gainesville down to St Pete, West Coast over to Orlando.
                                </p>
                                <p className='text-dark/70 text-base mb-6'>
                                    Our goal is to give you an accurate understanding of the home you are purchasing and find the right fit for your needs. We can provide your builder or warranty representative with a detailed report of our findings.
                                </p>

                                {/* List of Services */}
                                <div className='bg-dark/5 p-6 rounded-xl'>
                                    <h3 className='text-lg font-semibold text-dark mb-4'>Our Comprehensive Inspections Include:</h3>
                                    <ul className='space-y-3'>
                                        {inspectionServices.map((service, index) => (
                                            <li key={index} className='flex items-start gap-3'>
                                                <Icon icon={service.icon} width={24} height={24} className='text-primary flex-shrink-0 mt-0.5' />
                                                <div>
                                                    <p className='font-semibold text-dark'>{service.name}</p>
                                                    <p className='text-sm text-dark/60'>{service.description}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MOLD TESTING SECTION */}
                    <div id="mold-testing" className='mb-20 scroll-mt-24'>
                        <div className='grid grid-cols-12 gap-8 items-center mb-12'>
                            {/* Video on Left */}
                            <div className='lg:col-span-5 col-span-12'>
                                <div className='relative rounded-2xl overflow-hidden shadow-xl'>
                                    <div className='aspect-video'>
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src="https://www.youtube.com/embed/NTC0riR3EeI"
                                            title="Mold Inspection Video"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            className='rounded-2xl'
                                        ></iframe>
                                    </div>
                                </div>
                            </div>

                            {/* Text on Right */}
                            <div className='lg:col-span-7 col-span-12'>
                                <div className='flex items-center gap-3 mb-4'>
                                    <div className='p-3 bg-primary/10 rounded-full'>
                                        <Icon icon="ph:drop-fill" width={32} height={32} className='text-primary' />
                                    </div>
                                    <h2 className='text-3xl lg:text-4xl font-semibold text-dark'>
                                        Mold Testing Services
                                    </h2>
                                </div>
                                <p className='text-dark/70 text-base mb-6'>
                                    Do you have mold problems or are not sure but think you might? Make sure to call Mizell Home Inspections LLC today! Our inspector, Shawn, will provide a complete home health evaluation from Gainesville down to St Pete, West Coast over to Orlando.
                                </p>
                                <p className='text-dark/70 text-base mb-6'>
                                    Our testing services will not only test the type of mold you have but also evaluate the quality of air in your home. This will help you know what hazards are present that can damage your health. If your property tests positive for mold content and needs remediation, we can refer you to reputable companies that provide remediation services.
                                </p>

                                {/* List of Mold Testing Types */}
                                <div className='bg-dark/5 p-6 rounded-xl'>
                                    <h3 className='text-lg font-semibold text-dark mb-4'>During the mold testing process, we gather:</h3>
                                    <ul className='space-y-4 mb-6'>
                                        {moldServices.map((service, index) => (
                                            <li key={index} className='flex items-start gap-3'>
                                                <div className='flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
                                                    <span className='text-primary font-bold text-sm'>{index + 1}</span>
                                                </div>
                                                <div>
                                                    <p className='font-semibold text-dark'>{service.name}</p>
                                                    <p className='text-sm text-dark/60 mt-1'>{service.description}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href="/mold-testing"
                                        className='inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300'
                                    >
                                        Learn More About Mold Testing
                                        <Icon icon="ph:arrow-right" width={20} height={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* REAL ESTATE PHOTOGRAPHY SECTION */}
                    <div id="real-estate-photography" className='mb-20 scroll-mt-24'>
                        <div className='grid grid-cols-12 gap-8 items-center mb-12'>
                            {/* Photography Images on Left */}
                            <div className='lg:col-span-5 col-span-12'>
                                <div className='space-y-4'>
                                    <div className='relative rounded-2xl overflow-hidden shadow-lg'>
                                        <Image
                                            src="/images/gallery/FB_IMG_1695315253528-1920w.webp"
                                            alt="Real Estate Photography Example 1"
                                            width={600}
                                            height={400}
                                            className='w-full h-64 object-cover'
                                            unoptimized={true}
                                        />
                                    </div>
                                    <div className='relative rounded-2xl overflow-hidden shadow-lg'>
                                        <Image
                                            src="/images/gallery/FB_IMG_1695315380866-1920w.webp"
                                            alt="Real Estate Photography Example 2"
                                            width={600}
                                            height={400}
                                            className='w-full h-64 object-cover'
                                            unoptimized={true}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Text on Right */}
                            <div className='lg:col-span-7 col-span-12'>
                                <div className='flex items-center gap-3 mb-4'>
                                    <div className='p-3 bg-primary/10 rounded-full'>
                                        <Icon icon="ph:camera-fill" width={32} height={32} className='text-primary' />
                                    </div>
                                    <h2 className='text-3xl lg:text-4xl font-semibold text-dark'>
                                        Real Estate Photography
                                    </h2>
                                </div>
                                <p className='text-dark/70 text-base mb-6'>
                                    Professional photography services to showcase your property in the best light, helping you attract buyers and sell faster. High-quality images that make your listing stand out in a competitive market.
                                </p>
                                <p className='text-dark/70 text-base mb-6'>
                                    In today&apos;s digital age, the first showing happens online. Professional real estate photography is essential for making a strong first impression and attracting potential buyers.
                                </p>

                                {/* Photography Services List */}
                                <div className='bg-dark/5 p-6 rounded-xl'>
                                    <h3 className='text-lg font-semibold text-dark mb-4'>What&apos;s Included:</h3>
                                    <ul className='grid sm:grid-cols-2 gap-3'>
                                        {photographyFeatures.map((feature, index) => (
                                            <li key={index} className='flex items-start gap-2'>
                                                <Icon icon="ph:check" width={20} height={20} className='text-primary flex-shrink-0 mt-0.5' />
                                                <span className='text-sm text-dark'>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <CTA />
        </>
    );
};

export default ServicesPage;
