import React from "react";
import { useParams } from "react-router-dom";
import BlogData from "../dummyData/BlogData";
import { formatDate } from "../util/date-formatting";

import "./BlogPage.css";

const BlogPage = () => {
  let { blogId } = useParams();
  const blogData = BlogData.find((item) => item.id === blogId);

  return (
    <div className="blog-content">
      <h1 className="blog-content__heading">{blogData.title}</h1>
      <p className="blog-content__date">{formatDate(blogData.dateCreated)}</p>
      <p className="blog-content__description">{blogData.description}</p>
      <p className="blog-content__main-content">{blogData.content}</p>
    </div>
  );
};

export default BlogPage;
