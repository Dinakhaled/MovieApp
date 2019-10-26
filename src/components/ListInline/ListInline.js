import React from "react";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ListInline.scss";

const renderList = props => {
  return props.list.map(({ name, id }) => {
    return (
      <li className="mr-4 title small-bold inline-list__item" key={id}>
        <FontAwesomeIcon className="fontAwesome mr-2" icon={faDotCircle} />
        {name}
      </li>
    );
  });
};

const ListInline = props => {
  return (
    <div className={props.className}>
      <h2 className="title mb-3">{props.title}</h2>
      <ul className="p-0 list-unstyled d-flex inline-list">
        {renderList(props)}
      </ul>
    </div>
  );
};

export default ListInline;
