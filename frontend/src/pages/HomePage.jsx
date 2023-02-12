import React from "react";
import BlogList from "../components/BlogList";

const items = [
  {
    name: "blog 1",
  },
  {
    name: "blog 2",
  },
  {
    name: "blog 3",
  },
  {
    name: "blog 4",
  },
];

const HomePage = () => {
  return (
    <div>
      <p>HomePage</p>
      <BlogList items={items} />
    </div>
  );
};

export default HomePage;
