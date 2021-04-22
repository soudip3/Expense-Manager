import './Expenses.css'
import ExpenseItems from './ExpenseItems'
function expenses(props){
    return(
        <div className = 'expenses'>
            {
                props.expense.map(expense => (
                <ExpenseItems date = {expense.expenseDate} product = {expense.expenseProduct} amount = {expense.expenseAmount}></ExpenseItems>
            ))}
        </div>
    )  
}

export default expenses;