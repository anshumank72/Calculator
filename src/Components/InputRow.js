import React from "react";
import "./InputRow.css";

const inputRow = (props) => {
  return (
    <div className="InputRow">
      <input type="text" readOnly value={props.value} />
    </div>
  );
};
export default inputRow;
