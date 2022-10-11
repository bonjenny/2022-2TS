import React, { useRef, useState } from "react";
import Modal from "../UI/Modal";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./CSS/UserInput.module.css";

const UserInput = (props) => {
  const [enteredValue, setEnteredValue] = useState({ name: '', age: '' });
  const nameInput = useRef();
  const { name, age } = enteredValue;
  const [isValid, setIsValid] = useState(true);
  const [confirmMsg, setConfirmMsg] = useState('Text');

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
    if (enteredValue.name === '' || enteredValue.age === '') {
      setConfirmMsg("Please enter a valid name and age (non-empty values).");
      setIsValid(false);
      return;
    }
    else if (enteredValue.age < 0) {
      setConfirmMsg("Please enter a valid age (> 0).");
      setIsValid(false);
      return;
    }
    props.onAddUser(enteredValue);
    setEnteredValue({ name: '', age: '' });
    nameInput.current.focus();
  };

  const showModalHandler = () => {
    setIsValid(true);
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
      { !isValid && <Modal onClose={showModalHandler} header="Invalid input">
        {confirmMsg}
      </Modal> }
    </Card>
  );
};
export default UserInput;
