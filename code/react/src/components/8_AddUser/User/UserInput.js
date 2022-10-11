import React, { useRef, useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./CSS/UserInput.module.css";

const UserInput = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [enteredValue, setEnteredValue] = useState({ name: '', age: '' });
  const nameInput = useRef();
  const { name, age } = enteredValue;

  const nameInuptChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue((prevEnteredValue) => {
      const updatedEnteredValue = {
        ...prevEnteredValue,
        name: event.target.value
      };
      return updatedEnteredValue;
    });
  };

  const ageInuptChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue((prevEnteredValue) => {
      const updatedEnteredValue = {
        ...prevEnteredValue,
        age: event.target.value
      };
      return updatedEnteredValue;
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (Object.keys(enteredValue).length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddUser(enteredValue);
    setEnteredValue({ name: '', age: '' });
    nameInput.current.focus();
  };

  return (
    <Card>
      <form onSubmit={formSubmitHandler}>
        <div className={styles["form-control"]}>
          <label>Username</label>
          <input
            ref={nameInput}
            type="text"
            value={name}
            onChange={nameInuptChangeHandler}
          />
          <label>Age (Years)</label>
          <input
            type="number"
            value={age}
            onChange={ageInuptChangeHandler}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default UserInput;
