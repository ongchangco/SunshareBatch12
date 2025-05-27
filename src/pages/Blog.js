import BlogCard from "../components/blog/BlogCard";
import sunShareTokenImg from "../assets/img/token/sunshareToken.svg";
import ImportantBlogCard from "../components/blog/ImportantBlogCard";
import blogs from "../customModules/blogs.json";
const Blog = () => {
  return (
    <div className="w-full py-36 dark:bg-[#0D1F31] dark:text-white">
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
      <div>
        <div className="xl:grid xl:grid-cols-2 flex flex-wrap mr-10 ml-10 gap-5">
          {Object.values(blogs)
            .slice(0, 2)
            .map((blog) => {
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
          {Object.values(blogs)
            .slice(2, Object.values(blogs).length - 1)
            .map((blog) => {
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
    </div>
  );
};

export default Blog;
