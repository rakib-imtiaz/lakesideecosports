import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { scrollToId, EASE } from "../lib/anim";
import { lockScroll } from "../lib/useLenis";

const NAV = [
  { label: "Experiences", id: "experiences" },
  { label: "Wine Tours", to: "/wine-tour" },
  { label: "Rentals", id: "experiences" },
  { label: "Sustainability", id: "eco" },
  { label: "Journal", id: "journal" },
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    lockScroll(open);
    return () => lockScroll(false);
  }, [open]);

  const go = (item) => {
    setOpen(false);
    if (item.to) {
      navigate(item.to);
      return;
    }
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToId(item.id), 350);
    } else {
      scrollToId(item.id);
    }
  };

  return (
    <>
      <header className={`site-header${solid ? " solid" : ""}`}>
        <div className="bar">
          <Link className="logo" to="/" aria-label="Lakeside Eco Sports home">
            <img src="/assets/img/logo.png" alt="Lakeside Eco Sports" />
          </Link>
          <nav className="nav">
            {NAV.map((n) => (
              <button key={n.label} onClick={() => go(n)}>{n.label}</button>
            ))}
          </nav>
          <div className="header-cta">
            <a className="header-phone" href="tel:+12505550199">📞 (250) 555-0199</a>
            <Link className="btn btn-primary" to="/wine-tour">Book a Tour <Arrow /></Link>
            <button className="burger" aria-label="Open menu" onClick={() => setOpen(true)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu open"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{ transition: "none" }}
          >
            <div className="mtop">
              <img src="/assets/img/logo.png" alt="Lakeside Eco Sports" />
              <button className="x" aria-label="Close menu" onClick={() => setOpen(false)}>✕</button>
            </div>
            <nav>
              {NAV.map((n, i) => (
                <motion.button
                  key={n.label}
                  onClick={() => go(n)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.07, ease: EASE, duration: 0.5 }}
                  style={{ textAlign: "left" }}
                >
                  {n.label}
                </motion.button>
              ))}
            </nav>
            <div className="mfoot">
              <Link className="btn btn-primary" to="/wine-tour" onClick={() => setOpen(false)}>Book a Tour</Link>
              <a className="btn btn-ghost" href="tel:+12505550199">Call us</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
