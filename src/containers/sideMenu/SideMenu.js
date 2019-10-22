import React, { Component } from "react";
import Logo from "../../components/logo/Logo";
import List from "../../components/list/List";
import Footer from "../../components/footer/Footer";
import { faHeart, faPoll, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  fetchGenresReq,
  fetchMoviesReq,
  currentTap,
  sortBy
} from "../../store/actions";
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

  componentDidUpdate(prevProps) {
    console.log(prevProps.sortBy, this.props);

    if (
      prevProps.name !== this.props.name ||
      prevProps.sortKey !== this.props.sortKey
    ) {
      this.props.fetchMoviesReq(this.props.api, {
        page: 1,
        with_genres:
          this.props.id === 1 || this.props.id === 2 || this.props.id === 3
            ? ""
            : this.props.id,
        sort_by: this.props.sortKey ? this.props.sortKey : ""
      });
    }
  }

  render() {
    console.log(this.props);
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
  console.log(state);

  return { ...state.currentTap, ...state.genres, sortKey: state.sortBy };
};

export default connect(
  mapStateToProps,
  { fetchGenresReq, currentTap, fetchMoviesReq, sortBy }
)(SideMenu);
