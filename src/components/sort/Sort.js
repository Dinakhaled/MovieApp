import React, { Component } from "react";
import "./Sort.scss";
import Select from "react-select";
import { connect } from "react-redux";
import { sortBy } from "../../store/actions";

const sortingList = [
  { value: "popularity.desc", label: "Popularity" },
  { value: "vote_average.desc", label: "Votes Average" },
  { value: "original_title.asc", label: "Title" },
  { value: "release_date.desc", label: "Release Date" }
];

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortingList,
      selected: sortingList[0]
    };
  }

  handleChange = e => {
    this.setState({ selected: e }, () => {
      this.props.sortBy(this.state.selected.value);
      this.props.click(this.state.selected.value);
    });
  };

  render() {
    return (
      <Select
        value={this.state.selected}
        options={this.state.sortingList}
        className="sort mb-xs-40"
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            text: "#263238",
            primary25: "rgba(84, 110, 122, 0.3)",
            primary: "#263238"
          }
        })}
        onChange={e => {
          this.handleChange(e);
        }}
      />
    );
  }
}

const mapStateToProps = ({ sortBy }) => {
  return { ...sortBy };
};

export default connect(
  mapStateToProps,
  { sortBy }
)(Sort);
