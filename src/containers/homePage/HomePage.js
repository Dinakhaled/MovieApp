import React from "react";
import Title from "../../components/title/Title";
import Card from "../../components/card/Card";
import "./HomePage.scss";

const movies = [
  {
    id: 1,
    name: "aladdin",
    rate: 4.5
  },
  {
    id: 2,
    name: "joker",
    rate: 2
  },
  {
    id: 3,
    name: "patman",
    rate: 3.5
  },
  {
    id: 4,
    name: "patman",
    rate: 3.5
  },
  {
    id: 5,
    name: "patman",
    rate: 3.5
  },
  {
    id: 6,
    name: "patman",
    rate: 3.5
  }
];

const HomePage = () => {
  return (
    <React.Fragment>
      <Title main="Popular" sub="movies" />
      <Card list={movies} />
    </React.Fragment>
  );
};

export default HomePage;
