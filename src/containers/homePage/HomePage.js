import React from "react";
import "./HomePage.scss";
import List from "../../components/list/List";

const list = [
  { content: "one", icon: "", id: 1 },
  { content: "two", icon: "", id: 2 },
  { content: "three", icon: "", id: 3 }
];

const HomePage = () => {
  return (
    <div className="m-5 w-25">
      <List list={list} title="Discover" />
    </div>
  );
};

export default HomePage;
