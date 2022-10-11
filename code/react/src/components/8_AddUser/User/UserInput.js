import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./CSS/UserInput.module.css";

const UserInput = (props) => {
  return (
    <Card>
      <form className={styles['form-control']}>
        <div>
          <label>Username</label>
          <input type="text" />
        </div>
        <div>
          <label>Age</label>
          <input type="number" />
        </div>
        <Button type="submit">Add Goal</Button>
      </form>
    </Card>
  );
};
export default UserInput;