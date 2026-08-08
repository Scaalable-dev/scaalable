import { memo, useRef } from "react";

/* Ceiling on the magnetic response, in pixels per axis. Deliberately small —
   it should register as the button acknowledging the cursor, not as movement. */
const MAGNET_MAX = 3;

const TechnologyToolButton = ({
  tool,
  index,
  discipline,
  isSelected,
  magnetic,
  onSelect,
}) => {
  const wrapRef = useRef(null);
  const frame = useRef(0);

  /* Measured once as the cursor arrives rather than on every move: the button
     cannot change size while being hovered, so re-reading its box each frame
     would be a layout read for an answer already known. */
  const bounds = useRef(null);

  const reset = () => {
    cancelAnimationFrame(frame.current);
    bounds.current = null;

    const wrap = wrapRef.current;
    if (!wrap) return;

    wrap.style.setProperty("--mx", "0px");
    wrap.style.setProperty("--my", "0px");
  };

  const handleEnter = (event) => {
    if (!magnetic || event.pointerType !== "mouse") return;

    bounds.current = wrapRef.current?.getBoundingClientRect() ?? null;
  };

  /* Written straight to the element rather than through state: a pointermove
     that re-rendered would run React on every mouse frame, for every button
     in the open drawer, for a purely visual effect. */
  const handleMove = (event) => {
    const box = bounds.current;
    const wrap = wrapRef.current;

    if (!magnetic || !box || !wrap) return;

    const x = (event.clientX - (box.left + box.width / 2)) / (box.width / 2);
    const y = (event.clientY - (box.top + box.height / 2)) / (box.height / 2);

    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      wrap.style.setProperty("--mx", `${(x * MAGNET_MAX).toFixed(2)}px`);
      wrap.style.setProperty("--my", `${(y * MAGNET_MAX).toFixed(2)}px`);
    });
  };

  return (
    <li
      className="tech-tool"
      ref={wrapRef}
      style={{ "--i": index }}
      onPointerEnter={handleEnter}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      <button
        type="button"
        className="tech-tool__button"
        aria-pressed={isSelected}
        aria-label={`${tool}, in ${discipline}`}
        onClick={() => onSelect(tool)}
      >
        {tool}
      </button>
    </li>
  );
};

/* Every tool in a nine-discipline library is mounted at once. Without this,
   opening a row would re-render all of them. */
export default memo(TechnologyToolButton);
