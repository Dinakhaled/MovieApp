import React, { useState } from "react";
import { Card as BootStrapCard } from "react-bootstrap";
import Spinner from "../spinner/Spinner";
import imageFail from "../../assets/images/image-fail.png";

const CardImage = ({ src }) => {
  const [loaded, setLoading] = useState(false);
  const handleLoading = () => {
    setLoading(true);
  };
  return (
    <React.Fragment>
      {!loaded ? <Spinner /> : null}
      <BootStrapCard.Img
        className={`card__img ${!loaded ? "d-none" : ""}`}
        variant="top"
        src={src ? `https://image.tmdb.org/t/p/w780${src}` : `${imageFail}`}
        onLoad={() => handleLoading()}
      />
    </React.Fragment>
  );
};

export default CardImage;
