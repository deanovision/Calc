import React from "react";
import "./number-button.css";

const NumberButton = props => {
  return (
    <button
      className={`${props.classStyle} ? ${props.classStyle} : number-button`}
      onClick={() => props.sendDisplay(props.value)}
    >
      {props.value}
    </button>
  );
};
export default NumberButton;
