"use client";
import StoreContextProvider from "./StoreContext";
import { ToastProvider } from "./ToastContext";
const Provider = ({ children }) => {
  return (
    <StoreContextProvider>
      <ToastProvider>{children}</ToastProvider>
    </StoreContextProvider>
  );
};
export default Provider;
