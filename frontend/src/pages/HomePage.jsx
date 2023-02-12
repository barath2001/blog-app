import React from "react";
import BlogList from "../components/BlogList";

import BlogData from "../dummyData/BlogData";

const HomePage = () => {
  return (
    <div>
      <p>HomePage</p>
      <BlogList items={BlogData} />
    </div>
  );
};

export default HomePage;
