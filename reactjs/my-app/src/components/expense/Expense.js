import React from 'react';
import ExpenseItems from './ExpenseItems';
import ExpensesChart from './ExpensesChart';
function Expense(props) {
    const { expenses } = props
    return (
        <div>
            {expenses.length === 0 ?
                <h1>THERE IS NO DATA IN THE LIST</h1>
                : expenses.map((e) => {
                    return <ExpenseItems
                        key={e._id}
                        title={e.title}
                        amount={e.amount}
                        date={e.date} />
                })}
            <ExpensesChart
            />

        </div>
    );
}

export default Expense;