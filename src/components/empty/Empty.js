import React from "react";
import Button from "../buttons/Button";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import history from "../../routes/History";
import notFoundImg from "../../assets/images/not-found.png";

const Empty = props => {
  const { title } = props;
  const { location } = history;
  return (
    <div className="text-center d-flex align-items-center justify-content-center h-100 flex-column">
      <h1 className="h1-2-light">Sorry!</h1>
      <h2 className="h2-2">{title}</h2>
      <img src={notFoundImg} className="w-50 mb-4" alt="not-found" />
      {location.pathname === "/" ? null : (
        <Link to="/" className="d-flex justify-content-center">
          <Button
            icon={faHome}
            iconMargin="l"
            order="1"
            theme="primary"
            content="Home"
          />
        </Link>
      )}
    </div>
  );
};

export default Empty;
