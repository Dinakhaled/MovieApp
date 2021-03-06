import React from "react";
import Button from "../buttons/Button";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { currentTap } from "../../store/actions";

import "./List.scss";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list
    };
  }

  handleClick = ({ name, icon, id, api }) => {
    this.props.currentTap({ tap: { id, name, icon, api } });
    this.props.click(api, id);
  };

  renderList = () => {
    return this.props.list.map(({ name, icon, id, api }) => {
      return (
        <li
          className={`list__item mb-2 ${
            id === this.props.tap.id ? "active" : ""
          }`}
          key={id}
          onClick={() => this.handleClick({ name, icon, id, api })}
        >
          <Button
            content={name}
            theme="outline-secondary"
            size="lg"
            icon={icon || faDotCircle}
            iconMargin="r"
          />
        </li>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <h3 className="mb-3 title">{this.props.title}</h3>
        <ul className="list mb-lg-40">{this.renderList()}</ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ currentTap }) => {
  return { ...currentTap };
};

export default connect(
  mapStateToProps,
  { currentTap }
)(List);
