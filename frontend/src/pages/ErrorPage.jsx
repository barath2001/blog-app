import React from "react";
import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

import "./ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred";
  let description = "Could not find this page";

  if (error.status) title = `Status: ${error.status}`;
  if (error.data.message) description = error.data.message;

  return (
    <>
      <NavBar />
      <div className="error-message">
        <h1 className="error-message__heading">Oops!</h1>
        <h3 className="error-message__sub-heading">{title}</h3>
        <p className="error-message__description">{description}</p>
      </div>
    </>
  );
};

export default ErrorPage;
