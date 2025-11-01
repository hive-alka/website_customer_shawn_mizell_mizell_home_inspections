"use client";
import * as React from "react";
import { Icon } from "@iconify/react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/app/api/testimonial";

const Testimonial = () => {
    const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false })
    );

    React.useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    const handleDotClick = (index: number) => {
        if (api) {
            api.scrollTo(index);
        }
    };

    return (
        <section className="bg-gray-50 relative overflow-hidden py-20" id="testimonial">
            <div className="container max-w-7xl mx-auto px-5 2xl:px-0">
                <div className="text-center mb-12">
                    <div className="flex gap-2 items-center justify-center mb-3">
                        <Icon icon="mdi:star-circle" className="text-2xl text-primary" />
                        <p className="text-dark/75 text-base font-semibold">
                            Testimonials
                        </p>
                    </div>
                    <h2 className="text-[40px] leading-[1.2] font-semibold text-dark mb-4">
                        What Our Clients Say
                    </h2>
                </div>
                <Carousel
                    setApi={setApi}
                    plugins={[plugin.current]}
                    opts={{
                        loop: true,
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {testimonials.map((item, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="bg-white rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow min-h-[400px]">
                                    <Icon icon="mdi:format-quote-open" width={40} height={40} className="text-primary mb-4" />
                                    <p className="text-dark/70 text-base leading-relaxed mb-6 flex-grow">
                                        {item.review}
                                    </p>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Icon icon="mdi:star" className="text-yellow-500 text-lg" />
                                        <Icon icon="mdi:star" className="text-yellow-500 text-lg" />
                                        <Icon icon="mdi:star" className="text-yellow-500 text-lg" />
                                        <Icon icon="mdi:star" className="text-yellow-500 text-lg" />
                                        <Icon icon="mdi:star" className="text-yellow-500 text-lg" />
                                    </div>
                                    <h6 className="text-dark text-lg font-semibold">{item.name}</h6>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="flex justify-center mt-8 gap-2.5 p-2.5 bg-dark/10 rounded-full w-fit mx-auto">
                    {Array.from({ length: count }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${current === index + 1 ? "bg-dark" : "bg-dark/40"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
