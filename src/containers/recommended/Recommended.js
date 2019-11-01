import React, { Component } from "react";
import { fetchRecommendedMoviesRequest } from "../../store/actions";
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
    this.props.fetchRecommendedMoviesRequest(
      history.location.pathname.replace("/", "")
    );
  }

  render() {
    const { results, className } = this.props;
    return (
      <div className={className}>
        <Title main="Recommended" sub={"movies"} />
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
  { fetchRecommendedMoviesRequest }
)(Recommended);
