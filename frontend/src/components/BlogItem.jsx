import React from "react";
import { Link } from "react-router-dom";
import laptopImage from "../assets/laptop.jpg";
import "./BlogItem.css";
import { formatDate } from "../util/date-formatting";

const BlogItem = (props) => {
  const dateString = formatDate(props.item.dateCreated);

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
