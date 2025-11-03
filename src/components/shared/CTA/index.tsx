import Link from 'next/link';

const CTA: React.FC = () => {
    return (
        <section>
            <div className='container max-w-8xl mx-auto px-4 sm:px-5 lg:px-6 2xl:px-0'>
                <div className="flex flex-col items-center gap-8">
                    <div className="text-center max-w-4xl px-4">
                        <h2 className='text-dark text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-semibold mb-4'>
                            The average home has 25&nbsp;defects.
                        </h2>
                        <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-dark/70 font-medium'>
                            We find them before you close.
                        </p>
                    </div>
                    <Link href="/contactus" className='bg-primary py-4 px-8 rounded-full text-white hover:bg-dark duration-300 font-semibold text-lg hover:scale-105 transition-transform'>
                        Schedule Inspection
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;
