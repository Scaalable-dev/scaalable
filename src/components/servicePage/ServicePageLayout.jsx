import "./ServicePage.css";

const ServicePageLayout = ({ children, className = "" }) => (
  <div className={`sp-page ${className}`.trim()}>{children}</div>
);

export default ServicePageLayout;
