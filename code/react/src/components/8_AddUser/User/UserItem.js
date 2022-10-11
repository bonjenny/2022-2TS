import React, { useState } from "react";
import "./CSS/UserItem.css";

const UserItem = props => {
  const [deleteUser, setDeleteUser] = useState("");

  const deleteHandler = () => {
    setDeleteUser("(Deleted!)");
    props.onDelete(props.id);
  };

  return (
    <li className="user-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};
export default UserItem;