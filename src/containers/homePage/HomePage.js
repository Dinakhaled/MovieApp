import React from "react";
import "./HomePage.scss";
import Button from "../../components/buttons/Button";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <div className="m-5 w-25">
      <Button
        content="click here"
        icon={faHeart}
        theme="outline-secondary"
        iconMargin="r"
        order="0"
        size="lg"
      />
    </div>
  );
};

export default HomePage;
