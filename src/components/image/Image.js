import React, { useState } from "react";
import Spinner from "../spinner/Spinner";
import "./Image.scss";
import imageFail from "../../assets/images/image-fail.png";

const Image = ({ src }) => {
  const [loaded, setLoading] = useState(false);
  const handleLoading = () => {
    setLoading(true);
  };

  return (
    <React.Fragment>
      {!loaded ? <Spinner /> : null}
      <div className={`image-wrapper ${!loaded ? "d-none" : ""}`}>
        <img
          src={src ? src : `${imageFail}`}
          alt={src}
          className={`image ${!loaded ? "d-none" : ""}`}
          onLoad={() => handleLoading()}
        />
      </div>
    </React.Fragment>
  );
};

export default Image;
