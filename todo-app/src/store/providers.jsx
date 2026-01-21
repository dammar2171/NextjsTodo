"use client";
import AuthContextProvider from "../store/AuthContext";
import StoreContextProvider from "./StoreContext";
import { ToastProvider } from "./ToastContext";
const Provider = ({ children }) => {
  return (
    <StoreContextProvider>
      <AuthContextProvider>
        <ToastProvider>{children}</ToastProvider>
      </AuthContextProvider>
    </StoreContextProvider>
  );
};
export default Provider;
