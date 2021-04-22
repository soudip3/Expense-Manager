import './App.css';
import Expenses from './Components/Expenses'
const expenses = [
  {
    id : 1,
    expenseDate : new Date(2021,2,27),
    expenseProduct : 'Laptop',
    expenseAmount : '$999.00'
  },
  {
    id : 2,
    expenseDate : new Date(2021,1,27),
    expenseProduct : 'PC',
    expenseAmount : '$449.00'
  }
]
  

function App() {
  return (
    <div className="App">
      <h1>This is First React Project</h1>
      <Expenses expense = {expenses}></Expenses>
    </div>
  );
}

export default App;
