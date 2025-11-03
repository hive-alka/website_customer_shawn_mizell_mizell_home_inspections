import { Icon } from '@iconify/react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ: React.FC = () => {
    return (
        <section id='faqs'>
            <div className='container max-w-8xl mx-auto px-4 sm:px-5 lg:px-6 2xl:px-0'>
                <div className="max-w-5xl mx-auto">
                    <div>
                        <p className="text-dark/75 text-base font-semibold flex gap-2">
                            <Icon icon="mdi:help-circle" className="text-2xl text-primary " />
                            FAQs
                        </p>
                        <h2 className='text-2xl sm:text-3xl md:text-[40px] leading-[1.2] font-semibold text-dark mb-4'>
                            Home Inspection Questions Answered
                        </h2>
                        <p className='text-base sm:text-[17px] leading-[1.5] text-dark/60 pr-0 sm:pr-8 md:pr-20'>
                            Common questions from homebuyers and sellers answered.
                        </p>
                        <div className="my-8">
                            <Accordion type="single" defaultValue="item-1" collapsible className="w-full flex flex-col gap-6">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>1. How long does a home inspection take?</AccordionTrigger>
                                    <AccordionContent>
                                        A typical home inspection takes 2-4 hours depending on the size, age, and condition of the property. Larger or older homes may take longer. We encourage buyers to attend so we can walk through findings together and answer questions in real-time.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>2. When will I receive my inspection report?</AccordionTrigger>
                                    <AccordionContent>
                                        You&apos;ll receive your detailed inspection report within 24 hours after the inspection. The report includes high-resolution photos, clear descriptions of all findings, and recommendations for repairs or further evaluation. We&apos;re also available after delivery to answer any questions about the report.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>3. What does a home inspection cover?</AccordionTrigger>
                                    <AccordionContent>
                                        A comprehensive home inspection covers all major systems and components including the roof, foundation, structure, electrical, plumbing, HVAC, interior, exterior, attic, and basement or crawl space. We also identify safety hazards and provide maintenance recommendations. Specialized testing like mold or radon can be added.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>4. How much does a home inspection cost?</AccordionTrigger>
                                    <AccordionContent>
                                        Home inspection costs vary based on the size, age, and location of the property. Contact us for a free quote tailored to your specific property. Additional services like mold testing or commercial inspections are priced separately.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>5. Should I be present during the inspection?</AccordionTrigger>
                                    <AccordionContent>
                                        While not required, we strongly encourage buyers to attend, especially the final walkthrough. Being present allows you to learn about your future home, understand the severity of any issues, ask questions in real-time, and get valuable maintenance tips. It&apos;s an excellent educational opportunity.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-6">
                                    <AccordionTrigger>6. What if major problems are found?</AccordionTrigger>
                                    <AccordionContent>
                                        If significant issues are discovered, you have several options: request repairs from the seller, negotiate a price reduction, accept the property as-is with full knowledge, or walk away if you have an inspection contingency. We provide detailed information about each finding to help you make informed decisions. Remember, every home has some issues—what matters is understanding their severity and cost.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
