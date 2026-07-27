import { useState } from "react";
import { useExpense } from "../context/ExpenseContext";
import { v4 as uuid } from "uuid";
import '../styles/ExpenseTracker.css';

export function TransactionForm() {
  const { dispatch } = useExpense();

  const [form, setForm] = useState({
    description: "",
    amount: "",
    date: "",
    category: "Income"
  });

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "ADD",
      payload: {
        ...form,
        amount: Number(form.amount),
        id: uuid()
      }
    });

    setForm({ description: "", amount: "", date: "", category: "Income" });
  }

  return (
    <form onSubmit={handleSubmit} className="form">
<input
  placeholder="Description"
  value={form.description}
  onChange={e => setForm({ ...form, description: e.target.value })}
/>
<input
  type="number"
  placeholder="Amount"
  value={form.amount}
  onChange={e => setForm({ ...form, amount: e.target.value })}
/>
<input
  type="date"
  value={form.date}
  onChange={e => setForm({ ...form, date: e.target.value })}
/>
<select
  value={form.category}
  onChange={e => setForm({ ...form, category: e.target.value })}
>
  <option>Income</option>
  <option>Expense</option>
</select>
      <button>Add Transaction</button>
    </form>
  );
}
