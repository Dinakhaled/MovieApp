import React from "react";
import "./HomePage.scss";
import Title from "../../components/title/Title";

const HomePage = () => {
  return (
    <div className="m-5 w-25">
      <Title main="popular" sub="movies" />
    </div>
  );
};

export default HomePage;
