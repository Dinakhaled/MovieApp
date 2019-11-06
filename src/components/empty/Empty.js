import React from "react";

const Empty = props => {
  const { title } = props;
  return (
    <div className="text-center">
      <h1 className="h1-2-light">Sorry!</h1>
      <h2 className="h2-2">{title}</h2>
      <img src="/assets/images/not-found.png" className="w-50" />
    </div>
  );
};

export default Empty;
