import React from "react";

const Text = ({ title, p, className }) => {
  return (
    <div className={className}>
      <h2 className="title mb-3">{title}</h2>
      <p>{p}</p>
    </div>
  );
};

export default Text;
