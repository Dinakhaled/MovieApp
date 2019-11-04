import React, { Component } from "react";
import {
  fetchRecommendedMoviesRequest,
  fetchMoviesReq
} from "../../store/actions";
import { connect } from "react-redux";
import Title from "../../components/title/Title";
import Card from "../../components/card/Card";
import { Row } from "react-bootstrap";
import Pagination from "../../components/pagination/Pagination";
import history from "../../routes/History";

class Recommended extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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

    console.log(this.props);
    console.log(history.location.pathname.replace("/person/", ""));
  }

  render() {
    const { results, className, main } = this.props;
    return (
      <div className={className}>
        <Title main={main || "Recommended"} sub={"movies"} />
        <Row className="grid-5 mx-auto">
          <Card list={results} />
        </Row>
        <Pagination />
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return { ...movies };
};

export default connect(
  mapStateToProps,
  { fetchRecommendedMoviesRequest, fetchMoviesReq }
)(Recommended);
