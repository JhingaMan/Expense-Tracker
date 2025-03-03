import React, { Children, createContext, useContext, useReducer } from "react";

const GlobalContext = createContext();

const initialState = {
  all_transactions: [],
  income: "",
  expense: "",
  balance: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "setTransaction":
      const transactions = action.payload;
      const totals = transactions.reduce(
        (acc, transaction) => {
          if (transaction.type === "income") acc.income += transaction.amount;
          else if (transaction.type === "expense")
            acc.expense += transaction.amount;

          return acc;
        },
        { income: 0, expense: 0 }
      );
      return {
        all_transactions: transactions,
        income: totals.income.toFixed(2),
        expense: totals.expense.toFixed(2),
        balance: (totals.income - totals.expense).toFixed(2),
      };

    default:
      return state;
  }
}

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { all_transactions, income, expense, balance } = state;

  async function loadTransactionData() {
    try {
      const response = await fetch(
        "http://localhost:5000/transaction/get-user-transaction",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await response.json();
      const { success, transaction } = data;
      console.log(transaction);
      dispatch({ type: "setTransaction", payload: transaction });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        loadTransactionData,
        all_transactions,
        income,
        expense,
        balance,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}

export { GlobalProvider, useGlobalContext };
