import React from "react";
import UserItem from "./UserItem";
import Card from "../UI/Card";
import "./CSS/UserList.css";

const UserList = props => {
  return (
    <Card>
      <ul className="user-list">
        {props.items.map(user => (
          <UserItem
            key={user.id}
            id={user.id}
            onDelete={props.onDeleteUser}
          >
            {user.name} ({user.age} years old)
          </UserItem>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
