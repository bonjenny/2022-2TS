import React from "react";
import classes from './CSS/Card.module.css';

const Card = (props) => {
  // const classes = style.card + ' ' + props.className;
  return (
  <div className={`${classes.card} ${props.className}`}>
    {props.children}
  </div>
  );
}
export default Card;