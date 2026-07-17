import "./Input.css";

const Input = ({ label, id, error, className = "", ...props }) => {
  return (
    <div className={`input-group ${className}`.trim()}>
      {label && (
        <label htmlFor={id} className="input-group__label">
          {label}
        </label>
      )}

      <input
        id={id}
        className={`input ${error ? "input--error" : ""}`}
        {...props}
      />

      {error && <span className="input-group__error">{error}</span>}
    </div>
  );
};

export default Input;
