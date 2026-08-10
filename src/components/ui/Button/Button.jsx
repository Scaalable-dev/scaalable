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
  as: Component,
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

  /* `as` lets the button render as another element — most usefully react-router's
     <Link> for client-side routes: <Button as={Link} to="/contact">. Wrapping
     this component in a link instead would nest a <button> inside an <a>, which
     is invalid markup and confuses keyboard and assistive-tech navigation. */
  if (Component) {
    return (
      <Component className={classes} {...props}>
        {content}
      </Component>
    );
  }

  /* Plain href renders a real anchor — for in-page anchors and external URLs. */
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
