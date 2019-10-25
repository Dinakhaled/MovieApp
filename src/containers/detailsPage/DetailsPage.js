import React, { Component } from "react";
import { fetchMovieRequest } from "../../store/actions";
import { connect } from "react-redux";

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchMovieRequest(this.props.computedMatch.params.id);
  }

  render() {
    console.log(this.props.movie);

    return <div>DetailsPage</div>;
  }
}

const mapStateToProps = ({ movies }) => {
  return { movie: movies };
};

export default connect(
  mapStateToProps,
  { fetchMovieRequest }
)(DetailsPage);
