import React, { Component } from "react";
import { connect } from "react-redux";
import {
  currentTap,
  fetchMoviesReq,
  searchKeyword,
  sortBy,
  currentPage
} from "../../store/actions";
import CardsGrid from "../CardsGrid/CardsGrid";
import "./HomePage.scss";
import PageTitle from "../../components/PageTitle/PageTitle";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <PageTitle
          title={`${
            this.props.tap.name ? this.props.tap.name : this.props.search
          } Movies`}
        />
        <CardsGrid
          main={this.props.tap.name ? this.props.tap.name : this.props.search}
          sub={this.props.tap.name ? "movies" : "search results"}
          results={this.props.movies.results}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({
  currentTap,
  movies,
  searchKeyword,
  sortBy,
  currentPage
}) => {
  return {
    ...currentTap,
    movies,
    ...searchKeyword,
    sortKey: sortBy,
    page: currentPage
  };
};

export default connect(
  mapStateToProps,
  { currentTap, fetchMoviesReq, searchKeyword, sortBy, currentPage }
)(HomePage);
