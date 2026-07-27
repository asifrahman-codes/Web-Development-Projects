import { useExpense } from "../context/ExpenseContext";
import '../styles/ExpenseTracker.css';

export function AccountSummary() {
  const { state } = useExpense();

  const income = state.transactions
    .filter(t => t.category === "Income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = state.transactions
    .filter(t => t.category === "Expense")
    .reduce((a, b) => a + b.amount, 0);

  return (
    <>
      <h1>Expense Tracker Insight</h1>
      <h2>Balance: ${income - expense}</h2>
      <p>Income: ${income}</p>
      <p>Expense: ${expense}</p>
    </>
  );
}
