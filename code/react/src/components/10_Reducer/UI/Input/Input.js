import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const className = classes.input + " " + props.className;
  return (
    <div className={className}>
      <label htmlFor={props.typeId}>{props.labelContent}</label>
      <input
        type={props.typeId}
        id={props.typeId}
        value={props.inputValue}
        onChange={props.inputChangeHandler}
        onBlur={props.inputBlurHandler}
      />
    </div>
  );
};
export default Input;
