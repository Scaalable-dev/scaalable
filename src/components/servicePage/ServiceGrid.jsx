const ServiceGrid = ({ children, columns = 4 }) => (
  <div className={columns === 3 ? "sp-grid sp-grid--3" : "sp-grid"}>{children}</div>
);

export default ServiceGrid;
