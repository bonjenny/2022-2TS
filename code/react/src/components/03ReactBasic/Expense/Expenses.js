import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./CSS/Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("20020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items ? (
        props.items.map((c, idx) => {
          return (
            <ExpenseItem
              key={c.id}
              title={c.title}
              amount={c.amount}
              date={c.date}
            />
          );
        })
      ) : ( <ExpenseItem /> )}
    </Card>
  );
};
export default Expenses;
