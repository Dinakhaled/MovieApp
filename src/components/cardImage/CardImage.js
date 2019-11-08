import React, { useState } from "react";
import { Card as BootStrapCard } from "react-bootstrap";
import Spinner from "../spinner/Spinner";

const CardImage = ({ src }) => {
  const [loaded, setLoading] = useState(false);
  const handleLoading = () => {
    setLoading(true);
  };
  return (
    <React.Fragment>
      {!loaded ? <Spinner /> : null}
      <BootStrapCard.Img
        className="card__img"
        variant="top"
        src={
          src
            ? `https://image.tmdb.org/t/p/w780${src}`
            : `/assets/images/image-fail.png`
        }
        onLoad={() => handleLoading()}
      />
    </React.Fragment>
  );
};

export default CardImage;
