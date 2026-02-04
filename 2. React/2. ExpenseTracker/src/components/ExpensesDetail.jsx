import '../styles/ExpenseTracker.css';
export function ExpensesDetail({transactionList, removeBtn}){
    return (
        <div className="detail"> 
            <ul>
                {transactionList.map((p, index) => (
                    <li key={index} className={`transaction-item ${p.category === 'Income' ? 'income-border' : 'expense-border'}`}>
                        <div>
                            <strong>{p.description}</strong> - ${p.amount}
                            <div style={{fontSize: '12px', color: '#888'}}>{p.date}</div>
                        </div>
                        <button className="del-btn" onClick={() => removeBtn(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}