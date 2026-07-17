import "./Container.css";

const Container = ({
  children,
  className = "",
  as: Component = "div",
  ...props
}) => {
  return (
    <Component className={`container ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
};

export default Container;
