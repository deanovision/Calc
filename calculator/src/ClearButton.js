import React from "react";
import "./clear-button.css";

const ClearButton = props => {
  return (
    <button className="clear" onClick={props.clearDisplay}>
      {props.value}
    </button>
  );
};
export default ClearButton;
