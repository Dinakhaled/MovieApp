import React, { Component } from "react";
import { fetchPersonRequest } from "../../store/actions";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../../components/image/Image";
import Title from "../../components/title/Title";
import Text from "../../components/text/Text";

class PersonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchPersonRequest(this.props.computedMatch.params.id);
  }

  render() {
    console.log(this.props);
    const { profile_path, name, birthday, biography } = this.props.person;
    return (
      <Container fluid>
        <Row className="px-5">
          <Col lg={5}>
            <Image
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w342${profile_path}`
                  : `/assets/images/image-fail.png`
              }
            />
          </Col>
          <Col lg={6}>
            <Title size="lg" main={name} sub={birthday} />
            <Text
              title="The Biography"
              p={biography}
              className="mb-lg-40 mt-lg-40"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ person }) => {
  return { person };
};

export default connect(
  mapStateToProps,
  { fetchPersonRequest }
)(PersonDetails);
