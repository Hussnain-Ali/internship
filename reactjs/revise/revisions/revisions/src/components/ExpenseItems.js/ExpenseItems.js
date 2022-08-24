import React from 'react';
import DateFormat from '../DateFormat/DateFormat.js'
function ExpenseItems(props) {
    let { amount, date, title } = props;
    return (
        <div className="expense-item">
            <DateFormat date={date} />
            <div className='expense-item_description'>
                <h4>{title}</h4>
                <div className='expense-item__price'>${amount}</div>
            </div>

        </div>
    );
}

export default ExpenseItems;