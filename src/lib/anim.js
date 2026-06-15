// Shared Framer Motion config — easings + variants.
// Eases mirror the Sequoia Animation-Spec tokens.
export const EASE = [0.22, 1, 0.36, 1]; // --ease-out-soft
export const EASE_WATCH = [0.16, 1, 0.3, 1]; // slow, authoritative

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const child = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// smooth-scroll to an element id via Lenis (falls back to native)
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -10 });
  else el.scrollIntoView({ behavior: "smooth" });
}
