import React, { useEffect, useRef, useState } from "react";
import Dropdown from "@/components/dropdown/dropdown";
import TablePaginate from "@/components/table/pagination";
import BlogCard from "../blog-card/blog-card";

import { X } from "lucide-react";
import { CITY_OPTIONS, BLOG_PAGE_SIZE } from "../data";
import { blogs } from "../demo-data";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function BlogList() {
  const [page, setPage] = useState(1);
  const [selectedCity, setSelectedCity] = useState({});

  // CARD EFFECTS
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
          trigger: ".properties-section",
          start: "top 299px",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const totalCount = 4;

  return (
    <div className="content mb-20">
      <div className="mt-5 mb-8 flbx">
        <p className="text-black/60">
          Showing {BLOG_PAGE_SIZE * (page - 1) + 1}-{BLOG_PAGE_SIZE * page} of{" "}
          {totalCount} Blogs
        </p>
        <div className="fl gap-3">
          {selectedCity?.value && (
            <button
              onClick={() => {
                setSelectedCity({});
              }}
              className="py-1.5 pr-4 pl-3 rounded-full text-sm border fl gap-2 text-red-500"
            >
              <X className="h-3 w-3" />
              Reset
            </button>
          )}
          <Dropdown options={CITY_OPTIONS} setSelectedOption={setSelectedCity}>
            {selectedCity.label || "Select City"}
          </Dropdown>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
        {blogs?.map((blog, index) => (
          <BlogCard
            key={index}
            blog={blog}
            refCallback={(el) => (cardsRef.current[index] = el)}
          />
        ))}
      </div>
      {totalCount > BLOG_PAGE_SIZE && (
        <TablePaginate
          total={totalCount}
          pageSize={BLOG_PAGE_SIZE}
          setCurrentPage={setPage}
          currentPage={page}
          className="mt-16"
        />
      )}
    </div>
  );
}
