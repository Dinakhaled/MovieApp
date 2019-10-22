import React from "react";
import "./Title.scss";

const Title = ({ main, sub }) => {
  return (
    <div className="mb-lg-40">
      <h1 className="h1-light title mb-1">{main}</h1>
      <h3 className="title">{sub}</h3>
    </div>
  );
};

export default Title;
