import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./CSS/Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };
  
  const filteredExpense = props.items.filter(c =>
    c.date.getFullYear().toString() === filteredYear);
  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpense.length > 0) {
    expensesContent = filteredExpense.map((c, idx) => {
      return <ExpenseItem key={c.id} 
        title={c.title} amount={c.amount} date={c.date} />
    })
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
};
export default Expenses;
