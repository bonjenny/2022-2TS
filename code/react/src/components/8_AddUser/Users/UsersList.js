import React from "react";
import UserItem from "./UserItem";
import Card from "../UI/Card";
import classes from "./CSS/UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card>
      <ul className={classes.users}>
        {/* {props.users.map(user => (
          <li>{user.name} ({user.age} years old)</li>
          // <UserItem
          //   key={user.id}
          //   id={user.id}
          //   onDelete={props.onDeleteUser}
          // >
          //   {user.name} ({user.age} years old)
          // </UserItem>
        ))} */}
      </ul>
    </Card>
  );
};
export default UsersList;
