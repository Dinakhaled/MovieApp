import React, { Component } from "react";
import { fetchMovieRequest } from "../../store/actions";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../../components/image/Image";
import Title from "../../components/title/Title";
import Rating from "../../components/rating/Rating";
import ListInline from "../../components/ListInline/ListInline";
import Text from "../../components/text/Text";
import Button from "../../components/buttons/Button";

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
    const {
      poster_path,
      original_title,
      tagline,
      vote_average,
      spoken_languages,
      runtime,
      release_date,
      genres,
      overview
    } = this.props.movie;
    return (
      <Container fluid>
        <Row className="px-5">
          <Col lg={5}>
            <Image
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w342${poster_path}`
                  : `/assets/images/image-fail.png`
              }
            />
          </Col>
          <Col lg={6}>
            <Title size="lg" main={original_title} sub={tagline} />
            <div className="d-flex justify-content-between align-items-center mb-lg-60">
              <Rating Rate={(vote_average / 10) * 5} text={vote_average} />
              <h3 className="text-light title">
                {spoken_languages && spoken_languages[0].name} / {runtime} min.
                / {release_date && release_date.split("-")[0]}
              </h3>
            </div>
            <ListInline
              list={genres || []}
              title="The Genres"
              className="mb-lg-40"
            />
            <Text title="The Synopsis" p={overview} />
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <Button content="trailer" />
                <Button content="trailer" />
              </div>
              <Button content="trailer" />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return { movie: movies };
};

export default connect(
  mapStateToProps,
  { fetchMovieRequest }
)(DetailsPage);
