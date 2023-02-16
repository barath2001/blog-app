import React from "react";
import { useRouteLoaderData, redirect, json } from "react-router-dom";
import BlogForm from "../components/BlogForm";

const EditBlogPage = () => {
  const blogDetail = useRouteLoaderData("blog-detail");
  return (
    <div>
      EditBlogPage
      <BlogForm blogDetail={blogDetail} method="PATCH" action="/blog/new" />
    </div>
  );
};

export default EditBlogPage;

export const action = async ({ params, request }) => {
  const id = params.blogId;

  const formData = await request.formData();

  const blogData = {
    title: formData.get("title"),
    description: formData.get("description"),
    image: formData.get("image"),
    content: formData.get("content"),
  };

  const response = await fetch("http://localhost:8080/api/v1/blogs/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
  });

  if (response.ok) {
    return redirect("./..");
  } else {
    const error = await response.json();
    throw json({ message: error.message }, { status: response.status });
  }
};
