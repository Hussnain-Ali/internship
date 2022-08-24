import React, { useState } from 'react';
import './ExpenseForm.css'
import DateFormat from '../DateFormat/DateFormat.js'

function ExpenseForm(props) {
    const [enterTitle, setEnterTitle] = useState('')
    const [enterAmount, setEnterAmount] = useState('')
    const [enterDate, setEnterDate] = useState('')

    const titleChnangeHandler = e => {
        setEnterTitle(e.target.value)
        console.log(enterTitle)
    }

    const amountChangehandler = e => {
        setEnterAmount(e.target.value)
    }
    const dateChangeHandler = e => {
        setEnterDate(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()

        const expenseData = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate),
        }
        props.addExpense(expenseData)

    }

    return (
        <form>

            <div >
                <div className='new-expense__controls'>
                    <div>
                        <div className='new-expense__control'>
                            <label>Title</label>
                            <input
                                type='text'
                                value={enterTitle}
                                onChange={titleChnangeHandler} />
                        </div>
                        <div className='new-expense__controler'>
                            <label>Amount</label>
                            <input
                                type='number'
                                value={enterAmount}
                                min='0.01' step='0.1'
                                onChange={amountChangehandler} />
                        </div>
                    </div>
                    <div>
                        <div className='new-expense__controling'>
                            <label>Date</label>
                            <input
                                type='date'
                                value={enterDate}
                                onChange={dateChangeHandler}
                                min='2019-01-01'
                                max='2022-12-31' />
                        </div>

                        <div className='new-expense__actions'>
                            <button type='button' onClick={submitHandler}>Add Expense</button>
                        </div>
                    </div>
                </div>

            </div>


        </form>
    );
}

export default ExpenseForm;