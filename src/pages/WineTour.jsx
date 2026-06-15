import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import SplitText from "../components/SplitText";
import { EASE } from "../lib/anim";

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const img = (n) => `/assets/img/${n}`;

const TIMELINE = [
  { t: "12:30 PM", b: "Meet & fit downtown", p: "Bike sizing, helmet, and a quick assist-and-safety brief at our Kelowna shop." },
  { t: "1:00 PM", b: "Winery one, lakeview tasting", p: "An easy warm-up ride to a hillside cellar door overlooking Okanagan Lake. Five guided pours." },
  { t: "2:30 PM", b: "Charcuterie in the vines", p: "A local-cheese and charcuterie stop between rows, and the trip's best photo spot." },
  { t: "3:30 PM", b: "Wineries two & three", p: "Small-batch producers you'd never find alone, with introductions to the people who make the wine." },
  { t: "5:30 PM", b: "Roll back to town", p: "A gentle downhill cruise home along the waterfront pathway. Bottles delivered to your hotel on request." },
];
const INCL = ["Premium electric-assist bike & helmet", "All tasting fees at 3 wineries", "Certified local guide", "Lakeside charcuterie board", "Bottle-carry panniers", "Downtown hotel pickup & drop-off", "Bottled water & trail snacks", "Photos from your ride"];

export default function WineTour() {
  const [btn, setBtn] = useState("Check availability");
  const [busy, setBusy] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setBtn("Checking availability…");
    setTimeout(() => {
      setBtn("✓ Spot held, we'll email you");
      setTimeout(() => { setBtn("Check availability"); setBusy(false); }, 2600);
    }, 900);
  };

  return (
    <>
      <section className="tour-hero">
        <motion.img src={img("ls-12.webp")} alt="Couple tasting wine in an Okanagan vineyard on a wine tour"
          initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 1.4, ease: EASE }} fetchpriority="high" />
        <div className="wrap">
          <motion.div className="breadcrumb" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <Link to="/">Home</Link> &nbsp;/&nbsp; <Link to="/">Experiences</Link> &nbsp;/&nbsp; Wine Tour
          </motion.div>
          <motion.span className="eyebrow on-dark" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, ease: EASE }}>Kelowna · Okanagan wine country</motion.span>
          <h1><SplitText text="E-Bike Wine Tour" delay={0.4} /></h1>
          <motion.p style={{ maxWidth: "48ch", color: "rgba(255,255,255,.92)", fontSize: "1.1rem", marginTop: "1rem" }}
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, ease: EASE }}>
            Three boutique wineries, one unforgettable afternoon. The electric assist does the climbing, you do the tasting.
          </motion.p>
          <motion.div className="hero-actions" style={{ marginTop: "1.6rem" }} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, ease: EASE }}>
            <span className="rating-chip"><span className="stars">★★★★★</span> 4.9 · 180 reviews</span>
            <span className="rating-chip">⏱ 5 hours</span>
            <span className="rating-chip">🍃 Zero-emission</span>
          </motion.div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="tour-layout">
            <div className="tour-body">
              <Reveal>
                <h2><SplitText text="Wine country, the slow-and-scenic way" /></h2>
                <p>Skip the shuttle bus. On a Lakeside e-bike you roll right through the vines, stopping at three family-run Okanagan wineries chosen for their views as much as their pours. The pedal-assist flattens every hill between tastings, so you arrive relaxed, not winded, and you'll see corners of wine country the tour vans never reach.</p>
                <p>Your certified local guide handles the routing, the introductions, and the stories behind each label. All you bring is a sense of adventure (and maybe room in your panniers for a bottle or two).</p>
              </Reveal>

              <Reveal>
                <h2>Your afternoon, hour by hour</h2>
                <ul className="timeline">
                  {TIMELINE.map((s, i) => (
                    <Reveal as="li" key={i} delay={i * 0.06} y={18}>
                      <span className="t">{s.t}</span><b>{s.b}</b><p>{s.p}</p>
                    </Reveal>
                  ))}
                </ul>
              </Reveal>

              <Reveal>
                <h2>What's included</h2>
                <ul className="incl" style={{ gridTemplateColumns: "1fr 1fr" }}>{INCL.map((c, i) => <li key={i}>{c}</li>)}</ul>
                <p style={{ background: "var(--sand)", borderRadius: 14, padding: "1rem 1.2rem", fontSize: ".92rem" }}>🍃 <b>Our eco promise:</b> this tour is 100% electric and carbon-neutral. For every guest, we plant a tree with our Okanagan reforestation partners.</p>
              </Reveal>

              <Reveal>
                <h2>From the ride</h2>
                <div className="tour-gallery">
                  <img src={img("ls-12.webp")} alt="Wine tasting in the vineyard" loading="lazy" />
                  <img src={img("ls-31.png")} alt="E-bike lake viewpoint" loading="lazy" />
                  <img src={img("ls-11.webp")} alt="Riding the rail trail" loading="lazy" />
                </div>
              </Reveal>
            </div>

            <motion.aside className="booking" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}>
              <div className="price">C$189 <small>/ rider · all-inclusive</small></div>
              <form onSubmit={submit} style={{ marginTop: "1.2rem" }}>
                <div className="field"><label htmlFor="date">Date</label><input type="date" id="date" required /></div>
                <div className="field"><label htmlFor="riders">Riders</label>
                  <select id="riders" defaultValue="2 riders"><option>1 rider</option><option>2 riders</option><option>3 riders</option><option>4 riders</option><option>5+ (private group)</option></select>
                </div>
                <div className="field"><label htmlFor="time">Departure</label>
                  <select id="time"><option>12:30 PM · Afternoon</option><option>10:00 AM · Late morning</option></select>
                </div>
                <button type="submit" className="btn btn-primary" disabled={busy}>{btn} {!busy && <Arrow />}</button>
                <div style={{ marginTop: "1.2rem" }}>
                  <div className="meta"><span>⏱ Duration</span><b>5 hours</b></div>
                  <div className="meta"><span>📍 Distance</span><b>28 km · easy</b></div>
                  <div className="meta"><span>👥 Group size</span><b>Max 8</b></div>
                  <div className="meta" style={{ border: "none" }}><span>🗓 Cancellation</span><b>Free to 48h</b></div>
                </div>
                <p style={{ fontSize: ".78rem", color: "var(--ink-soft)", marginTop: ".8rem", textAlign: "center" }}>Instant confirmation · No booking fees</p>
              </form>
            </motion.aside>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <img src={img("ls-31.png")} alt="Okanagan Lake panorama" loading="lazy" />
        <div className="wrap">
          <Reveal><h2><SplitText text="Make it a day to remember." /></h2></Reveal>
          <Reveal delay={0.1}><p>Summer afternoons sell out weeks ahead. Reserve your spots now. Free rescheduling up to 48 hours before.</p></Reveal>
          <Reveal delay={0.2}><Link className="btn btn-primary" to="/wine-tour">Check availability <Arrow /></Link></Reveal>
        </div>
      </section>
    </>
  );
}
