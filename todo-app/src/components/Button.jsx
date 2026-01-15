function Button({ children, onClick, className = "", disabled = false }) {
  const baseStyle = "px-4 py-2 rounded-lg text-white";
  const buttonType = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    danger: "bg-danger",
    warning: "bg-warning",
    info: "bg-info",
  };
  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${className} ${buttonType[type]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
