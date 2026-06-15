import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import SplitText from "./SplitText";
import CountUp from "./CountUp";
import { scrollToId } from "../lib/anim";

const Arrow = ({ s = 24 }) => (
  <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const img = (n) => `/assets/img/${n}`;
const hoverLift = { whileHover: { y: -8 }, transition: { type: "spring", stiffness: 300, damping: 22 } };

/* ---------------- Trust strip ---------------- */
export function Trust() {
  const items = [
    { b: <><CountUp to={5} decimals={1} />★</>, s: "Rated on Google Reviews" },
    { b: <CountUp to={2150} suffix="+" />, s: "Kilometres ridden, emission-free" },
    { b: "100%", s: "Electric-assist, zero-emission fleet" },
    { b: "Local", s: "Born-and-raised Kelowna guides" },
  ];
  return (
    <section className="trust" style={{ padding: 0 }}>
      <div className="wrap">
        {items.map((it, i) => (
          <Reveal className="item" key={i} delay={i * 0.08} y={18}>
            <b>{it.b}</b>
            <span>{it.s}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Experiences ---------------- */
const EXPERIENCES = [
  { feature: true, tag: "Most popular", img: "ls-34.jpg", title: "E-Bike Lake Vista Tour", specs: ["⏱ 3 hours", "📍 22 km", "🚴 Easy · electric-assist"], price: "from C$129", unit: "per rider" },
  { img: "ls-09.webp", title: "Gold Panning Adventure", specs: ["⏱ 3 hours", "👪 All ages"], price: "from C$89", unit: "per person" },
  { img: "ls-11.webp", title: "E-Bike Rentals + App Routes", specs: ["⏱ Half / full day", "🗺 Guided GPS routes"], price: "from C$59", unit: "per day" },
];
export function Experiences() {
  return (
    <section id="experiences">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Choose your adventure</span>
          <h2><SplitText text="A few unforgettable ways to spend a day." /></h2>
          <p className="lead" style={{ marginTop: ".8rem" }}>No 40-page catalog. Just the experiences our guests rave about. Pick one and we'll handle the bikes, the route, and the stories along the way.</p>
        </Reveal>
        <div className="exp-grid">
          {EXPERIENCES.map((e, i) => (
            <Reveal as="article" className={`exp-card${e.feature ? " feature" : ""}`} key={i} delay={i * 0.1} y={36} {...hoverLift}>
              {e.tag && <span className="tag">{e.tag}</span>}
              <img src={img(e.img)} alt={e.title} loading="lazy" />
              <div className="body">
                <h3>{e.title}</h3>
                <div className="specs">{e.specs.map((s, j) => <span key={j}>{s}</span>)}</div>
                <div className="row">
                  <div className="price">{e.price} <small>{e.unit}</small></div>
                  <Link to="/wine-tour" className="go" aria-label={`View ${e.title}`}><Arrow s={18} /></Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Flagship wine feature ---------------- */
const CHIPS = ["⏱ 5 hours", "📍 28 km", "🍷 3 wineries", "🚴 Easy · assisted"];
const INCL = ["Premium electric-assist bike & helmet", "All tasting fees at 3 wineries", "Certified local guide", "Lakeside charcuterie stop", "Bottle-carry panniers", "Hotel pickup downtown"];
export function WineFeature() {
  return (
    <section className="feature-split" id="wine">
      <div className="wrap">
        <Reveal className="media" y={36}>
          <img src={img("ls-12.webp")} alt="Couple tasting wine in an Okanagan vineyard" loading="lazy" />
          <div className="float"><span className="n">4.9★</span><div style={{ fontSize: ".8rem", lineHeight: 1.3 }}>Guests' favourite<br />day out</div></div>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="eyebrow">The flagship</span>
          <h2><SplitText text="E-Bike Wine Tour through wine country." /></h2>
          <p className="lead">Glide between three boutique Okanagan wineries on a whisper-quiet e-bike. Lakeview tasting rooms, small-batch pours, and a guide who knows every vintner by name. The assist does the climbing so you can savour the ride.</p>
          <div className="chips">{CHIPS.map((c, i) => <span className="chip" key={i}>{c}</span>)}</div>
          <ul className="incl">{INCL.map((c, i) => <li key={i}>{c}</li>)}</ul>
          <Link className="btn btn-primary" to="/wine-tour">View tour & book <Arrow /></Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Eco pillar ---------------- */
export function Eco() {
  const stats = [
    { b: "0g", s: "Tailpipe CO₂, our whole fleet is electric" },
    { b: <CountUp to={2150} suffix="+" />, s: "Emission-free km ridden by guests" },
    { b: <CountUp to={420} />, s: "Trees planted with local partners" },
    { b: "3×", s: "Provincial sustainable-tourism awards" },
  ];
  return (
    <section className="eco" id="eco">
      <svg className="leaf" viewBox="0 0 24 24" fill="#fff"><path d="M17 8C8 10 5.9 16.2 4 22c1.5-1.5 3.5-3 6-3 7 0 11-4 11-11 0-2-1-4-1-4s-2 1-3 4Z" /></svg>
      <div className="wrap">
        <Reveal className="section-head" style={{ maxWidth: "46ch" }}>
          <span className="eyebrow on-dark">Eco isn't a label for us, it's our name</span>
          <h2><SplitText text="Every kilometre we ride leaves the Okanagan exactly as we found it." /></h2>
        </Reveal>
        <div className="eco-stats">
          {stats.map((s, i) => (
            <Reveal className="eco-stat" key={i} delay={i * 0.1}><b>{s.b}</b><span>{s.s}</span></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */
const STEPS = [
  { n: "01", t: "Pick your day", p: "Choose an experience and a date. Small groups, real availability, instant confirmation, no back-and-forth." },
  { n: "02", t: "We fit your ride", p: "Meet your guide downtown. We size your e-bike, run a quick safety brief, and dial in the assist to your comfort." },
  { n: "03", t: "Roll out & enjoy", p: "Follow the lake, the vines, or the canyon. We carry the gear, take the photos, and tell the stories." },
];
export function Steps() {
  return (
    <section>
      <div className="wrap">
        <Reveal className="section-head center">
          <span className="eyebrow">Easy from click to kickstand</span>
          <h2><SplitText text="Booking takes about ninety seconds." /></h2>
        </Reveal>
        <div className="steps">
          {STEPS.map((s, i) => (
            <Reveal className="step" key={i} delay={i * 0.1}><span className="num">{s.n}</span><h3>{s.t}</h3><p>{s.p}</p></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const TESTI = [
  { av: "SD", q: "Best thing we did in Kelowna. The e-bikes made the hills disappear and our guide knew every winery owner by name. Booked again before we even got home.", n: "Sarah D.", r: "Calgary, AB · Wine Tour" },
  { av: "MR", q: "The lake-vista ride was unreal. Proper jaw-drop viewpoints and zero stress on the legs. Our kids did the gold panning after and loved it just as much.", n: "Marcus R.", r: "Seattle, WA · Lake Vista Tour" },
  { av: "PL", q: "Rented for two days and used their app routes, so well marked. You can tell this team genuinely cares about the valley and keeping it green.", n: "Priya L.", r: "Vancouver, BC · Rentals" },
];
export function Testimonials() {
  return (
    <section className="feature-split" style={{ background: "var(--sand)" }}>
      <div className="wrap" style={{ display: "block" }}>
        <Reveal className="section-head center">
          <span className="eyebrow">Loved by 300+ riders</span>
          <h2><SplitText text="What our guests say." /></h2>
        </Reveal>
        <div className="tg">
          {TESTI.map((t, i) => (
            <Reveal as="figure" className="tcard" key={i} delay={i * 0.1} {...hoverLift}>
              <div className="stars">★★★★★</div>
              <blockquote>{t.q}</blockquote>
              <figcaption className="who"><span className="av">{t.av}</span><div><b>{t.n}</b><span>{t.r}</span></div></figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Gallery (gapless full-width bento) ---------------- */
const GAL = [
  { src: "ls-31.png", cls: "g-a", alt: "Rider overlooking Okanagan Lake" }, // tall left
  { src: "ls-12.webp", cls: "g-b", alt: "Vineyard wine tasting" },
  { src: "ls-34.jpg", cls: "g-c", alt: "Kelowna skyline and lake" }, // wide
  { src: "ls-09.webp", cls: "g-d", alt: "Gold panning in a creek" },
  { src: "ls-11.webp", cls: "g-e", alt: "Riding the rail trail" }, // wide
];
export function Gallery() {
  return (
    <section id="journal">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">From the trail</span>
          <h2><SplitText text="Real days, real riders." /></h2>
        </Reveal>
        <Reveal className="gal">
          {GAL.map((g) => (
            <button key={g.cls} className={g.cls} onClick={() => scrollToId("experiences")} aria-label={g.alt}>
              <img src={img(g.src)} alt={g.alt} loading="lazy" />
            </button>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CTA band ---------------- */
export function CTA() {
  return (
    <section className="cta-band">
      <img src={img("ls-34.jpg")} alt="Okanagan Lake panorama" loading="lazy" />
      <div className="wrap">
        <Reveal><h2><SplitText text="The lake's waiting. So is your bike." /></h2></Reveal>
        <Reveal delay={0.1}><p>Small groups fill fast in summer. Lock in your Okanagan adventure today. Free rescheduling up to 48 hours before.</p></Reveal>
        <Reveal delay={0.2}><Link className="btn btn-primary" to="/wine-tour">Book your tour <Arrow /></Link></Reveal>
      </div>
    </section>
  );
}
