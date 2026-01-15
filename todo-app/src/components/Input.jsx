function Input({
  type = "input",
  placeholder = "",
  onChange,
  value,
  name,
  label,
  disabled = false,
  required = false,
  className = "",
}) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={`${name}`}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        disabled={disabled}
        required={required}
        className={className}
      />
    </div>
  );
}

export default Input;
