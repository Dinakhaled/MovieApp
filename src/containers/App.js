import React from "react";
import { Router } from "react-router-dom";
import history from "../routes/History";
import Routes from "../routes/Routes";
import SideMenu from "../containers/sideMenu/SideMenu";
import Search from "../components/search/Search";
import { Container, Row, Col } from "react-bootstrap";
// ========== General styles ==========
// import "bootstrap/scss/bootstrap.scss";
import "./App.scss";
const App = () => {
  return (
    <Container fluid className="">
      <Row>
        <Col lg={{ span: 2, offset: 10 }} className="pt-4">
          <Search />
        </Col>
      </Row>
      <Row>
        <Col lg={2} className="pl-0">
          <SideMenu />
        </Col>
        <Col lg={10} className="px-5 pt-4">
          <Router history={history}>{Routes}</Router>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
