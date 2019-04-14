import React from "react";
import "./display.css";

const Display = props => {
  console.log(props);
  return (
    <div className="display">
      <p>{props.display}</p>
    </div>
  );
};
export default Display;
