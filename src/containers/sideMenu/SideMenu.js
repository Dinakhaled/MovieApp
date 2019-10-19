import React, { Component } from "react";
import Logo from "../../components/logo/Logo";
import List from "../../components/list/List";
import Footer from "../../components/footer/Footer";
import { faHeart, faPoll, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { fetchGenresReq } from "../../store/actions";

import "./SideMenu.scss";

const list = [
  { name: "Popular", api: "popular", icon: faHeart, id: 1 },
  { name: "Top Rated", api: "top_rated", icon: faPoll, id: 2 },
  { name: "Upcoming", api: "upcoming", icon: faCalendar, id: 3 }
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
        <Footer />
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
