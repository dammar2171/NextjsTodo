import storeContextProvider from "./storeContext";
import { ToastProvider } from "./toastContext";
const Provider = ({ children }) => {
  return (
    <storeContextProvider>
      <ToastProvider>{children}</ToastProvider>
    </storeContextProvider>
  );
};
export default Provider;
