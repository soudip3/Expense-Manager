import React, {useState} from 'react';
import './Expenses.css'
import Card from '../Card/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

const Expenses = props =>{
    const [filteredYear, setfilteredYear] = useState('2021')
    const filterYear = (value) => {
        setfilteredYear(value)
    }

    const filteredYearHandler = props.expense.filter(expense => {
        return expense.expenseDate.getFullYear().toString() === filteredYear;
    })

    return(
        <Card className = 'expenses' >
            <ExpensesFilter selected = {filteredYear} filterYearHandler = {filterYear}></ExpensesFilter>
            <ExpensesList filteredExpenses = {filteredYearHandler}></ExpensesList>
        </Card>
    )  
}

export default Expenses;