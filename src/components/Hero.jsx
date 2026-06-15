import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import SplitText from "./SplitText";
import { EASE } from "../lib/anim";

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

// `ready` is flipped true when the loader finishes → gates the hero reveal.
export default function Hero({ ready }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const item = {
    hidden: { opacity: 0, y: 22 },
    show: (d) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease: EASE } }),
  };

  return (
    <section className="hero" ref={ref}>
      <div className="hero-bg">
        <motion.img
          src="/assets/img/ls-31.png"
          alt="Cyclist with an e-bike overlooking Okanagan Lake near Kelowna"
          style={reduce ? undefined : { y, scale: 1.08 }}
          fetchpriority="high"
        />
      </div>
      <motion.div className="wrap" style={reduce ? undefined : { opacity: fade }}>
        <motion.span className="eyebrow on-dark" variants={item} custom={0} initial="hidden" animate={ready ? "show" : "hidden"}>
          Kelowna · Okanagan Valley, BC
        </motion.span>
        <h1>
          <SplitText text="See the Okanagan the way it was meant to be seen." start={ready} stagger={0.07} duration={0.95} />
        </h1>
        <motion.p variants={item} custom={0.5} initial="hidden" animate={ready ? "show" : "hidden"}>
          Guided electric-assist bike, wine, and adventure tours. All the lake, vineyards and canyon trestles, with none of the sweat. Powered by the planet, guided by locals.
        </motion.p>
        <motion.div className="hero-actions" variants={item} custom={0.7} initial="hidden" animate={ready ? "show" : "hidden"}>
          <Link className="btn btn-primary" to="/wine-tour">Book your tour <Arrow /></Link>
          <Link className="btn btn-ghost" to="/experiences">Browse experiences</Link>
          <span className="rating-chip"><span className="stars">★★★★★</span> 5.0 · 300+ Google reviews</span>
        </motion.div>
      </motion.div>
      <motion.div className="scroll-cue" initial={{ opacity: 0 }} animate={{ opacity: ready ? 1 : 0 }} transition={{ delay: 1, duration: 0.6 }}>
        Scroll<span className="dot"></span>
      </motion.div>
    </section>
  );
}
