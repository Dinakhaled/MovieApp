import React from "react";
import { Spinner as BootStrapSpinner } from "react-bootstrap";
import "./Spinner.scss";

const Spinner = () => {
  return (
    <div className="spinner">
      <BootStrapSpinner animation="border" variant="primary" />
    </div>
  );
};

export default Spinner;
