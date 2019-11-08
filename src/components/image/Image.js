import React, { useState } from "react";
import Spinner from "../spinner/Spinner";
import "./Image.scss";

const Image = ({ src }) => {
  const [loaded, setLoading] = useState(false);
  const handleLoading = () => {
    setLoading(true);
  };

  const background = `${src ? src : "/assets/images/image-fail.png"}`;
  return (
    <React.Fragment>
      {!loaded ? <Spinner /> : null}
      <div className="image-wrapper">
        <img
          src={background}
          alt={background}
          className="image"
          onLoad={() => handleLoading()}
        />
      </div>
    </React.Fragment>
  );
};

export default Image;
