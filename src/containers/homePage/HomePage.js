import React, { Component } from "react";
import Title from "../../components/title/Title";
import Card from "../../components/card/Card";
import { connect } from "react-redux";
import { currentTap, fetchMoviesReq } from "../../store/actions";
import "./HomePage.scss";

const movies = [
  {
    id: 1,
    name: "aladdin",
    rate: 4.5
  },
  {
    id: 2,
    name: "joker",
    rate: 2
  },
  {
    id: 3,
    name: "patman",
    rate: 3.5
  },
  {
    id: 4,
    name: "patman",
    rate: 3.5
  },
  {
    id: 5,
    name: "patman",
    rate: 3.5
  },
  {
    id: 6,
    name: "patman",
    rate: 3.5
  }
];

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchMoviesReq(this.props.api);
  }

  render() {
    return (
      <React.Fragment>
        <Title main={this.props.name} sub="movies" />
        <Card list={movies} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ currentTap, movies }) => {
  console.log(movies);
  return { ...currentTap, movies };
};

export default connect(
  mapStateToProps,
  { currentTap, fetchMoviesReq }
)(HomePage);
