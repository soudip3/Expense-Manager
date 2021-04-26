import React, {useState} from 'react';
import './Expenses.css'
import Card from '../Card/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpenseChart from './ExpenseChart'

const Expenses = props =>{

    const [filteredYear, setfilteredYear] = useState('2021')
    const filterYear = (value) => {
        setfilteredYear(value)
    }

    const filteredYearHandler = props.expense.filter(expense => {
        return expense.expenseDate.getFullYear().toString() === filteredYear;
    })
    console.log(filteredYearHandler)
    
    return(
        <Card className = 'expenses' >
            <ExpenseChart chartExpenses ={filteredYearHandler}></ExpenseChart>
            <ExpensesFilter selected = {filteredYear} filterYearHandler = {filterYear}></ExpensesFilter>
            <ExpensesList filteredExpenses = {filteredYearHandler}></ExpensesList>
        </Card>
    )  
}

export default Expenses;