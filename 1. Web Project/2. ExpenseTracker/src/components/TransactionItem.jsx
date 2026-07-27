import { useExpense } from "../context/ExpenseContext";
import '../styles/ExpenseTracker.css';

export function TransactionItem({ transaction }) {
  const { dispatch } = useExpense();

  return (
    <li className={transaction.category === "Income" ? "plus" : "minus"}>
      <div>
        <strong>{transaction.description}</strong>
        <small>{transaction.date}</small>
      </div>

      <span>
        {transaction.category === "Income" ? "+" : "-"}$
        {transaction.amount}
      </span>

      <button
      className="remove"
        onClick={() =>
          dispatch({ type: "DELETE", payload: transaction.id })
        }
      >
        Remove
      </button>
    </li>
  );
}
