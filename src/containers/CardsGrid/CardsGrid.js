import React, { Component } from "react";
import {
  fetchRecommendedMoviesRequest,
  fetchMoviesReq,
  currentTap
} from "../../store/actions";
import { connect } from "react-redux";
import Title from "../../components/title/Title";
import Card from "../../components/card/Card";
import { Row } from "react-bootstrap";
import Pagination from "../../components/pagination/Pagination";
import history from "../../routes/History";
import Sort from "../../components/sort/Sort";

class CardsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = sort => {
    this.props.fetchMoviesReq(this.props.tap.api, {
      page: this.props.page,
      with_genres: this.props.tap.api ? "" : this.props.tap.id,
      sort_by: sort ? sort : ""
    });
  };

  componentDidMount() {
    if (this.props.path === "person") {
      this.props.fetchMoviesReq("", {
        page: 1,
        with_cast: history.location.pathname.replace("/person/", ""),
        with_genres: true
      });
    } else {
      this.props.fetchRecommendedMoviesRequest(
        history.location.pathname.replace("/", "")
      );
    }
  }

  render() {
    const { results, className, main, type } = this.props;
    return (
      <div className={className}>
        <Title main={main || "Recommended"} sub={"movies"} />
        {this.props.tap.api || this.props.search || type ? null : (
          <Sort click={this.handleClick} />
        )}
        <Row className="grid-5 mx-auto">
          <Card list={results} />
        </Row>
        <Pagination type={type} />
      </div>
    );
  }
}

const mapStateToProps = ({ movies, currentTap }) => {
  return { ...movies, ...currentTap };
};

export default connect(
  mapStateToProps,
  { fetchRecommendedMoviesRequest, fetchMoviesReq, currentTap }
)(CardsGrid);
