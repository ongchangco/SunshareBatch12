import React from "react";
import { Link } from "react-router-dom";

const ImportantBlogCard = ({
  blogId,
  profileImageUrl,
  blogImageUrl,
  blogTextContent,
  blogDate,
}) => {
  return (
    <div className="blog-container h-[80vh] xl:mx-auto w-full xl:h-[60vh]">
      <Link to={`/blog/${blogId}`}>
        <div className="blog-content relative">
          <div className="bg-img bg-[#FEA803] h-[60vh] w-full p-5 rounded-t-lg xl:h-[35vh] overflow-hidden ">
            <img
              src={blogImageUrl}
              alt=""
              className="mx-auto object-cover w-full h-full "
            />
          </div>
          <div className="blog-header bg-[#D9D9D9]  w:80 xl:w-full h-[20vh] pl-28 xl:pl-[7vw] pr-12 xl:h-[20vh] border-[#FFFFFF] border-t-4 rounded-b-lg relative dark:bg-[#00061C] ">
            <div className="avatar absolute -top-[5vh] left-2">
              <img
                src={profileImageUrl}
                className="rounded-full border-8 border-[#D9D9D9] bottom-[70px] object-cover max-w-[80px] max-h-[80px] min-h-[80px] min-w-[80px] h-20 2xl:w-[6vw] 2xl:h-[6vw] "
                alt="User"
              />
            </div>
            <h3 className="text-[3vh] h-[80%]">{blogTextContent}</h3>
            <p className="text-[2.4vh]">{blogDate}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ImportantBlogCard;
