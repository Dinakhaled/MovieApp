import React, { Component } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import {
  currentTap,
  fetchMoviesReq,
  searchKeyword,
  sortBy
} from "../../store/actions";
import "./Search.scss";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchKeyword({ search: this.state.search });
    this.props.fetchMoviesReq(this.props.api, {
      page: 1,
      query: this.state.search
    });
    this.props.currentTap({ tap: { id: "", icon: "", api: "" } });
    this.setState({ search: "" });
    this.props.sortBy({ sortBy: "" });
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <Form className="form-search mb-4" onSubmit={e => this.handleSubmit(e)}>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text className="form-search__icon" id="basic-addon1">
              <FontAwesomeIcon
                className="fontAwesome"
                icon={faSearch}
                size="1x"
              />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            className="form-search__input"
            placeholder="Search for a movie..."
            aria-label="search"
            aria-describedby="basic-addon1"
            value={this.state.search}
            onChange={e => this.handleChange(e)}
          />
        </InputGroup>
      </Form>
    );
  }
}

export default connect(
  null,
  { currentTap, fetchMoviesReq, searchKeyword, sortBy }
)(Search);
