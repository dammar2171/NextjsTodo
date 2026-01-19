function Toast({ message, type = "info", onClose, className = "" }) {
  const baseStyle =
    "p-4 rounded-lg text-white flex justify-between items-center gap-2";
  const toastType = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  };
  return (
    <div className={`${baseStyle} ${toastType[type]} ${className}`}>
      <p>{message}</p>
      <button onClick={onClose}>X</button>
    </div>
  );
}

export default Toast;
