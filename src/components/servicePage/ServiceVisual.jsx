const ServiceVisual = ({ label = "Scaalable", children, orbits, className = "", labelledBy }) => (
  <div
    className={`sp-visual ${className}`.trim()}
    aria-hidden={labelledBy ? undefined : true}
    aria-label={labelledBy}
  >
    <div className="sp-visual__frame">
      <div className="sp-visual__chrome">
        <i />
        <i />
        <i />
        <span>{label}</span>
      </div>
      <div className="sp-visual__canvas">{children}</div>
    </div>
    {orbits}
  </div>
);

export default ServiceVisual;
