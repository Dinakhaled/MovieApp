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
import history from "../../routes/History";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    history.push({
      search: `?page=${history.location.search.split("=")[1] || 1}`
    });
  }

  render() {
    return (
      <React.Fragment>
        <PageTitle
          title={`${
            this.props.search ? this.props.search : this.props.tap.name
          } Movies`}
        />
        <CardsGrid
          main={this.props.search ? this.props.search : this.props.tap.name}
          sub={this.props.search ? "search results" : "movies"}
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
