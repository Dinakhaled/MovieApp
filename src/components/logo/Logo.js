import React from "react";
import "./Logo.scss";
import history from "../../routes/History";

const handleClick = () => {
  history.push("/MovieApp");
};

const Logo = () => {
  return <div className="logo" onClick={handleClick}></div>;
};

export default Logo;
