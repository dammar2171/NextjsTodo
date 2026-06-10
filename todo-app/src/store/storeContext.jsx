"use client";
import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";

export const StoreContext = createContext();

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "SET_EXPENSE":
      return action.payload.expense;
    case "DELETE_EXPENSE":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
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

  const handleDeleteExpense = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `http://localhost:5000/expense/deleteExpense/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.status == 200) {
        console.log("Expense deleted successfully!");
        dispatch({
          type: "DELETE_EXPENSE",
          payload: {
            id,
          },
        });
      }
    } catch (error) {
      console.log("DELETION_ERROR: ", error);
    }
  };

  return (
    <StoreContext.Provider
      value={{ expenseLoading, expense, handleDeleteExpense }}
    >
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
