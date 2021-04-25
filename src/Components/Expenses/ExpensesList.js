import React from 'react'
import ExpenseItems from './ExpenseItems'
import './ExpensesList.css'
const ExpensesList = (props) => {
    let expensesContent = <h2 className='expenses-list__fallback'>No Expenses Found</h2>
    if(props.filteredExpenses.length > 0){
        expensesContent = props.filteredExpenses.map(expense => (
            <ExpenseItems className='expenses-list' 
            key = {expense.id}
            date = {expense.expenseDate} 
            product = {expense.expenseProduct} 
            amount = {expense.expenseAmount}>
            </ExpenseItems>
            ))
    }
    return expensesContent
}

export default ExpensesList;