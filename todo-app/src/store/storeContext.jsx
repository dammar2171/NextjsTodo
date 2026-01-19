"use client";
import { createContext, useReducer } from "react";

export const StoreContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
  }
};

const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return <StoreContext.Provider value={{}}>{children}</StoreContext.Provider>;
};
export default StoreContextProvider;
