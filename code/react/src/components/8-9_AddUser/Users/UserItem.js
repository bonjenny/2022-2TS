import React from "react";
import classes from "./CSS/UserItem.module.css";

const UserItem = props => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={classes.useritem} onClick={deleteHandler}>
      {props.children}
    </li>
  );
};
export default UserItem;