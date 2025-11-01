import Link from 'next/link';

const CTA: React.FC = () => {
    return (
        <section>
            <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
                <div className="flex flex-col items-center gap-8">
                    <h2 className='text-dark dark:text-white text-[40px] leading-[1.2] max-w-2xl text-center font-semibold'>
                        Ready for Your Home Inspection?
                    </h2>
                    <Link href="/contactus" className='bg-primary py-4 px-8 rounded-full text-white hover:bg-dark duration-300 font-semibold text-lg'>
                        Schedule Your Inspection Today
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;
