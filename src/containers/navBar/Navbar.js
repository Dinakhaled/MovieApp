import React from "react";
import Loader from "../../components/loader/Loader";
import { Router } from "react-router-dom";
import history from "../../routes/History";
import Routes from "../../routes/Routes";
import SideMenu from "../sideMenu/SideMenu";
import { Col } from "react-bootstrap";
import "./Navbar.scss";
import Search from "../../components/search/Search";

const Navbar = ({ isMobile, loading }) => {
  return (
    <React.Fragment>
      <Col
        lg={isMobile ? 12 : 2}
        className={`pl-0 ${isMobile && "custom-navbar custom-navbar--mobile"}`}
      >
        <SideMenu
          className={`d-lg-block ${isMobile ? "mb-xs-60" : ""}`}
          type={isMobile ? "mobile" : ""}
        />
        {isMobile && <Search />}
      </Col>
      <Col
        lg={isMobile ? 12 : 10}
        className={`py-4 routes-container ${
          isMobile ? "mt-xs-80 px-4" : "px-5"
        }`}
      >
        {loading ? <Loader /> : null}
        <div className={`${loading ? "d-none" : ""}`}>
          <Router history={history}>{Routes}</Router>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default Navbar;
