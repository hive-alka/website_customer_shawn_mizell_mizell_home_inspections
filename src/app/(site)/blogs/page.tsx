import BlogList from "@/components/Blog";
import HeroSub from "@/components/shared/HeroSub";
import CTA from "@/components/shared/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:
        "Home Inspection Tips & Insights | Mizell Home Inspections",
};

const Blog = () => {
    return (
        <>
            <HeroSub
                title="Home Inspection Insights"
                description="Expert advice, tips, and updates from Inspector Shawn to help you make informed property decisions."
                badge="Blog"
            />
            <BlogList />
            <CTA />
        </>
    );
};

export default Blog;
