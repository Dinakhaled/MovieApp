import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Search.scss";

const Search = () => {
  return (
    <Form className="form-search">
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
        />
      </InputGroup>
    </Form>
  );
};

export default Search;
