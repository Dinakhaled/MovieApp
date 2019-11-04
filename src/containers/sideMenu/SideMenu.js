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
  sortBy,
  searchKeyword
} from "../../store/actions";
import history from "../../routes/History";
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

  handleClick = (api, id) => {
    this.props.searchKeyword({ search: "" });
    this.props.fetchMoviesReq(api, {
      page: 1,
      with_genres: api ? "" : id,
      sort_by: this.props.sortKey
    });
    history.push("/");
  };

  render() {
    return (
      <div className="side-menu px-4">
        <Logo />
        <List
          click={this.handleClick}
          list={this.state.discover}
          title={"Discover"}
        />
        <List
          click={this.handleClick}
          list={this.props.genres || []}
          title={"genres"}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.currentTap,
    ...state.genres,
    sortKey: state.sortBy,
    ...state.searchKeyword
  };
};

export default connect(
  mapStateToProps,
  { fetchGenresReq, currentTap, fetchMoviesReq, sortBy, searchKeyword }
)(SideMenu);
