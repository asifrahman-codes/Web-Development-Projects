import { AccountSummary } from "../components/AccountSummary";
import { TransactionForm } from "../components/TransactionForm";
import { TransactionList } from "../components/TransactionList";
import { useExpense } from "../context/ExpenseContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function ExpenseTracker() {
  const { state } = useExpense();

  useLocalStorage("transactions", state.transactions);

  return (
    <div className="ExpenseTracker">
      <AccountSummary />
      <TransactionForm />
      <TransactionList transactions={state.transactions} />
    </div>
  );
}
