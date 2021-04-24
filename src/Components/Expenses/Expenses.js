import React, {useState} from 'react';
import './Expenses.css'
import ExpenseItems from './ExpenseItems'
import Card from '../Card/Card'
import ExpensesFilter from './ExpensesFilter'

const Expenses = props =>{
    const [filteredYear, setfilteredYear] = useState('2021')
    const filterYear = (value) => {
        setfilteredYear(value)
    }

    return(
        <Card className = 'expenses' >
            <ExpensesFilter selected = {filteredYear} filterYearHandler = {filterYear}></ExpensesFilter>
            {
                props.expense.map(expense => (
                <ExpenseItems date = {expense.expenseDate} product = {expense.expenseProduct} amount = {expense.expenseAmount}></ExpenseItems>
            ))}
        </Card>
    )  
}

export default Expenses;