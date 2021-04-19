import React from "react";
import InputRow from "./InputRow";

const input = (props) => {
  return (
    <div className="Input">
      <InputRow value={props.question} />
      <InputRow value={props.answer} />
    </div>
  );
};
export default input;
