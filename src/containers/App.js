import React, { Component } from "react";
import { Router } from "react-router-dom";
import history from "../routes/History";
import Routes from "../routes/Routes";
import SideMenu from "../containers/sideMenu/SideMenu";
import Search from "../components/search/Search";
import { connect } from "react-redux";
import { loader } from "../store/actions";
import Loader from "../components/loader/Loader";
import { Container, Row, Col } from "react-bootstrap";
// ========== General styles ==========
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { loading } = this.props;
    return (
      <Container fluid>
        <Row className="mx-auto">
          <Col lg={{ span: 2, offset: 10 }} className="pt-4">
            <Search />
          </Col>
        </Row>
        <Row className="mx-auto">
          <Col lg={2} className="pl-0">
            <SideMenu className="d-none d-lg-block" />
          </Col>
          <Col lg={10} className="px-5 py-4 routes-container">
            {loading ? <Loader /> : null}
            <div className={`${loading ? "d-none" : ""}`}>
              <Router history={history}>{Routes}</Router>
            </div>
          </Col>
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
