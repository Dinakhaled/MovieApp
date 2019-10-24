import React from "react";

const Text = ({ title, p }) => {
  return (
    <React.Fragment>
      <h2 className="title mb-2">{title}</h2>
      <p>{p}</p>
    </React.Fragment>
  );
};

export default Text;
