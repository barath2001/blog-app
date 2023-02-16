import React from "react";
import {
  useRouteLoaderData,
  Link,
  json,
  redirect,
  useSubmit,
} from "react-router-dom";
import { formatDate } from "../util/date-formatting";

import "./BlogPage.css";

const BlogPage = () => {
  const blogData = useRouteLoaderData("blog-detail");
  const submit = useSubmit();

  const deleteBlogHandler = () => {
    const proceed = window.confirm("Are you sure you want to delete?");

    if (proceed) {
      submit(null, { method: "POST" });
    }
  };

  return (
    <div className="blog-content">
      <h1 className="blog-content__heading">{blogData.title}</h1>
      <p className="blog-content__date">{formatDate(blogData.dateCreated)}</p>
      <p className="blog-content__description">{blogData.description}</p>
      <img className="blog-content__image" src={blogData.image} />
      <p className="blog-content__main-content">{blogData.content}</p>
      <div className="blog-action">
        <Link to="edit" className="blog-action__input blog-action__input_main">
          Edit
        </Link>
        <button
          className="blog-action__input blog-action__input_red"
          onClick={deleteBlogHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogPage;

export const loader = async ({ params }) => {
  const response = await fetch(
    `http://localhost:8080/api/v1/blogs/${params.blogId}`
  );

  if (response.ok) {
    return response;
  } else {
    const error = await response.json();
    throw json({ message: error.message }, { status: response.status });
  }
};

// delete action
export const action = async ({ params }) => {
  const id = params.blogId;

  const response = await fetch("http://localhost:8080/api/v1/blogs/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    return redirect("/");
  } else {
    const error = await response.json();
    throw json({ message: error.message }, { status: response.status });
  }
};
