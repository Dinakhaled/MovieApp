import React, { Component } from "react";
import Logo from "../../components/logo/Logo";
import List from "../../components/list/List";
import { faHeart, faPoll, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { fetchGenresReq } from "../../store/actions";

import "./SideMenu.scss";

const list = [
  { name: "Popular", icon: faHeart, id: 1 },
  { name: "Top Rated", icon: faPoll, id: 2 },
  { name: "Upcoming", icon: faCalendar, id: 3 }
];

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discover: list
    };
  }

  componentDidMount() {
    this.props.fetchGenresReq();
  }

  render() {
    return (
      <div className="side-menu px-4">
        <Logo />
        <List list={this.state.discover} title={"Discover"} />
        <List list={this.props.genres || []} title={"genres"} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.genres };
};

export default connect(
  mapStateToProps,
  { fetchGenresReq }
)(SideMenu);
