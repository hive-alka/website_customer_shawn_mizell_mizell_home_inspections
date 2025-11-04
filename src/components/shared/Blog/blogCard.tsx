import React, { FC } from "react";
import Image from "next/image";
import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Link from "next/link";

const BlogCard: FC<{ blog: Blog }> = ({ blog }) => {
    const { title, coverImage, date, slug } = blog;
    return (
        <Link href={`/blogs/${slug}`} aria-label="blog cover 5xl:h-full 5xl:inline-block" className="gap-4 group">
            <div className="overflow-hidden rounded-2xl flex-shrink-0 aspect-[4/3]">
                <Image
                    src={coverImage!}
                    alt={title || "Blog post image"}
                    className="transition group-hover:scale-110 w-full h-full object-cover"
                    width={400}
                    height={300}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div>
                <h3 className="mt-2 text-xl font-medium text-dark group-hover:text-primary">
                    {title}
                </h3>
                <span className="text-base font-medium text-dark/50 leading-loose">
                    {format(new Date(date), "MMM dd, yyyy")}
                </span>
            </div>
        </Link>
    );
};

export default BlogCard;
