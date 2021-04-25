import React, {useState} from 'react'
import './NewExpense.css'
import NewExpenseForm from './NewExpenseForm'

const NewExpense = (props) =>{
    const [isEditing, isSetEdit] = useState(false)
    const onSaveExpenseData = (enterExpenseData) => {
        const expenseData = {
            ...enterExpenseData,
            id: Math.random().toString()
        }
        props.saveExpenseData(expenseData)
    }
    const onClickHandler = () => {
        isSetEdit(true)
        //expenseForm = <NewExpenseForm saveExpenseData = {onSaveExpenseData} ></NewExpenseForm>
    }
    const onStopEditing = () => {
        isSetEdit(false)
    }

    return(
        <div className="new-expense">
            {!isEditing && <button onClick={onClickHandler} className = ".new-expense__action">Add New Expense</button>}
            {isEditing && <NewExpenseForm saveExpenseData = {onSaveExpenseData} stopEditing = {onStopEditing}></NewExpenseForm>}
        </div>
    )
}

export default NewExpense;