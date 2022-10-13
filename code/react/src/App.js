import React, { useState } from "react";
import AddUser from "./components/8_AddUser/Users/AddUser";
import UsersList from "./components/8_AddUser/Users/UsersList";
import "./App.css";

const App = () => {
  const [usersList, setUsersList] = useState([
    { name: "Max", age: "31", id: "a1" },
    { name: "Jenny", age: "21", id: "a2" },
  ]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {
        name: uName,
        age: uAge,
        id: Math.random().toString(),
      }];
    });
  };

  const deleteUserHandler = (userId) => {
    setUsersList((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== userId);
      return updatedUsers;
    });
  };

  return (
    <div>
      <section id="user-form">
        <AddUser onAddUser={addUserHandler} />
      </section>
      <section id="users">
        <UsersList users={usersList} onDeleteUser={deleteUserHandler} />
      </section>
    </div>
  );
};
export default App;
