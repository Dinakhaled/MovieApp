import React, { Component } from "react";
import Search from "../components/search/Search";
import { connect } from "react-redux";
import { loader } from "../store/actions";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../containers/navBar/Navbar";
// ========== General styles ==========
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: null
    };
    window.addEventListener("resize", this.changeMobile);
  }

  changeMobile = () => {
    window.matchMedia("(max-width: 1024px)").matches
      ? this.setState({ isMobile: true })
      : this.setState({ isMobile: false });
  };

  render() {
    const { isMobile } = this.state;
    const { loading } = this.props;
    return (
      <Container fluid className={isMobile && "p-0"}>
        {!isMobile && (
          <Row className="mx-auto">
            <Col lg={{ span: 2, offset: 10 }} className="pt-4">
              <Search className="mb-4" />
            </Col>
          </Row>
        )}
        <Row className="mx-auto">
          <Navbar isMobile={isMobile} loading={loading} />
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ loader }) => {
  return { ...loader };
};

export default connect(
  mapStateToProps,
  { loader }
)(App);
