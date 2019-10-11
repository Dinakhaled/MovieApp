import React from "react";
import Logo from "../../components/logo/Logo";
import List from "../../components/list/List";
import { faHeart, faPoll, faCalendar } from "@fortawesome/free-solid-svg-icons";
import "./SideMenu.scss";

const list = [
  { content: "Popular", icon: faHeart, id: 1 },
  { content: "Top Rated", icon: faPoll, id: 2 },
  { content: "Upcoming", icon: faCalendar, id: 3 }
];

const SideMenu = () => {
  return (
    <div className="side-menu px-4">
      <Logo />
      <List list={list} title={"Discover"} />
    </div>
  );
};

export default SideMenu;
