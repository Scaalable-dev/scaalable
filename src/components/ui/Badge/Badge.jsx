import { Sparkles } from "lucide-react";
import "./Badge.css";

const Badge = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon = true,
  ...props
}) => {
  const classes = ["badge", `badge--${variant}`, `badge--${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...props}>
      {icon && <Sparkles className="badge__icon" size={14} />}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
