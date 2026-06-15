import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_WATCH } from "../lib/anim";

// Clip-mask word reveal: each word rides up from behind an overflow:hidden mask,
// staggered. If `start` is provided, it's gated on that boolean (used for the
// loader-gated hero); otherwise it plays when scrolled into view.
export default function SplitText({
  text,
  className,
  as = "span",
  stagger = 0.06,
  delay = 0,
  duration = 0.85,
  start,
}) {
  const reduce = useReducedMotion();
  const Tag = as;
  if (reduce) return <Tag className={className}>{text}</Tag>;

  const words = String(text).split(" ");
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const word = {
    hidden: { y: "115%" },
    show: { y: 0, transition: { duration, ease: EASE_WATCH } },
  };
  const Comp = motion[as] || motion.span;
  const gated = start !== undefined;
  const animProps = gated
    ? { animate: start ? "show" : "hidden" }
    : { whileInView: "show", viewport: { once: true, amount: 0.5 } };

  return (
    <Comp
      className={`split ${className || ""}`}
      variants={container}
      initial="hidden"
      {...animProps}
    >
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="word">
            <motion.span variants={word}>{w}</motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </Comp>
  );
}
