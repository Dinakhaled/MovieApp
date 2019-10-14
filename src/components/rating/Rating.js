import React from "react";
import Stars from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Rating.scss";

const Rating = ({ Rate }) => {
  return (
    <Stars
      className="rating"
      emptySymbol={
        <FontAwesomeIcon className="fontAwesome" icon={emptyStar} size="1x" />
      }
      fullSymbol={
        <FontAwesomeIcon className="fontAwesome" icon={faStar} size="1x" />
      }
      initialRating={Rate}
      readonly
    />
  );
};

export default Rating;