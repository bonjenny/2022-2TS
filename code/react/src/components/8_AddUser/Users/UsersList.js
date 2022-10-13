import React from "react";
import UserItem from "./UserItem";
import Card from "../UI/Card";
import classes from "./CSS/UsersList.module.css";

const UsersList = props => {

  let content = (
    <p style={{textAlign: "center"}}>
      No users found. Maybe add one?</p>
  );
  if (+props.users.length > 0) {
    content = (
      props.users.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          onDelete={props.onDeleteUser}
        >
          {user.name} ({user.age} years old)
        </UserItem>
      ))
    );
  }

  return (
    <Card className={classes.users}>
      <ul>{content}</ul>
    </Card>
  );
};
export default UsersList;
