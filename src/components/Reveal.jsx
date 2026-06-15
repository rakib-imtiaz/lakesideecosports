import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "../lib/anim";

// Scroll-reveal wrapper: fade + rise once on enter. Reduced-motion → static.
export default function Reveal({
  children,
  y = 26,
  delay = 0,
  amount = 0.2,
  className,
  style,
  as = "div",
  ...rest
}) {
  const reduce = useReducedMotion();
  const M = motion[as] || motion.div;
  if (reduce)
    return (
      <M className={className} style={style} {...rest}>
        {children}
      </M>
    );
  return (
    <M
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </M>
  );
}
