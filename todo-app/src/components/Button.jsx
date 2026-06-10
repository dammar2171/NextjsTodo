function Button({
  children,
  onClick,
  type = "primary",
  className = "",
  disabled = false,
}) {
  const baseStyle = "px-4 py-2 rounded-lg text-white";
  const buttonType = {
    primary: "bg-blue-500",
    secondary: "bg-gray-500",
    danger: "bg-red-600",
    warning: "bg-yellow-400",
    info: "bg-cyan-500",
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
