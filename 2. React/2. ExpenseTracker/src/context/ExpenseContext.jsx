import { createContext, useContext, useReducer } from "react";

const ExpenseContext = createContext();

const savedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];

const initialState = {
  transactions: savedTransactions
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { transactions: [...state.transactions, action.payload] };

    case "DELETE":
      return {
        transactions: state.transactions.filter(
          t => t.id !== action.payload
        )
      };

    default:
      return state;
  }
}

export function ExpenseProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpense() {
  return useContext(ExpenseContext);
}
