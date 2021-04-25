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

    const filteredYearHandler = props.expense.filter(expense => {
        return expense.expenseDate.getFullYear().toString() === filteredYear;
    })

    return(
        <Card className = 'expenses' >
            <ExpensesFilter selected = {filteredYear} filterYearHandler = {filterYear}></ExpensesFilter>
            {
                filteredYearHandler.map(expense => (
                <ExpenseItems 
                key = {expense.id}
                date = {expense.expenseDate} 
                product = {expense.expenseProduct} 
                amount = {expense.expenseAmount}>
                </ExpenseItems>
            ))}
        </Card>
    )  
}

export default Expenses;