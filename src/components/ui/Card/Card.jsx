import "./Card.css";

const Card = ({
  children,
  className = "",
  hover = false,
  padding = "md",
  ...props
}) => {
  const classes = [
    "card",
    `card--${padding}`,
    hover && "card--hover",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={classes} {...props}>
      {children}
    </article>
  );
};

export default Card;
