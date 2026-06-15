import { useEffect } from "react";
import Lenis from "lenis";

// Smooth scroll via Lenis, driven by a rAF loop. Disabled under reduced-motion.
// Exposes the instance on window.__lenis for anchor scrolling + scroll-lock.
export default function useLenis() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ smoothWheel: true, lerp: 0.1 });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);
}

export function lockScroll(lock) {
  document.documentElement.classList.toggle("no-scroll", lock);
  if (window.__lenis) lock ? window.__lenis.stop() : window.__lenis.start();
}
