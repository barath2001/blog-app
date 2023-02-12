import React from "react";
import BlogList from "../components/BlogList";
import BlogData from "../dummyData/BlogData";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <p>HomePage</p>
      <div className="blog-list-section">
        <BlogList items={BlogData} />
      </div>
    </div>
  );
};

export default HomePage;
