import React from "react";
import { Link } from "react-router-dom";
import laptopImage from "../assets/laptop.jpg";
import "./BlogItem.css";

const formatDate = (date) => {
  let dt = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return dt + " - " + month + " - " + year;
};

const BlogItem = (props) => {
  const date = new Date(props.item.dateCreated);
  const dateString = formatDate(date);

  const event = new Date("05 October 2011 14:48 UTC");
  console.log(event.toISOString());

  return (
    <Link to={`/blog/${props.item.id}`}>
      <li className="blog-item">
        <img src={laptopImage} className="blog-item__image" />
        {/* following line is commented for testing purposes */}
        {/* <img src={props.item.image} /> */}
        <div className="blog-info">
          <h2 className="blog-info__heading">{props.item.title}</h2>
          <p className="blog-info__description">{props.item.description}</p>
          <p className="blog-info__date">{dateString}</p>
        </div>
      </li>
    </Link>
  );
};

export default BlogItem;
