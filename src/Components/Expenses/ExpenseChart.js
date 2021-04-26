import React from 'react'
import Chart from '../Chart/Chart';

const ExpenseChart = (props) =>{

    let chartValue = [
        {
            label : 'January',
            value : 0
        },
        {
            label : 'February',
            value : 0
        },
        {
            label : 'March',
            value : 0
        },
        {
            label : 'April',
            value : 0
        },
        {
            label : 'May',
            value : 0
        },
        {
            label : 'June',
            value : 0
        },
        {
            label : 'July',
            value : 0
        },
        {
            label : 'August',
            value : 0
        },
        {
            label : 'September',
            value : 0
        },
        {
            label : 'October',
            value : 0
        },
        {
            label : 'November',
            value : 0
        },
        {
            label : 'December',
            value : 0
        }
    ];
    let max = 0
    for (const expense of props.chartExpenses){
        const expenseMonth = expense.expenseDate.getMonth()
        chartValue[expenseMonth].value =+ expense.expenseAmount
        max += expense.expenseAmount 
    }

    return(
        <div>
            <Chart datapoints={chartValue} maxValue={max}></Chart>
        </div>
    )
}

export default ExpenseChart;