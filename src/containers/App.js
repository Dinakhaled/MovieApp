import React, { Component } from "react";
import { Router } from "react-router-dom";
import history from "../routes/History";
import Routes from "../routes/Routes";
import SideMenu from "../containers/sideMenu/SideMenu";
import Search from "../components/search/Search";
import { connect } from "react-redux";
import { loader } from "../store/actions";
// import Loader from "../components/loader/Loader";
import { Container, Row, Col } from "react-bootstrap";
// ========== General styles ==========
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col lg={{ span: 2, offset: 10 }} className="pt-4">
            <Search />
          </Col>
        </Row>
        <Row>
          <Col lg={2} className="pl-0">
            <SideMenu />
          </Col>
          <Col lg={10} className="px-5 py-4">
            {/* {this.props.loading ? (
              <div className="h-100 d-flex align-items-center justify-content-center">
                <Loader />
              </div>
            ) : null} */}
            <Router history={history}>{Routes}</Router>
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
