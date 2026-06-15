import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Animated number that counts up once when scrolled into view (reduced-motion → instant).
export default function CountUp({ to, suffix = "", prefix = "", dur = 1.4, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(to);
      return;
    }
    let raf, start;
    const ms = dur * 1000;
    const tick = (t) => {
      start ??= t;
      const p = Math.min((t - start) / ms, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, dur]);

  const display = decimals
    ? val.toFixed(decimals)
    : Math.round(val).toLocaleString("en-CA");
  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
