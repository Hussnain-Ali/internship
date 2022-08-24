import './App.css';

import react, { useState } from 'react'
import ExpenseForm from './components/ExpenseForm.js/ExpenseForm';
import Expenses from './components/Expenses/Expenses';
function App() {
  const expenseData = [
    { title: "car insurance", amount: 234.5, date: new Date(2021, 5, 16) },
    { title: "Desk Products", amount: 234.5, date: new Date(2022, 6, 19) },
    { title: "Laptop", amount: 234.5, date: new Date(2018, 5, 23) },
    { title: "House", amount: 234.5, date: new Date(2015, 6, 30) },
  ]

  const [expenses, setExpenses] = useState(expenseData)
  const addExpenseHandler = (expense) => {
    setExpenses(pre => {
      return [expense, ...pre]
    })
  }
  return (
    <div className="App">
      <ExpenseForm addExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
