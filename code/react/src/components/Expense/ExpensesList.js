import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./CSS/ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (<h2 className="expenses-list__fallback">Found no expenses.</h2>);
  }
  return (
    <ul className="expenses-list">
      {props.items.map((c) => (
        <ExpenseItem
          key={c.id}
          title={c.title}
          amount={c.amount}
          date={c.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
