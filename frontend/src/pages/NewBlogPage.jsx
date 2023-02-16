import React from "react";
import { redirect, json } from "react-router-dom";
import BlogForm from "../components/BlogForm";

const NewBlogPage = () => {
  return (
    <div>
      NewBlogPage
      <BlogForm />
    </div>
  );
};

export default NewBlogPage;

export const action = async ({ request }) => {
  const formData = await request.formData();

  const blogData = {
    title: formData.get("title"),
    description: formData.get("description"),
    image: formData.get("image"),
    content: formData.get("content"),
  };

  const response = await fetch("http://localhost:8080/api/v1/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
  });

  if (response.ok) {
    return redirect("/");
  } else {
    const error = await response.json();
    throw json({ message: error.message }, { status: response.status });
  }
};
