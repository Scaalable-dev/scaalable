import { useEffect, useLayoutEffect } from "react";
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

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return undefined;
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
