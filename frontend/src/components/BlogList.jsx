import React from "react";
import BlogItem from "./BlogItem";

const BlogList = (props) => {
  return (
    <div>
      <p>BlogList</p>
      <ul>
        {props.items.map((item) => (
          <BlogItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
