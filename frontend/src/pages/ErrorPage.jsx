import React from "react";
import NavBar from "../components/NavBar";

import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <>
      <NavBar />
      <div className="error-message">
        <h1 className="error-message__heading">Oops!</h1>
        <h2 className="error-message__sub-heading">An error occurred</h2>
        <p className="error-message__description">Could not find this page</p>
      </div>
    </>
  );
};

export default ErrorPage;
