import React from "react";

import BlogCard from "./BlogCard";
import blogsObj from "../../customModules/blogs.json";
import ImportantBlogCard from "./ImportantBlogCard";

const Blog = () => {
  const blogs = Object.values(blogsObj);
  return (
    <div className="w-full py-36 dark:bg-[#0D1F31]">
      <div className="small-title text-center">
        <div className="small-title-container">
          <div className="left-dash text-[#FEA803] px-10 pt-1 inline">-</div>
          <h5 className="text-2xl text-[#FEA803] inline">BLOG</h5>
          <div className="right-dash text-[#FEA803] px-10 inline">-</div>
        </div>
      </div>
      <div className="large-title pb-20">
        <h2>Thought Starters</h2>
      </div>
      <div className="xl:grid xl:grid-cols-2 flex flex-wrap mr-10 ml-10 gap-5">
        {blogs.slice(0, 2).map((blog) => {
          console.log(blog);
          return (
            <ImportantBlogCard
              key={blog.id}
              blogId={blog.id}
              profileImageUrl={blog.authorImageUrl}
              blogImageUrl={blog.blogImageUrls[0]}
              blogTextContent={blog.blogTitle}
              blogDate={blog.blogDate}
            />
          );
        })}
      </div>
      <div className="xl:grid xl:grid-cols-3  flex gap-5 flex-wrap mr-10 ml-10 ">
        {blogs.slice(2, blogs.length - 1).map((blog) => {
          return (
            <BlogCard
              key={blog.id}
              blogId={blog.id}
              profileImageUrl={blog.authorImageUrl}
              blogImageUrl={blog.blogImageUrls[0]}
              blogTextContent={blog.blogTitle}
              blogDate={blog.blogDate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
