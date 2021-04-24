import React, { useState } from 'react';
import './App.css';
import Expenses from './Components/Expenses/Expenses'
import NewExpense from './Components/NewExpense/NewExpense'
const DUMMY_EXPENSES = [
  {
    id : 1,
    expenseDate : new Date(2020,2,27),
    expenseProduct : 'Laptop',
    expenseAmount : '999.00'
  },
  {
    id : 2,
    expenseDate : new Date(2021,1,27),
    expenseProduct : 'PC',
    expenseAmount : '449.00'
  }
]


const App = () => {

  const [expenses, setExpensesData] = useState(DUMMY_EXPENSES)

  const saveExpense = (expenseData) => {
    setExpensesData((prevExpenses)=>{
      return ([...prevExpenses,expenseData])
    })
  }

  return (
    <div className="App">
      <h1>This is First React Project</h1>
      <NewExpense saveExpenseData = {saveExpense}></NewExpense>
      <Expenses expense = {expenses} ></Expenses>
    </div>
  );
}

export default App;
