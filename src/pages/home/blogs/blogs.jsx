import React, { useEffect, useRef } from "react";
import BlogCard from "@/pages/blogs/blog-card/blog-card";
import { blogs } from "@/pages/blogs/demo-data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlogsSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".blog-section",
          start: "top 299px",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <section className="py-20 blog-section">
      <div className="content">
        <div className="flex justify-between lg:flex-row flex-col gap-4">
          <h2 className="lg:text-5xl text-3xl lg:font-normal font-bold">Read Blogs</h2>
          <p className="max-w-[760px] text-black/50">
            At Tuple, we pride ourselves on integrity, innovation, and
            exceptional customer service. Let us help you find not just a
            property but a place to call home. Discover the difference with
            us—where every property has a story, and every client matters
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-16">
          {blogs?.map((blog, index) => (
            <BlogCard
              key={index}
              blog={blog}
              refCallback={(el) => (cardsRef.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
