import React, { Component } from "react";
import Title from "../../components/title/Title";
import Card from "../../components/card/Card";
import { Row } from "react-bootstrap";
import Pagination from "../../components/pagination/Pagination";
import { connect } from "react-redux";
import { currentTap, fetchMoviesReq, searchKeyword } from "../../store/actions";
import "./HomePage.scss";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchMoviesReq(this.props.api, { page: 1 });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      this.props.fetchMoviesReq(this.props.api, {
        page: 1,
        with_genres:
          this.props.id === 1 || this.props.id === 2 || this.props.id === 3
            ? ""
            : this.props.id
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Title main={this.props.name} sub="movies" />
        <Row className="grid-5">
          <Card list={this.props.movies.results} />
        </Row>
        <Pagination />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ currentTap, movies, searchKeyword }) => {
  return { ...currentTap, movies, ...searchKeyword };
};

export default connect(
  mapStateToProps,
  { currentTap, fetchMoviesReq, searchKeyword }
)(HomePage);
