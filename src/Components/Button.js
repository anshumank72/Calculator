import React from "react";
import "./Button.css";

const button = (props) => {
  return (
    <div className="btn">
      <input type="button" value={props.label} onClick={props.handleClick} />
    </div>
  );
};
export default button;
