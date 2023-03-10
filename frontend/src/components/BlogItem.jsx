import React from "react";
import { Link } from "react-router-dom";
import "./BlogItem.css";
import { formatDate } from "../util/date-formatting";

const BlogItem = (props) => {
  const dateString = formatDate(props.item.dateCreated);

  return (
    <li className="blog-item">
      <Link to={`blog/${props.item._id}`}>
        <img src={props.item.image} className="blog-item__image" />
        <div className="blog-info">
          <h2 className="blog-info__heading">{props.item.title}</h2>
          <p className="blog-info__description">{props.item.description}</p>
          <p className="blog-info__date">{dateString}</p>
        </div>
      </Link>
    </li>
  );
};

export default BlogItem;
