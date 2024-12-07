import { formatRelativeDate } from "@/lib/format-date";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { forwardRef } from "react";

const BlogCard = forwardRef(({ blog, refCallback }, ref) => {
  const dateOnly = true;
  return (
    <div
      className="rounded-2xl overflow-hidden"
      ref={(el) => {
        refCallback(el);
        if (ref) ref.current = el;
      }}
    >
      <div className="h-44 overflow-hidden">
        <img
          src={blog.image}
          className="h-full w-full object-cover rounded-2xl"
          alt={blog.title}
        />
      </div>
      <div className="py-4">
        <span className="text-sm text-black/50">
          {formatRelativeDate(blog.createdAt, dateOnly)}
        </span>
        <h2 className="text-xl font-medium">{blog.title}</h2>
        <div className="mt-6 flbx">
          <p className="text-sm text-black/60">{blog.readLength} Read</p>
          <button className="py-2 pl-4 pr-3 rounded-full text-sm border bg-green-50 tr hover:bg-green-100">
            <div className="fl gap-2">
              Read Now
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
});

export default BlogCard;
