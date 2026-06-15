import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE_WATCH } from "../lib/anim";

// Intro curtain: logo + filling progress bar, then slides up to reveal the hero.
export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dur = reduce ? 300 : 1500;
    let raf, start;
    const tick = (t) => {
      start ??= t;
      const p = Math.min((t - start) / dur, 1);
      setPct(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 180);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <motion.div
      className="loader"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.75, ease: EASE_WATCH }}
    >
      <motion.div
        className="mark"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_WATCH }}
      >
        <img src="/assets/img/logo.png" alt="" />
      </motion.div>
      <div className="word">Lakeside Eco Sports</div>
      <div className="track">
        <motion.div className="fill" style={{ scaleX: pct / 100 }} />
      </div>
      <div className="pct">{pct}%</div>
    </motion.div>
  );
}
