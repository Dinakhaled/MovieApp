import React, { Component } from "react";
import Title from "../../components/title/Title";
import Card from "../../components/card/Card";
import Pagination from "../../components/pagination/Pagination";
import { connect } from "react-redux";
import { currentTap, fetchMoviesReq } from "../../store/actions";
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
    if (prevProps.id !== this.props.id) {
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
        <Card list={this.props.movies.results} />
        <Pagination />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ currentTap, movies }) => {
  return { ...currentTap, movies };
};

export default connect(
  mapStateToProps,
  { currentTap, fetchMoviesReq }
)(HomePage);
