import React, { FC } from "react";
import { Icon } from "@iconify/react/dist/iconify.js"

interface HeroSubProps {
    title: string;
    description: string;
    badge: string;
}

const HeroSub: FC<HeroSubProps> = ({ title, description, badge }) => {

    return (
        <>
            <section className="text-center bg-cover !pt-40 pb-20 relative overflow-x-hidden" >
                <div className='flex gap-2.5 items-center justify-center'>
                    <span>
                        <Icon
                            icon={'ph:house-simple-fill'}
                            width={20}
                            height={20}
                            className='text-primary'
                        />
                    </span>
                    <p className='text-base font-semibold text-dark/75'>
                        {badge}
                    </p>
                </div>
                <h2 className="text-dark text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] relative font-bold" >{title}</h2>
                <p className="text-base sm:text-lg text-dark/50 font-normal w-full max-w-3xl mx-auto px-4">
                    {description}
                </p>
            </section>
        </>
    );
};

export default HeroSub;