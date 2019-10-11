import React from "react";
import Button from "../buttons/Button";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import "./List.scss";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
      active: null
    };
  }

  handleClick = id => {
    this.setState({ active: id });
  };

  renderList = () => {
    return this.props.list.map(({ name, icon, id }) => {
      return (
        <li
          className={`list__item mb-2 ${
            id === this.state.active ? "active" : ""
          }`}
          key={id}
          onClick={() => this.handleClick(id)}
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

export default List;
