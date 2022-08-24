import React from 'react';
import ExpenseItems from '../ExpenseItems.js/ExpenseItems';

function Expenses(props) {
    const { expenses } = props;

    return (
        <div>
            {expenses.map(e => {
                return <ExpenseItems
                    title={e.title}
                    amount={e.amount}
                    date={e.date}
                />
            })}
        </div>
    );
}

export default Expenses;