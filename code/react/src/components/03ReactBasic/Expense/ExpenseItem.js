import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./CSS/ExpenseItem.css";

const ExpenseItem = (props) => {
  
  console.log('ExpenseItem evaluated by React');
  const [title, setTitle] = useState(props.title); //let title = props.title;
  
  const clickHandler = () => { // function clickHandler()
    setTitle('Updated!');
    console.log(title); // 콘솔창에 뜸
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
