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
            product : enteredProduct,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }

        props.saveExpenseData(ExpenseData)
        setEnteredProduct('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <div className = "new-expense__controls">
                <div className = "new-expense__control">
                    <label className>Product</label>
                    <input type="text" value={enteredProduct} onChange={onChangeHanlderProduct}></input>
                </div>
                <div className = "new-expense__control">
                    <label className>Amount</label>
                    <input type="number" value={enteredAmount} min="0" onChange={onChangeHanlderAmount}></input>
                </div>
                <div className = "new-expense__control">
                    <label className>Date</label>
                    <input type="date" value={enteredDate} onChange = {onChangeHanlderDate}></input>
                </div>
            </div>
            <div className = "new-expense__actions">
                <button type="submit"> Add Expense </button>
            </div>
        </form>
    )
}

export default NewExpenseForm;