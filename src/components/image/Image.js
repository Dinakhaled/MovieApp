import React from "react";
import "./Image.scss";

const Image = ({ src }) => {
  const background = {
    backgroundImage: `url(${src ? src : "/assets/images/image-fail.png"})`
  };
  return <div className="image" style={background}></div>;
};

export default Image;
