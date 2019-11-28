import React, { Component } from "react";
import { fetchPersonRequest } from "../../store/actions";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../../components/image/Image";
import Title from "../../components/title/Title";
import Text from "../../components/text/Text";
import Button from "../../components/buttons/Button";
import { faArrowLeft, faLink } from "@fortawesome/free-solid-svg-icons";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import history from "../../routes/History";
import CardsGrid from "../CardsGrid/CardsGrid";
import PageTitle from "../../components/PageTitle/PageTitle";

class PersonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchPersonRequest(this.props.computedMatch.params.id);
  }

  handleClickBack = () => {
    history.goBack();
  };

  render() {
    const {
      profile_path,
      name,
      birthday,
      biography,
      imdb_id,
      homepage
    } = this.props.person;
    return (
      <Container fluid>
        <PageTitle title={name} />
        <Row className="px-xs-0 align-items-center">
          <Col lg={5} sm={12}>
            <Image
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w780${profile_path}`
                  : `/assets/images/image-fail.png`
              }
            />
          </Col>
          <Col lg={6}>
            <Title size="lg" main={name} sub={birthday} />
            {biography && (
              <Text
                title="The Biography"
                p={biography}
                className="mb-lg-40 mt-lg-40"
              />
            )}
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                {homepage && (
                  <a href={homepage} rel="noopener noreferrer" target="_blank">
                    <Button
                      className="mr-4 mb-3"
                      icon={faLink}
                      iconMargin="l"
                      order="1"
                      theme="outline-primary"
                      content="Website"
                    />
                  </a>
                )}
                <a
                  href={`https://www.imdb.com/name/${imdb_id}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button
                    className="mr-4 mb-3"
                    icon={faImdb}
                    iconMargin="l"
                    order="1"
                    theme="outline-primary"
                    content="IMDB"
                  />
                </a>
              </div>
              <Button
                className="mb-3"
                content="Back"
                iconMargin="r"
                icon={faArrowLeft}
                handleClick={this.handleClickBack}
              />
            </div>
          </Col>
        </Row>
        <CardsGrid main="Also enters in" type="person" className="mt-xs-60" />
      </Container>
    );
  }
}

const mapStateToProps = ({ person, movies }) => {
  return { person, movies };
};

export default connect(
  mapStateToProps,
  { fetchPersonRequest }
)(PersonDetails);
