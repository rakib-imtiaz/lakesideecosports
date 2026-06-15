import { motion } from "framer-motion";
import SplitText from "./SplitText";
import { EASE } from "../lib/anim";

// Shorter page banner reused across the individual pages.
export default function PageHero({ eyebrow, title, sub, img, crumbs }) {
  return (
    <section className="tour-hero">
      <motion.img
        src={img}
        alt=""
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: EASE }}
        fetchpriority="high"
      />
      <div className="wrap">
        {crumbs && (
          <motion.div className="breadcrumb" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            {crumbs}
          </motion.div>
        )}
        <motion.span className="eyebrow on-dark" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, ease: EASE }}>
          {eyebrow}
        </motion.span>
        <h1><SplitText text={title} delay={0.4} /></h1>
        {sub && (
          <motion.p
            style={{ maxWidth: "52ch", color: "rgba(255,255,255,.92)", fontSize: "1.1rem", marginTop: "1rem" }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, ease: EASE }}
          >
            {sub}
          </motion.p>
        )}
      </div>
    </section>
  );
}
