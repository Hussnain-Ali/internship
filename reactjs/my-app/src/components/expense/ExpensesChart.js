import React from 'react';
import Chart from '../Chart/Chart';

function ExpensesChart(props) {
    const chartDataPoint = [
        { label: 'jan', value: 0 },
        { label: 'feb', value: 0 },
        { label: 'mar', value: 0 },
        { label: 'apr', value: 0 },
        { label: 'may', value: 0 },
        { label: 'jun', value: 0 },
        { label: 'jul', value: 12 },
        { label: 'aug', value: 0 },
        { label: 'sep', value: 0 },
        { label: 'oct', value: 0 },
        { label: 'nov', value: 0 },
        { label: 'dec', value: 0 },
    ];

    for (const expense in props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoint[expenseMonth].value += expense.date;
    }
    return (
        <div>
            <Chart datapoint={chartDataPoint} />
        </div>
    );
}

export default ExpensesChart;