"use client";
import { createContext, useReducer } from "react";

export const storeContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
  }
};

const storeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return <storeContext.Provider value={{}}>{children}</storeContext.Provider>;
};
export default storeContextProvider;
