import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SplitText from "../components/SplitText";
import CountUp from "../components/CountUp";

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const img = (n) => `/assets/img/${n}`;

const PROMISES = [
  { t: "Zero-emission fleet", p: "Every bike we run is electric-assist. No fumes, no engine noise, no trace left on the trail." },
  { t: "One guest, one tree", p: "For every rider who books, we plant a native tree with our Okanagan reforestation partners." },
  { t: "Leave-no-trace tours", p: "Small groups, packed-out waste, and routes chosen to protect sensitive habitat and quiet corners." },
  { t: "Local first", p: "We hire local guides and send guests to family-run wineries and makers, keeping tourism money in the valley." },
];

export default function Sustainability() {
  return (
    <>
      <PageHero
        eyebrow="Our eco promise"
        title="Eco isn't a label for us, it's our name."
        sub="Lakeside Eco Sports was built so people could see the Okanagan without harming it. Here's exactly how we keep that promise on every ride."
        img={img("ls-34.jpg")}
        crumbs={<><Link to="/">Home</Link> &nbsp;/&nbsp; Sustainability</>}
      />

      <section className="eco">
        <svg className="leaf" viewBox="0 0 24 24" fill="#fff"><path d="M17 8C8 10 5.9 16.2 4 22c1.5-1.5 3.5-3 6-3 7 0 11-4 11-11 0-2-1-4-1-4s-2 1-3 4Z" /></svg>
        <div className="wrap">
          <Reveal className="section-head" style={{ maxWidth: "46ch" }}>
            <span className="eyebrow on-dark">By the numbers</span>
            <h2><SplitText text="Proof, not promises." /></h2>
          </Reveal>
          <div className="eco-stats">
            <Reveal className="eco-stat"><b>0g</b><span>Tailpipe CO₂, our whole fleet is electric</span></Reveal>
            <Reveal className="eco-stat" delay={0.1}><b><CountUp to={2150} suffix="+" /></b><span>Emission-free km ridden by guests</span></Reveal>
            <Reveal className="eco-stat" delay={0.2}><b><CountUp to={420} /></b><span>Trees planted with local partners</span></Reveal>
            <Reveal className="eco-stat" delay={0.3}><b>3×</b><span>Provincial sustainable-tourism awards</span></Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">How we ride lighter</span>
            <h2><SplitText text="Four commitments, every day." /></h2>
          </Reveal>
          <div className="steps" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
            {PROMISES.map((c, i) => (
              <Reveal className="step" key={i} delay={(i % 2) * 0.08}>
                <h3>{c.t}</h3>
                <p>{c.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-split">
        <div className="wrap">
          <Reveal className="media" y={36}>
            <img src={img("ls-09.webp")} alt="Exploring a protected Okanagan creek" loading="lazy" />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Recognised work</span>
            <h2><SplitText text="Awarded for keeping it green." /></h2>
            <p className="lead">Our approach has earned provincial recognition for sustainable tourism three years running. We're proud of it, but the real reward is a valley our kids will still want to ride through.</p>
            <ul className="incl">
              <li>BC Sustainable Tourism honoree</li>
              <li>Carbon-neutral operations</li>
              <li>Certified local guide team</li>
              <li>Reforestation partner program</li>
            </ul>
            <Link className="btn btn-primary" to="/experiences">Ride with us <Arrow /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
