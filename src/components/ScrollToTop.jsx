import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll position on navigation.
 *
 * Fixes two separate browser behaviours:
 *
 * 1. Reload — browsers restore the previous scroll offset by default, so
 *    refreshing halfway down a page leaves you halfway down. Opting out of
 *    `scrollRestoration` makes a refresh start at the top.
 *
 * 2. Route change — a single-page app never reloads the document, so the
 *    window keeps its old offset when the route swaps. Clicking a nav link
 *    from halfway down would otherwise drop you halfway down the next page.
 *
 * Hash links (`#faq`) are left alone and scrolled to instead, so in-page
 * anchors keep working. The global `scroll-margin-top` on sections handles
 * clearing the sticky header.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  /* Null on first mount, so a direct load of `/contact#contact-form` counts as
     arriving on a new page rather than as an in-page jump. */
  const previousPath = useRef(null);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    const changedPage = previousPath.current !== pathname;
    previousPath.current = pathname;

    if (hash) {
      const target = document.querySelector(hash);

      if (target) {
        /* Smooth within a page, instant when the page itself just changed:
           animating from the top of a freshly mounted page all the way down to
           a deep section reads as a runaway scroll, and takes long enough that
           the destination is not obviously connected to the click. */
        const scrollToTarget = () =>
          target.scrollIntoView({
            behavior: changedPage ? "instant" : "smooth",
            block: "start",
          });

        scrollToTarget();

        /* Re-assert after layout settles — the incoming page's own height is
           not final on the first pass, so the first landing can be short. */
        const frame = requestAnimationFrame(scrollToTarget);

        return () => cancelAnimationFrame(frame);
      }
    }

    /* Instant, not smooth — animating a long scroll while the next page
       renders reads as a glitch. Overrides html { scroll-behavior: smooth }. */
    const toTop = () =>
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    toTop();

    /* Re-assert once the browser has laid out the incoming page. Resetting
       during commit alone leaves a small residual offset, because the outgoing
       page's height is still in effect when the first call runs. */
    const frame = requestAnimationFrame(toTop);

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
