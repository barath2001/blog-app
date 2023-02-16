import React from "react";
import { json, useLoaderData } from "react-router-dom";
import BlogList from "../components/BlogList";
import "./HomePage.css";

const HomePage = () => {
  const blogs = useLoaderData();

  return (
    <div>
      <div className="blog-list-section">
        <BlogList items={blogs} />
      </div>
    </div>
  );
};

export default HomePage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/api/v1/blogs");

  if (response.ok) {
    return response;
  } else {
    const error = await response.json();
    throw json({ message: error.message }, { status: response.status });
  }
};
