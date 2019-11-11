import React from "react";
import "./Logo.scss";
import history from "../../routes/History";

const handleClick = () => {
  history.push("/");
};

const Logo = () => {
  return <div className="logo" onClick={handleClick}></div>;
};

export default Logo;
