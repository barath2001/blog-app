import React, { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import useFormInput from "../hooks/useFormInput";

import "./BlogForm.css";

const isTitleInvalid = (value) => {
  if (value.trim() === "") return "Title can't be empty!";
  else return null;
};

const isDescriptionInvalid = (value) => {
  if (value.trim() === "") return "Description can't be empty!";
  else return null;
};

const isImageInvalid = (value) => {
  if (value.trim() === "") return "Image URL can't be empty!";
  else return null;
};

const isContentInvalid = (value) => {
  if (value.trim() === "") return "Content can't be empty!";
  else return null;
};

const BlogForm = ({ blogDetail }) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const {
    input: titleInput,
    isValid: titleInputIsValid,
    error: titleInputError,
    inputChangeHandler: titleInputChangeHandler,
    inputBlurHandler: titleInputBlurHandler,
  } = useFormInput(isTitleInvalid, blogDetail ? blogDetail.title : "");

  const {
    input: descriptionInput,
    isValid: descriptionInputIsValid,
    error: descriptionInputError,
    inputChangeHandler: descriptionInputChangeHandler,
    inputBlurHandler: descriptionInputBlurHandler,
  } = useFormInput(
    isDescriptionInvalid,
    blogDetail ? blogDetail.description : ""
  );

  const {
    input: imageInput,
    isValid: imageInputIsValid,
    error: imageInputError,
    inputChangeHandler: imageInputChangeHandler,
    inputBlurHandler: imageInputBlurHandler,
  } = useFormInput(isImageInvalid, blogDetail ? blogDetail.image : "");

  const {
    input: contentInput,
    isValid: contentInputIsValid,
    error: contentInputError,
    inputChangeHandler: contentInputChangeHandler,
    inputBlurHandler: contentInputBlurHandler,
  } = useFormInput(isContentInvalid, blogDetail ? blogDetail.content : "");

  useEffect(() => {
    setIsFormValid(
      titleInputIsValid &&
        descriptionInputIsValid &&
        imageInputIsValid &&
        contentInputIsValid
    );
  }, [
    titleInputIsValid,
    descriptionInputIsValid,
    imageInputIsValid,
    contentInputIsValid,
  ]);

  let formTitle = "New blog";
  if (blogDetail) formTitle = "Edit blog";

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <Form className="form" method="POST">
      <h2 className="form__title">{formTitle}</h2>
      <div className="form-input">
        <div className="input-field">
          <label className="input-field__label">Title</label>
          <input
            className={`input-field__input ${
              titleInputError && " input-field__input_reject"
            } ${titleInputIsValid && " input-field__input_accept"}`}
            name="title"
            type="text"
            placeholder="Enter title"
            value={titleInput}
            onChange={titleInputChangeHandler}
            onBlur={titleInputBlurHandler}
          />
          {titleInputError && (
            <p className="input-field__error">{titleInputError}</p>
          )}
        </div>
        <div className="input-field">
          <label className="input-field__label">Description</label>
          <textarea
            className={`input-field__input ${
              descriptionInputError && " input-field__input_reject"
            } ${descriptionInputIsValid && " input-field__input_accept"}`}
            name="description"
            placeholder="Enter description"
            value={descriptionInput}
            onChange={descriptionInputChangeHandler}
            onBlur={descriptionInputBlurHandler}
          />
          {descriptionInputError && (
            <p className="input-field__error">{descriptionInputError}</p>
          )}
        </div>
        <div className="input-field">
          <label className="input-field__label">Cover Image</label>
          <input
            className={`input-field__input ${
              imageInputError && " input-field__input_reject"
            } ${imageInputIsValid && " input-field__input_accept"}`}
            name="image"
            type="text"
            placeholder="Enter the image URL"
            value={imageInput}
            onChange={imageInputChangeHandler}
            onBlur={imageInputBlurHandler}
          />
          {imageInputError && (
            <p className="input-field__error">{imageInputError}</p>
          )}
        </div>
        <div className="input-field">
          <label className="input-field__label">Content</label>
          <textarea
            className={`input-field__input ${
              contentInputError && " input-field__input_reject"
            } ${contentInputIsValid && " input-field__input_accept"}`}
            name="content"
            placeholder="Write content here..."
            value={contentInput}
            onChange={contentInputChangeHandler}
            onBlur={contentInputBlurHandler}
          />
          {contentInputError && (
            <p className="input-field__error">{contentInputError}</p>
          )}
        </div>
      </div>
      <div className="form-action">
        <button
          type="button"
          className="form-action__button form-action__button_cancel"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className={`form-action__button  ${
            isFormValid
              ? "form-action__button_main"
              : "form-action__button_disabled"
          }`}
          type="submit"
          disabled={!isFormValid}
        >
          Submit
        </button>
      </div>
    </Form>
  );
};

export default BlogForm;
