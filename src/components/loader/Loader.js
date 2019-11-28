import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <Spinner animation="grow" variant="primary" />
    </div>
  );
};

export default Loader;
