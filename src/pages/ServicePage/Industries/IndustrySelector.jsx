import { useLayoutEffect, useRef, useState } from "react";

import useRovingArrows from "./useRovingArrows";

/* Matches the CSS grid so Up/Down move by a visual row rather than by one. */
const DESKTOP_COLUMNS = 5;

const IndustrySelector = ({ industries, activeIndex, onSelect }) => {
  const { refs, handleKeyDown } = useRovingArrows(
    industries.length,
    DESKTOP_COLUMNS,
  );

  const gridRef = useRef(null);
  const [box, setBox] = useState(null);

  /* One outline travels between buttons instead of each button drawing its
     own. It has to be measured — CSS cannot know where a grid cell landed —
     so the active button's offset box is read after layout and fed to a
     transform. The observer keeps it aligned through resizes and font swaps,
     which is when the grid actually reflows. */
  useLayoutEffect(() => {
    const measure = () => {
      const button = refs.current[activeIndex];

      if (!button) return;

      setBox({
        x: button.offsetLeft,
        y: button.offsetTop,
        width: button.offsetWidth,
        height: button.offsetHeight,
      });
    };

    measure();

    const grid = gridRef.current;
    if (!grid) return undefined;

    const observer = new ResizeObserver(measure);
    observer.observe(grid);

    return () => observer.disconnect();
  }, [activeIndex, refs]);

  return (
    <div
      className="ind-pick"
      ref={gridRef}
      role="group"
      aria-label="Choose an industry"
    >
      <span
        className="ind-pick__indicator"
        aria-hidden="true"
        style={
          box
            ? {
                width: `${box.width}px`,
                height: `${box.height}px`,
                transform: `translate(${box.x}px, ${box.y}px)`,
                opacity: 1,
              }
            : undefined
        }
      />

      {industries.map((industry, i) => (
        <button
          type="button"
          className="ind-pick__button"
          key={industry.id}
          ref={(el) => {
            refs.current[i] = el;
          }}
          aria-pressed={i === activeIndex}
          onClick={() => onSelect(i)}
          onKeyDown={handleKeyDown(i)}
        >
          <span className="ind-pick__shimmer" aria-hidden="true" />

          {industry.name}
        </button>
      ))}
    </div>
  );
};

export default IndustrySelector;
