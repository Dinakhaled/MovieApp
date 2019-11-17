import React from "react";
import "./Title.scss";

const Title = ({ main, sub, size }) => {
  return (
    <React.Fragment>
      {size === "lg" ? (
        <div className="mb-xs-20">
          <div>
            <h1 className="h1-2-light title">{main}</h1>
            <h2 className="title title__sub">{sub}</h2>
          </div>
        </div>
      ) : (
        <div className="mb-xs-40">
          <div>
            <h1 className="h1-light title mb-1">{main}</h1>
            <h3 className="title">{sub}</h3>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Title;
