import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../demo-data";
import useTitle from "@/hooks/useTitle";
import { formatRelativeDate } from "@/lib/format-date";
import { CalendarDays, Clock, Eye } from "lucide-react";

const BlogDetailsPage = () => {
  const { name } = useParams();
  const blog = blogs.find(
    (blogItem) =>
      blogItem?.title?.toLocaleLowerCase().split(" ").join("-") === name
  );
  useTitle(blog?.title);
  return (
    <div className="content pt-28 mb-20">
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <img
            src={blog?.image}
            className="w-full h-[400px] rounded-2xl object-cover"
            alt={blog?.title}
          />

          <h2 className="mt-10 text-5xl leading-[54px]">{blog?.title}</h2>
          <div className="mt-6 fl gap-20 border-t border-b py-5 text-sm">
            <div className="fl gap-2">
              <CalendarDays className="h-4 w-4 text-black/40" />
              <span className="">
                {formatRelativeDate(blog.createdAt, true)}
              </span>
            </div>
            <div className="fl gap-2">
              <Clock className="h-4 w-4 text-black/40" />
              <span>{blog.readLength} Read</span>
            </div>
            <div className="fl gap-2">
              <Eye className="h-4 w-4 text-black/40" />
              <span>2.1K Read</span>
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: blog.body }}
            className="mt-10 text-black/60 blog_body"
          ></div>
        </div>
        <div className="col-span-1">
          <div className="sticky top-2">
            <h2 className="text-2xl font-semibold capitalize ml-4 ">
              You may also like
            </h2>
            <div className="mt-5 flex flex-col">
              {blogs?.map((blog, index) => (
                <Link
                  key={index}
                  to={`/blogs/${blog?.title
                    ?.toLocaleLowerCase()
                    .split(" ")
                    .join("-")}`}
                  className="p-4 hover:bg-slate-100 tr rounded-xl"
                >
                  <h2 className="text-xl">{blog?.title}</h2>
                  <p className="mt-2 text-sm text-black/40">
                    {formatRelativeDate(blog?.createdAt, true)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
