import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { formatDate } from "../util/date-formatting";

import "./BlogPage.css";

const BlogPage = () => {
  const blogData = useLoaderData();
  console.log(blogData);

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

export const loader = async ({ params }) => {
  const response = await fetch(
    `http://localhost:8080/api/v1/blogs/${params.blogId}`
  );

  const data = await response.json();
  return data;
};
