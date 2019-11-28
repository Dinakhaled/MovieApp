import React, { Component } from "react";
import {
  fetchRecommendedMoviesRequest,
  fetchMoviesReq,
  currentTap,
  searchKeyword
} from "../../store/actions";
import { connect } from "react-redux";
import Title from "../../components/title/Title";
import Card from "../../components/card/Card";
import Pagination from "../../components/pagination/Pagination";
import history from "../../routes/History";
import Sort from "../../components/sort/Sort";
import Empty from "../../components/empty/Empty";

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
    switch (true) {
      case this.props.type === "person":
        this.props.fetchMoviesReq("", {
          page: history.location.search.split("=")[1],
          with_cast: history.location.pathname.replace("/MovieApp/person/", ""),
          with_genres: true
        });
        break;
      case this.props.type === "recommended":
        this.props.fetchRecommendedMoviesRequest(
          history.location.pathname.replace("/MovieApp/", ""),
          {
            page: history.location.search.split("=")[1]
          }
        );
        break;
      default:
        this.props.fetchMoviesReq(this.props.tap.api, {
          page: history.location.search.split("=")[1],
          with_genres: this.props.tap.api ? "" : this.props.tap.id,
          query: this.props.search && this.props.search
        });
    }
  }

  render() {
    const { results, className, main, type, sub } = this.props;
    return (
      <div className={className}>
        <Title main={main || "Recommended"} sub={sub || "movies"} />
        {this.props.tap.api || this.props.search || type ? null : (
          <Sort click={this.handleClick} />
        )}
        {results && results.length > 0 ? (
          <React.Fragment>
            <div className="grid-5 mx-auto">
              <Card list={results} />
            </div>
            <Pagination type={type} />
          </React.Fragment>
        ) : (
          <Empty title="There are no movies..." />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ movies, currentTap, searchKeyword }) => {
  return { ...movies, ...currentTap, ...searchKeyword };
};

export default connect(
  mapStateToProps,
  { fetchRecommendedMoviesRequest, fetchMoviesReq, currentTap, searchKeyword }
)(CardsGrid);
