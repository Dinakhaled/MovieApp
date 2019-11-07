import React from "react";
import Button from "../buttons/Button";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Empty = props => {
  const { title } = props;
  return (
    <div className="text-center">
      <h1 className="h1-2-light">Sorry!</h1>
      <h2 className="h2-2">{title}</h2>
      <img
        src="/assets/images/not-found.png"
        className="w-25 mb-4"
        alt="not-found"
      />
      <Link to="/" className="d-flex justify-content-center">
        <Button
          icon={faHome}
          iconMargin="l"
          order="1"
          theme="primary"
          content="Home"
        />
      </Link>
    </div>
  );
};

export default Empty;
