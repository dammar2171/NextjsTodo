import { useState } from "react";
import Toast from "./Toast";
function ToastContainer({ className = "" }) {
  const baseStyle = "fixed top-4 right-4 z-50";
  const [toast, setToast] = useState([]);
  const addToast = (message, type = "info") => {
    const id = Date.now();
    setToast((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToast((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };
  const removeToast = (id) => {
    setToast((prev) => prev.filter((t) => t.id !== id));
  };
  return (
    <div className={`${baseStyle} ${className}`}>
      {toast.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
}

export default ToastContainer;
