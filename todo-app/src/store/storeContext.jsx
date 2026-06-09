"use client";
import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";

export const StoreContext = createContext();

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "SET_EXPENSE":
      return action.payload.expense;
  }
};

const StoreContextProvider = ({ children }) => {
  const [expense, dispatch] = useReducer(expenseReducer, []);
  const [expenseLoading, setExpenseLoading] = useState(false);

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        setExpenseLoading(true);
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:5000/expense/fetchExpense",
          {
            headers: { Authorization: `Bearere ${token}` },
          },
        );

        if (response.status == "200") {
          dispatch({
            type: "SET_EXPENSE",
            payload: {
              expense: response.data.data,
            },
          });
          setExpenseLoading(false);
        }
      } catch (error) {
        console.log("FETCHING_ERROR: ", error);
      }
    };
    fetchExpense();
  }, []);

  return (
    <StoreContext.Provider value={{ expenseLoading, expense }}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
