import React, { Component } from "react";
import Button from "../buttons/Button";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { currentTap, fetchMoviesReq } from "../../store/actions";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = ({ page }, next) => {
    this.props.fetchMoviesReq(this.props.api, {
      page: next ? page + 1 : page - 1,
      with_genres:
        this.props.id === 1 || this.props.id === 2 || this.props.id === 3
          ? ""
          : this.props.id
    });
  };

  renderNextBtn = () => {
    return (
      <div onClick={() => this.handleClick(this.props.movies, true)}>
        <Button
          content={`page ${this.props.movies.page + 1}`}
          theme="primary"
          icon={faArrowRight}
          order="1"
          iconMargin="l"
        />
      </div>
    );
  };

  renderBackBtn = () => {
    return (
      <div onClick={() => this.handleClick(this.props.movies, false)}>
        <Button
          content={`page ${this.props.movies.page - 1}`}
          theme="primary"
          icon={faArrowLeft}
          order="0"
          iconMargin="r"
        />
      </div>
    );
  };

  render() {
    const isMorePage = this.props.movies.total_pages - this.props.movies.page;
    const isBack = this.props.movies.page > 1 ? true : false;
    const classMap = isBack
      ? "d-flex align-items-center  justify-content-between"
      : "d-flex align-items-center justify-content-end";
    return (
      <div className={classMap}>
        {isBack ? this.renderBackBtn() : ""}
        {isMorePage !== 0 ? this.renderNextBtn() : ""}
      </div>
    );
  }
}

const mapStateToProps = ({ currentTap, movies }) => {
  return { ...currentTap, movies };
};

export default connect(
  mapStateToProps,
  { currentTap, fetchMoviesReq }
)(Pagination);
