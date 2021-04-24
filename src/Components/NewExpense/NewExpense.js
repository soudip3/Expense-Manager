import './NewExpense.css'
import NewExpenseForm from './NewExpenseForm'

const NewExpense = (props) =>{

    const onSaveExpenseData = (enterExpenseData) => {
        const expenseData = {
            ...enterExpenseData,
            id: Math.random().toString()
        }
        props.saveExpenseData(expenseData)
    }

    return(
        <div className="new-expense">
            <NewExpenseForm saveExpenseData = {onSaveExpenseData} ></NewExpenseForm>
        </div>
    )
}

export default NewExpense;