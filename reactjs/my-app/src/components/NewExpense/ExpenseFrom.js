import React, { useState } from 'react';
import './ExpenseForm.css'
const ExpenseFrom = (props) => {
    //////////////bu using single state instead of multiple state //
    // const [userInput, setUserInput] = useState({
    //     enterTitle: '',
    //     enterAmount: '',
    //     enterDate: ''
    // })
    //the above state is same as the three state use in below

    const [enterTitle, setEnterTitle] = useState('')
    const [enterAmount, setEnterAmount] = useState('')
    const [enterDate, setEnterDate] = useState('')
    // console.log(enterTitle, enterAmount, enterDate);
    const titleChnangeHandler = (event) => {
        setEnterTitle(event.target.value)
        // setUserInput((previous) => {
        //     return { ...previous, enterTitle: event.target.value }
        // });

    }
    const amountChangehandler = (event) => {
        setEnterAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterAmount: event.target.value,
        // })
    }
    const dateChangeHandler = (event) => {
        setEnterDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterDate: event.target.value,
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enterTitle,
            amount: +enterAmount,
            //here in the Date() object wwe pass our already create date format 
            //and it will take it as a constructor
            date: new Date(enterDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    };


    return (
        <>

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

        </>

    );
}

export default ExpenseFrom;