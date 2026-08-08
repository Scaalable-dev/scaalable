import "./Select.css";

const Select = ({
  label,
  id,
  error,
  options = [],
  placeholder = "Select an option",
  className = "",
  ...props
}) => {
  return (
    <div className={`select-group ${className}`.trim()}>
      {label && (
        <label htmlFor={id} className="select-group__label">
          {label}
        </label>
      )}

      <div className="select-group__control">
        <select
          id={id}
          className={`select ${error ? "select--error" : ""}`}
          defaultValue=""
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {error && <span className="select-group__error">{error}</span>}
    </div>
  );
};

export default Select;
