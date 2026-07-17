import "./Textarea.css";

const Textarea = ({ label, id, error, rows = 5, className = "", ...props }) => {
  return (
    <div className={`textarea-group ${className}`.trim()}>
      {label && (
        <label htmlFor={id} className="textarea-group__label">
          {label}
        </label>
      )}

      <textarea
        id={id}
        rows={rows}
        className={`textarea ${error ? "textarea--error" : ""}`}
        {...props}
      />

      {error && <span className="textarea-group__error">{error}</span>}
    </div>
  );
};

export default Textarea;
