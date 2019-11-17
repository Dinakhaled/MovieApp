import React, { Component } from "react";
import {
  fetchMovieRequest,
  fetchCreditsRequest,
  currentTap
} from "../../store/actions";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../../components/image/Image";
import Title from "../../components/title/Title";
import Rating from "../../components/rating/Rating";
import ListInline from "../../components/ListInline/ListInline";
import Text from "../../components/text/Text";
import Button from "../../components/buttons/Button";
import Slider from "../../components/slider/Slider";
import { faArrowLeft, faPlay, faLink } from "@fortawesome/free-solid-svg-icons";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import history from "../../routes/History";
import ModalVideo from "react-modal-video";
import CardsGrid from "../CardsGrid/CardsGrid";
import PageTitle from "../../components/PageTitle/PageTitle";

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVideoModalOpen: false
    };
  }

  componentDidMount() {
    this.props.fetchMovieRequest(this.props.computedMatch.params.id);
    this.props.fetchCreditsRequest(this.props.computedMatch.params.id);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.computedMatch.params.id !== this.props.computedMatch.params.id
    ) {
      this.props.fetchMovieRequest(this.props.computedMatch.params.id);
      this.props.fetchCreditsRequest(this.props.computedMatch.params.id);
    }
  }

  handleClickBack = () => {
    history.goBack();
  };

  openModal = () => {
    this.setState({ isVideoModalOpen: true });
  };

  handleClickInlineList = e => {
    const values = e.target.id.split(",");
    this.props.currentTap({
      tap: { id: parseInt(values[0], 10), name: values[1] }
    });
    history.push("/");
  };

  render() {
    const {
      poster_path,
      title,
      tagline,
      vote_average,
      spoken_languages,
      runtime,
      release_date,
      genres,
      overview,
      imdb_id,
      homepage,
      videos
    } = this.props.movie;
    const { credits } = this.props;
    return (
      <Container fluid>
        <PageTitle title={title} />
        <Row className="px-xs-0 px-lg-40">
          <Col lg={5} sm={12}>
            <Image
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w780${poster_path}`
                  : `/assets/images/image-fail.png`
              }
            />
          </Col>
          <Col lg={6}>
            <Title size="lg" main={title} sub={tagline} />
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-lg-60 mb-xs-40">
              <Rating Rate={(vote_average / 10) * 5} text={vote_average} />
              <h3 className="text-light title">
                {spoken_languages &&
                  spoken_languages.length > 0 &&
                  spoken_languages[0].name}{" "}
                / {runtime} min. / {release_date && release_date.split("-")[0]}
              </h3>
            </div>
            {genres && genres.length > 0 && (
              <ListInline
                list={genres || []}
                title="The Genres"
                className="mb-xs-40"
                handleClick={e => this.handleClickInlineList(e)}
              />
            )}
            {overview && (
              <Text title="The Synopsis" p={overview} className="mb-xs-40" />
            )}
            {credits && credits.length > 0 && (
              <Slider
                list={credits || []}
                title="the cast"
                className="mb-xs-40"
              />
            )}
            <div className="d-flex justify-content-between align-items-start">
              <div className="d-flex flex-wrap">
                {homepage && (
                  <a
                    href={homepage}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="mb-xs-20"
                  >
                    <Button
                      className="mr-4"
                      icon={faLink}
                      iconMargin="l"
                      order="1"
                      theme="outline-primary"
                      content="Website"
                    />
                  </a>
                )}
                <a
                  href={`https://www.imdb.com/title/${imdb_id}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="mb-xs-20"
                >
                  <Button
                    className="mr-4"
                    icon={faImdb}
                    iconMargin="l"
                    order="1"
                    theme="outline-primary"
                    content="IMDB"
                  />
                </a>
                {videos && videos.results.length > 0 && (
                  <Button
                    icon={faPlay}
                    iconMargin="l"
                    order="1"
                    theme="outline-primary"
                    content="Trailer"
                    handleClick={this.openModal}
                  />
                )}
              </div>
              <Button
                content="Back"
                iconMargin="r"
                icon={faArrowLeft}
                handleClick={this.handleClickBack}
              />
            </div>
          </Col>
        </Row>
        {videos && videos.results.length > 0 && (
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isVideoModalOpen}
            videoId={videos && videos.results[0].key}
            onClose={() => this.setState({ isVideoModalOpen: false })}
          />
        )}
        <CardsGrid type="recommended" className="mt-xs-60" />
      </Container>
    );
  }
}

const mapStateToProps = ({ movies, credits }) => {
  return { movie: movies, credits: credits.cast };
};

export default connect(
  mapStateToProps,
  { fetchMovieRequest, fetchCreditsRequest, currentTap }
)(DetailsPage);
