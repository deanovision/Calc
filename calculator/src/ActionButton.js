import React from "react";
import "./action-button.css";

const ActionButton = props => {
  return (
    <button className="action-button" onClick={props.getTotal}>
      {props.value}
    </button>
  );
};
export default ActionButton;
