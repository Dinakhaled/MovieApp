import React from "react";
import Button from "../buttons/Button";
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
    this.setState({ active: id }, () => {
      console.log(this.state);
    });
  };

  renderList = () => {
    return this.props.list.map(({ content, icon, id }) => {
      return (
        <li
          className={`list__item mb-2 ${
            id === this.state.active ? "active" : ""
          }`}
          key={id}
          onClick={() => this.handleClick(id)}
        >
          <Button
            content={content}
            theme="outline-secondary"
            size="lg"
            icon={icon}
            iconMargin="r"
          />
        </li>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <h2 className="mb-3">{this.props.title}</h2>
        <ul className="list">{this.renderList()}</ul>
      </React.Fragment>
    );
  }
}

export default List;
