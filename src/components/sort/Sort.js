import React from "react";
import "./Sort.scss";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const Sort = () => {
  return <Select options={options} className="sort" />;
};

export default Sort;
