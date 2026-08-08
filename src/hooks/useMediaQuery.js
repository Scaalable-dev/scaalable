import { useCallback, useSyncExternalStore } from "react";

/* One MediaQueryList per query for the lifetime of the module. Creating one
   per render would allocate a new object on every snapshot read, which
   useSyncExternalStore treats as a changed value. */
const cache = new Map();

const getList = (query) => {
  let list = cache.get(query);

  if (!list) {
    list = window.matchMedia(query);
    cache.set(query, list);
  }

  return list;
};

/* Reads a media query without setting state in an effect: the store is
   subscribed to directly and re-read on every render, so there is never a
   first paint at the wrong breakpoint. */
const useMediaQuery = (query) => {
  const subscribe = useCallback(
    (onChange) => {
      const list = getList(query);

      list.addEventListener("change", onChange);

      return () => list.removeEventListener("change", onChange);
    },
    [query],
  );

  const getSnapshot = useCallback(() => getList(query).matches, [query]);

  return useSyncExternalStore(subscribe, getSnapshot);
};

export default useMediaQuery;
