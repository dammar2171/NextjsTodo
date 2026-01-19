"use client";
import React, { createContext, useContext, useState } from "react";
import Toast from "../components/Toast";

const toastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <toastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed top-4 right-4 z-50">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </toastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(toastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
}
