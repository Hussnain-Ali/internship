import './ExpenseItems.css'
import React from 'react';
import ExpenseDate from './ExpenseDate.js';
function ExpenseItems(props) {
    let { amount, date, title } = props;

    return (
        <div className="expense-item">
            <ExpenseDate date={date} />
            <div className='expense-item_description'>
                <h4>{title}</h4>
                <div className='expense-item__price'>${amount}</div>
            </div>

        </div>
    )
}

export default ExpenseItems;