import React, { Component } from "react";
import Logo from "../../components/logo/Logo";
import List from "../../components/list/List";

const list = [
  { content: "one", icon: "", id: 1 },
  { content: "two", icon: "", id: 2 },
  { content: "three", icon: "", id: 3 }
];

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Logo />
        <List list={list} title="Discover" />
      </React.Fragment>
    );
  }
}

export default SideMenu;
