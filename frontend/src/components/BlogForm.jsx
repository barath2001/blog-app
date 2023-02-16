import React from "react";
import { Form } from "react-router-dom";

import "./BlogForm.css";

const BlogForm = ({ blogDetail, method, action }) => {
  let title = "New blog";
  if (blogDetail) title = "Edit blog";

  return (
    <Form className="form" method="POST">
      <h2 className="form__title">{title}</h2>
      <div className="form-input">
        <div className="input-field">
          <label className="input-field__label">Title</label>
          <input
            className="input-field__input"
            name="title"
            type="text"
            defaultValue={blogDetail ? blogDetail.title : ""}
            placeholder="Enter title"
          />
        </div>
        <div className="input-field">
          <label className="input-field__label">Description</label>
          <textarea
            className="input-field__input"
            name="description"
            defaultValue={blogDetail ? blogDetail.description : ""}
            placeholder="Enter description"
          />
        </div>
        <div className="input-field">
          <label className="input-field__label">Cover Image</label>
          <input
            className="input-field__input"
            name="image"
            type="text"
            defaultValue={blogDetail ? blogDetail.image : ""}
            placeholder="Enter the image URL"
          />
        </div>
        <div className="input-field">
          <label className="input-field__label">Content</label>
          <textarea
            className="input-field__input"
            name="content"
            defaultValue={blogDetail ? blogDetail.content : ""}
            placeholder="Write content here..."
          />
        </div>
      </div>
      <div className="form-action">
        <button className="form-action__button ">Cancel</button>
        <button
          className="form-action__button form-action__button_main"
          type="submit"
        >
          Submit
        </button>
      </div>
    </Form>
  );
};

export default BlogForm;
