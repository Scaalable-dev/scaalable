const pad = (value) => String(value).padStart(2, "0");

const SelectedIndustryCard = ({ industry, position, total }) => {
  const Icon = industry.icon;

  return (
    <div className="indm-card">
      {/* Both are keyed so their one-shot animations replay on every change:
          a highlight crossing the card and a brief lift in border brightness. */}
      <span className="indm-card__scan" key={`scan-${industry.id}`} aria-hidden="true" />
      <span className="indm-card__flash" key={`flash-${industry.id}`} aria-hidden="true" />

      <div className="indm-card__body" key={industry.id}>
        <div className="indm-card__head">
          <span className="indm-card__mark">
            <Icon size={18} strokeWidth={1.9} aria-hidden="true" />
          </span>

          <span className="indm-card__meta">
            <span className="indm-card__label">Selected Industry</span>

            <span className="indm-card__counter">
              {pad(position)} <i>/</i> {pad(total)}
            </span>
          </span>

          <span className="indm-card__status">Active</span>
        </div>

        <h3 className="indm-card__name">{industry.name}</h3>

        <p className="indm-card__description">{industry.description}</p>
      </div>
    </div>
  );
};

export default SelectedIndustryCard;
