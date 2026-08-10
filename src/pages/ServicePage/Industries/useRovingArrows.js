import { useRef } from "react";

/* Shared by the desktop grid and the mobile carousel: arrow keys move focus
   only, Enter and Space still do the selecting — which is how a group of
   toggle buttons is expected to behave. `columns` is the visual row width, so
   Up and Down step by a row rather than by one.

   `onMove` runs before focus lands, which the carousel uses to page across to
   whichever button is about to receive it — otherwise arrowing off the edge
   of a page would focus a button scrolled out of sight. */
const useRovingArrows = (count, columns, onMove) => {
  const refs = useRef([]);

  const handleKeyDown = (index) => (event) => {
    const last = count - 1;
    let next = null;

    if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    else if (event.key === "ArrowDown") next = Math.min(index + columns, last);
    else if (event.key === "ArrowUp") next = Math.max(index - columns, 0);
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;

    if (next === null) return;

    event.preventDefault();

    onMove?.(next);

    refs.current[next]?.focus();
  };

  return { refs, handleKeyDown };
};

export default useRovingArrows;
