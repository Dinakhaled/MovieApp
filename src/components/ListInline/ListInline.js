import React from "react";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ListInline.scss";

const renderList = props => {
  console.log(props);

  return props.list.map(({ text, id }) => {
    return (
      <li className="mr-4 title small-bold inline-list__item" key={id}>
        <FontAwesomeIcon className="fontAwesome mr-2" icon={faDotCircle} />
        {text}
      </li>
    );
  });
};

const ListInline = props => {
  return (
    <div>
      <h3 className="title mb-2">The Genres</h3>
      <ul className="p-0 list-unstyled d-flex inline-list">
        {renderList(props)}
      </ul>
    </div>
  );
};

export default ListInline;
