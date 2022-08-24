import React from 'react';
import './NewExpense.css'
import ExpenseFrom from './ExpenseFrom.js';
function NewExpense(props) {
    const { onAddExpense } = props;
    const saveExpenseDataHandler = (enterExpenseData) => {
        const expenseData = {
            ...enterExpenseData,
            // id: Math.random().toString()
        }
        onAddExpense(expenseData)
    }
    return (
        <form className='new-expense'>
            <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} />
        </form>
    );
}

export default NewExpense;