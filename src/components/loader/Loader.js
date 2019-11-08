import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="h-100 d-flex mt-md-180 justify-content-center">
      <Spinner animation="grow" variant="primary" />
    </div>
  );
};

export default Loader;
