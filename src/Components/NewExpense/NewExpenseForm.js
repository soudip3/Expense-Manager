import './NewExpenseForm.css'

const NewExpenseForm = () => {
    return(
        <form>
            <div className = "new-expense__controls">
                <div className = "new-expense__control">
                    <label className>Product</label>
                    <input type="text"></input>
                </div>
                <div className = "new-expense__control">
                    <label className>Amount</label>
                    <input type="number" min="0.1"></input>
                </div>
                <div className = "new-expense__control">
                    <label className>Date</label>
                    <input type="date"></input>
                </div>
            </div>
            <div className = "new-expense__actions">
                <button type="submit"> Add Expense </button>
            </div>
        </form>
    )
}

export default NewExpenseForm;