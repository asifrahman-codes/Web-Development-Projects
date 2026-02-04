import '../styles/ExpenseTracker.css';
export function AddDetails({onChange, formData, onSubmit}){
    return(
        <div className="addDetails">
            <form onSubmit={onSubmit}>
                <input name = "description" value={formData.description} placeholder="Description" onChange={onChange}/>
                <input name = "amount" type="number" placeholder="Amount" value={formData.amount} onChange={onChange}/>
                <input name="date" type="date" placeholder="dd-mm-yyyy" onChange={onChange}/>
            <select name="category" value={formData.date} onChange={onChange}>
                    <option>Expense</option>
                    <option>Income</option>
                </select>
                <button type='submit'>Add Transaction</button>
            </form>
        </div>
    )
}