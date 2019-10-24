import React from "react";
import "./Title.scss";

const Title = ({ main, sub, size }) => {
  return (
    <div className="mb-lg-40">
      {size === "lg" ? (
        <div>
          <h1 className="h1-2 title mb-1">{main}</h1>
          <h2 className="title">{sub}</h2>
        </div>
      ) : (
        <div>
          <h1 className="h1-light title mb-1">{main}</h1>
          <h3 className="title">{sub}</h3>
        </div>
      )}
    </div>
  );
};

export default Title;
