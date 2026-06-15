import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SplitText from "../components/SplitText";

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const img = (n) => `/assets/img/${n}`;

const TIERS = [
  { name: "Half Day", amt: "C$59", per: "4 hours", feats: ["Premium e-bike & helmet", "Guided app routes", "Lock & repair kit", "Lakefront pickup"], cta: "Reserve half day" },
  { name: "Full Day", amt: "C$89", per: "8 hours", feats: ["Everything in Half Day", "Pannier bags", "Trail snacks & water", "Free route planning"], cta: "Reserve full day", featured: true },
  { name: "Weekend", amt: "C$149", per: "2 days", feats: ["Everything in Full Day", "Overnight battery charger", "Priority support line", "Hotel drop-off"], cta: "Reserve weekend" },
];

export default function Rentals() {
  return (
    <>
      <PageHero
        eyebrow="E-bike rentals"
        title="Your bike, your pace, our valley."
        sub="Premium electric-assist bikes with guided GPS routes loaded on our app. Pick one up downtown and explore Kelowna on your own schedule."
        img={img("ls-11.webp")}
        crumbs={<><Link to="/">Home</Link> &nbsp;/&nbsp; Rentals</>}
      />

      <section>
        <div className="wrap">
          <Reveal className="section-head center">
            <span className="eyebrow">Simple, all-in pricing</span>
            <h2><SplitText text="Pick a plan and roll." /></h2>
          </Reveal>
          <div className="tiers">
            {TIERS.map((t, i) => (
              <Reveal className={`tier${t.featured ? " featured" : ""}`} key={i} delay={i * 0.08}>
                {t.featured && <span className="tier-badge">Best value</span>}
                <span className="eyebrow">{t.name}</span>
                <div className="amt">{t.amt}<span style={{ fontFamily: "Inter", fontSize: ".82rem", color: "var(--ink-soft)", fontWeight: 500 }}> / {t.per}</span></div>
                <ul>{t.feats.map((f, j) => <li key={j}>{f}</li>)}</ul>
                <Link className={`btn ${t.featured ? "btn-primary" : "btn-line"}`} to="/contact">{t.cta}</Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-split">
        <div className="wrap">
          <Reveal className="media" y={36}>
            <img src={img("ls-11.webp")} alt="Handlebar view with the Lakeside app navigation" loading="lazy" />
            <div className="float"><span className="n">25+</span><div style={{ fontSize: ".8rem", lineHeight: 1.3 }}>Curated app<br />routes</div></div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Navigate with ease</span>
            <h2><SplitText text="Self-guided, never lost." /></h2>
            <p className="lead">Every rental comes with our route app: turn-by-turn directions, lake lookouts, coffee stops, and winery detours, all mapped for e-bikes. Ride confidently even if it's your first time in Kelowna.</p>
            <ul className="incl">
              <li>Turn-by-turn GPS routes</li>
              <li>Curated lookout & cafe stops</li>
              <li>Live battery range estimates</li>
              <li>One-tap support if you need us</li>
            </ul>
            <Link className="btn btn-primary" to="/contact">Reserve a bike <Arrow /></Link>
          </Reveal>
        </div>
      </section>

      <section className="cta-band">
        <img src={img("ls-31.png")} alt="Okanagan Lake panorama" loading="lazy" />
        <div className="wrap">
          <Reveal><h2><SplitText text="Bikes ready when you are." /></h2></Reveal>
          <Reveal delay={0.1}><p>Reserve online in under a minute. Free cancellation up to 24 hours before pickup.</p></Reveal>
          <Reveal delay={0.2}><Link className="btn btn-primary" to="/contact">Reserve now <Arrow /></Link></Reveal>
        </div>
      </section>
    </>
  );
}
