import React from "react";
import * as Btn from "react-bootstrap/Button";
import "./Button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ content, size, theme, icon, iconMargin, order, className, handleClick }) => {
  return (
    <Btn variant={theme} size={size} className={className} onClick={ () => handleClick ? handleClick() : null}>
      {icon && (
        <FontAwesomeIcon
          className={`fontAwesome m${iconMargin}-3 order-${order}`}
          icon={icon}
        />
      )}
      {content}
    </Btn>
  );
};

export default Button;
