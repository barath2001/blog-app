import React from "react";
import BlogItem from "./BlogItem";

const BlogList = (props) => {
  return (
    <div>
      <p>BlogList</p>
      {props.items.map((item) => (
        <BlogItem item={item} />
      ))}
    </div>
  );
};

export default BlogList;
