import "./Button.css";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  className = "",
  ...props
}) => {
  const classes = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && "btn--full",
    disabled && "btn--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {startIcon && (
        <span className="btn__icon btn__icon--start">{startIcon}</span>
      )}

      <span className="btn__label">{children}</span>

      {endIcon && <span className="btn__icon btn__icon--end">{endIcon}</span>}
    </button>
  );
};

export default Button;
