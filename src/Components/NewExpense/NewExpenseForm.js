import React, {useState} from 'react';
import './NewExpenseForm.css'

const NewExpenseForm = (props) => {

    const [enteredProduct, setEnteredProduct] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredProduct : '',
    //     enteredAmount : '',
    //     enteredDate = ''
    // });
    const onChangeHanlderProduct = (event) => {
        setEnteredProduct(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredProduct : event.target.value
        // })
        // setUserInput((prevState) => {
        //     return { prevState, enteredProduct : event.target.value}
        // })
    }
    const onChangeHanlderAmount = (event) =>{
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value
        // })
    }
    const onChangeHanlderDate = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value
        // })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const ExpenseData = {
            expenseProduct : enteredProduct,
            expenseAmount : +enteredAmount,
            expenseDate : new Date(enteredDate),
            id: Math.random().toString()
        }

        props.saveExpenseData(ExpenseData)
        setEnteredProduct('')
        setEnteredAmount('')
        setEnteredDate('')
        props.stopEditing()
    }

    const onClickHandler = () => {
        props.stopEditing()
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <div className = "new-expense__controls">
                <div className = "new-expense__control">
                    <label className>Product</label>
                    <input type="text" required value={enteredProduct} onChange={onChangeHanlderProduct}></input>
                </div>
                <div className = "new-expense__control">
                    <label className>Amount</label>
                    <input type="number" required value={enteredAmount} onChange={onChangeHanlderAmount}></input>
                </div>
                <div className = "new-expense__control">
                    <label className>Date</label>
                    <input type="date" required value={enteredDate} onChange = {onChangeHanlderDate}></input>
                </div>
            </div>
            <div className = "new-expense__actions">
                <button type="button" onClick={onClickHandler}>Cancel</button>
                <button type="submit"> Add Expense </button>
            </div>
        </form>
    )
}

export default NewExpenseForm;