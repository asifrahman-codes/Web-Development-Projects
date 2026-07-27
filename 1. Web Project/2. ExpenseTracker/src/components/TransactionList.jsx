import React from "react";
import { TransactionItem } from "./TransactionItem";
import '../styles/ExpenseTracker.css';

export function TransactionList({ transactions }) {
  if (!transactions.length) {
    return <p style={{ textAlign: "center" }}>No transactions yet</p>;
  }

  return (
    <div className="history-container">
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}
