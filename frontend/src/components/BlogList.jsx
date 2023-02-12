import React from "react";
import BlogItem from "./BlogItem";
import "./BlogList.css";

const BlogList = (props) => {
  return (
    <ul className="blog-list">
      {props.items.map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default BlogList;
