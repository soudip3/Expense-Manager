import React, {useState} from 'react';
import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate'
import Card from '../Card/Card'
const ExpenseItems = props => {

    const [product, setProduct] = useState(props.product)

    const onClickHandler = () =>{
        setProduct('Toilet')
    }

    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{product}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick = {onClickHandler}>Change Product name</button>
        </Card>
    )
}

export default ExpenseItems;