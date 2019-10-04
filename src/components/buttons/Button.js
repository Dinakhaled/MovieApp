import React from "react";
import * as Btn from "react-bootstrap/Button";
import "./Button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ content, size, theme, icon, iconMargin, order }) => {
  return (
    <Btn variant={theme} size={size}>
      <FontAwesomeIcon
        className={`fontAwesome m${iconMargin}-2 order-${order}`}
        icon={icon}
      />
      {content}
    </Btn>
  );
};

export default Button;
