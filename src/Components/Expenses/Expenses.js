import './Expenses.css'
import ExpenseItems from './ExpenseItems'
import Card from '../Card/Card'
const expenses = props =>{
    return(
        <Card className = 'expenses'>
            {
                props.expense.map(expense => (
                <ExpenseItems date = {expense.expenseDate} product = {expense.expenseProduct} amount = {expense.expenseAmount}></ExpenseItems>
            ))}
        </Card>
    )  
}

export default expenses;