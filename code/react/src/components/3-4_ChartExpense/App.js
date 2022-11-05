import React, { useState } from "react";
import Todo from "./components/1_JustJS/component/Todo";
import NewExpense from "./components/3-4_ChartExpense/NewExpense/NewExpense";
import Expenses from "./components/3-4_ChartExpense/Expense/Expenses";
import style from "./components/1_JustJS/styles.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h1>Expenses</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <h1>My Todos</h1>
      <Todo className={style.todo} text='Learn React' />
    </div>
  );
}
export default App;
