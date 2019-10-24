import React, { Component } from "react";
import Title from "../../components/title/Title";
import Card from "../../components/card/Card";
import { Row } from "react-bootstrap";
import Pagination from "../../components/pagination/Pagination";
import Sort from "../../components/sort/Sort";
import { connect } from "react-redux";
import {
  currentTap,
  fetchMoviesReq,
  searchKeyword,
  sortBy
} from "../../store/actions";
import "./HomePage.scss";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchMoviesReq(this.props.tap.api, { page: 1 });
  }

  handleClick = sort => {
    this.props.fetchMoviesReq(this.props.tap.api, {
      page: 1,
      with_genres: this.props.tap.api ? "" : this.props.tap.id,
      sort_by: sort ? sort : ""
    });
  };

  render() {
    return (
      <React.Fragment>
        <Title
          main={this.props.tap.name ? this.props.tap.name : this.props.search}
          sub={this.props.tap.name ? "movies" : "search results"}
        />
        {this.props.tap.api || this.props.search ? null : (
          <Sort click={this.handleClick} />
        )}
        <Row className="grid-5 mx-auto">
          <Card list={this.props.movies.results} />
        </Row>
        <Pagination />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ currentTap, movies, searchKeyword, sortBy }) => {
  return { ...currentTap, movies, ...searchKeyword, sortKey: sortBy };
};

export default connect(
  mapStateToProps,
  { currentTap, fetchMoviesReq, searchKeyword, sortBy }
)(HomePage);
