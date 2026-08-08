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
  href,
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

  const content = (
    <>
      {startIcon && (
        <span className="btn__icon btn__icon--start">{startIcon}</span>
      )}

      <span className="btn__label">{children}</span>

      {endIcon && <span className="btn__icon btn__icon--end">{endIcon}</span>}
    </>
  );

  /* Render a real anchor when given an href. Wrapping this component in a link
     instead would nest a <button> inside an <a>, which is invalid markup and
     confuses keyboard and assistive-tech navigation. For client-side route
     changes keep using <Link>; href is for in-page anchors and external URLs. */
  if (href) {
    return (
      <a href={href} className={classes} aria-disabled={disabled} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {content}
    </button>
  );
};

export default Button;
