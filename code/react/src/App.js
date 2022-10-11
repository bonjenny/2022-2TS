import React, { useState } from "react";
import AddUser from "./components/8_AddUser/Users/AddUser";
import UserInput from "./components/8_AddUser/Users/UserInput";
import UserList from "./components/8_AddUser/Users/UserList";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([
    { name: "Max", age: "31", id: "a1" },
    { name: "Jenny", age: "21", id: "a2" },
  ]);

  const addUserHandler = (enteredText) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        name: enteredText.name,
        age: enteredText.age,
        id: Math.random().toString(),
      });
      return updatedUsers;
    });
  };

  const deleteUserHandler = (userId) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== userId);
      return updatedUsers;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No users found. Maybe add one?</p>
  );

  if (users.length > 0) {
    content = <UserList items={users} onDeleteUser={deleteUserHandler} />;
  }

  return (
    <div>
      <AddUser />
      <section id="user-form">
        <UserInput onAddUser={addUserHandler} />
      </section>
      <section id="users">{content}</section>
    </div>
  );
};
export default App;
