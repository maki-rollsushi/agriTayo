import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToHash
 *
 * React component that scrolls smoothly to an element on the page
 * when a hash (e.g. #about, #marketplace) is present in the URL.
 * It uses `useLocation` to detect hash changes on route updates.
 *
 * This is useful for single-page apps with internal section links.
 *
 * Note: This component does not render any UI.
 */

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null; // no UI
}

export default ScrollToHash;
