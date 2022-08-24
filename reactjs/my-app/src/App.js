import './App.css';
import React, { useState } from 'react';
import Expense from './components/expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesChart from './components/expense/ExpensesChart';
const initialExpenses = [
  { title: 'Car Insurance', amount: 294.5, date: new Date(2021, 5, 1) },
  { title: 'New Desk', amount: 322.5, date: new Date(2020, 8, 12) },
  { title: 'Motor Bike', amount: 454.5, date: new Date(2029, 7, 6) },
  { title: 'Aeroplane', amount: 123.5, date: new Date(2029, 2, 23) },
]

function App() {
  const [expenses, setExpenses] = useState(initialExpenses)
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
    console.log(expense)
  }

  return (
    <div>
      <h1>Hello</h1>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expense
        expenses={expenses} />

      <ExpensesChart />
    </div>
  );
}

export default App;
