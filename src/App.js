import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'School Fee',
    amount: 250,
    date: new Date(2023, 8, 12)
  },
  {
    id: 'e2',
    title: 'Loan',
    amount: 250,
    date: new Date(2023, 10, 4)
  },
  {
    id: 'e3',
    title: 'Food',
    amount: 250,
    date: new Date(2023, 8, 24)
  }
];

export const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const expenseDataHendelar = (reciveExpenseData) => {
    const updatedExpense = [reciveExpenseData, ...expenses];
    setExpenses(updatedExpense);
  };
  return (
    <div>
      <h1>Welcome to my first react project !</h1>
      <NewExpense addNewExpenseInApp={expenseDataHendelar}/>
      <Expenses item={expenses} />

    </div>
  );
};
