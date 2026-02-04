import { colors } from '@mui/material';
import '../styles/ExpenseTracker.css';
export function ShowBalance({transactionList}){
        const income  = transactionList.filter(item => item.category === "Income").reduce((total, item) => total + Number(item.amount), 0);
        const expense  = transactionList.filter(item => item.category === "Expense").reduce((total, item) => total + Number(item.amount),0);
        const balance = income - expense;

    return(
        <div className="showBalance">
            <h1>Expense Tracker</h1>
            <h3>Balance: ${balance}.00</h3>
            <span>
            <p>Income: <p style={{color:"green"}}>${income}.00</p></p>
            <p>Expense: <p style={{color:"red"}}>${expense}.00</p> </p>
            </span>
        </div>
    );
}