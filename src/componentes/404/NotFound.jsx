import React from "react";
import error404 from "../../imgs/404.png";

export const NotFound = () => {
  return (
    <div className="container-fluid error404-ctn">
      <div className="row">
        <img
          src={error404}
          alt="imagen de error"
          className="error404 col-md-12"
        />
      </div>
    </div>
  );
};
