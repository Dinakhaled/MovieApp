import React from "react";
import { Router } from "react-router-dom";
import history from "../routes/History";
import Routes from "../routes/Routes";
import SideMenu from "../containers/sideMenu/SideMenu";
import { Container, Row, Col } from "react-bootstrap";
// ========== General styles ==========
import "./App.scss";

const App = () => {
  return (
    <Container fluid className="py-lg-60">
      <Row>
        <Col lg={2} className="pl-0">
          <SideMenu />
        </Col>
        <Col lg={10} className="px-5">
          <Router history={history}>{Routes}</Router>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
