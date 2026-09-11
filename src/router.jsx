import { useEffect, useState } from "react";

// A very small client-side router — enough for two pages, no dependency.
// Reads window.location.pathname, re-renders on back/forward, and turns
// same-origin <a href="/..."> clicks into pushState navigations so the
// page doesn't reload. Hash links and mailto: are left alone.
export function useRoute() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest("a[href]");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return; // hash-only or same page
      e.preventDefault();
      window.history.pushState({}, "", url.pathname + url.search + url.hash);
      setPath(url.pathname);
      if (url.hash) {
        // let the new page render, then jump to the anchor
        requestAnimationFrame(() => {
          document.getElementById(url.hash.slice(1))?.scrollIntoView();
        });
      } else {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener("popstate", onPop);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("popstate", onPop);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return path.replace(/\/+$/, "") || "/";
}
