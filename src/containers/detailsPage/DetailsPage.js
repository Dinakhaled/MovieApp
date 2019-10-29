import React, { Component } from "react";
import { fetchMovieRequest } from "../../store/actions";
import {fetchCreditsRequest} from "../../store/actions";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../../components/image/Image";
import Title from "../../components/title/Title";
import Rating from "../../components/rating/Rating";
import ListInline from "../../components/ListInline/ListInline";
import Text from "../../components/text/Text";
import Button from "../../components/buttons/Button";
import Slider from "../../components/slider/Slider";
import { faArrowLeft, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import history from '../../routes/History';

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchMovieRequest(this.props.computedMatch.params.id);
    this.props.fetchCreditsRequest(this.props.computedMatch.params.id);
  }

  handleClickBack = () => {
    history.push('/')
  }

  render() {
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
            <Text title="The Synopsis" p={overview} className="mb-lg-40" />
            <Slider list={this.props.credits || []} title='the cast' className="mb-lg-40" />
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <Button className="mr-4" icon={faImdb} iconMargin='l' order="1" theme="outline-primary" content="IMDB" />
                <Button icon={faPlay} iconMargin='l' order="1" theme="outline-primary" content="Trailer" />
              </div>
              <Button content="Back" iconMargin='r' icon={faArrowLeft} handleClick={this.handleClickBack} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ movies, credits }) => {
  return { movie: movies, credits: credits.crew };
};

export default connect(
  mapStateToProps,
  { fetchMovieRequest, fetchCreditsRequest }
)(DetailsPage);
