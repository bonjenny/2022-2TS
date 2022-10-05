import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./CSS/Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items ? props.items.map(c => {
        return (
          <ExpenseItem
            title={c.title}
            amount={c.amount}
            date={c.date} />
        )}) : <ExpenseItem />
      }
    </Card>
  );
}
export default Expenses;
