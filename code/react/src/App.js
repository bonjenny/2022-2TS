import React, { useState } from "react";
import AddUser from "./components/8-9_AddUser/Users/AddUser";
import UsersList from "./components/8-9_AddUser/Users/UsersList";
// import Wrapper from "./components/8-9_AddUser/Helpers/Wrapper";
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
    <>
      <section id="user-form">
        <AddUser onAddUser={addUserHandler} />
      </section>
      <section id="users">
        <UsersList users={usersList} onDeleteUser={deleteUserHandler} />
      </section>
    </>
  );
};
export default App;
