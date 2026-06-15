import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SplitText from "../components/SplitText";

const Arrow = ({ s = 18 }) => (
  <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const img = (n) => `/assets/img/${n}`;
const hoverLift = { whileHover: { y: -8 }, transition: { type: "spring", stiffness: 300, damping: 22 } };

const ITEMS = [
  { img: "ls-34.jpg", title: "E-Bike Lake Vista Tour", desc: "Our signature ride to the best lookouts over Okanagan Lake.", specs: ["3 hours", "22 km", "Easy"], price: "from C$129", to: "/wine-tour", tag: "Most popular" },
  { img: "ls-12.webp", title: "E-Bike Wine Tour", desc: "Three boutique wineries, all tastings included, one local guide.", specs: ["5 hours", "28 km", "Easy"], price: "from C$189", to: "/wine-tour" },
  { img: "ls-09.webp", title: "Gold Panning Adventure", desc: "Pan a real Okanagan creek for gold. Great for families.", specs: ["3 hours", "All ages"], price: "from C$89", to: "/wine-tour" },
  { img: "ls-31.png", title: "Myra Canyon Trestles", desc: "Ride the historic Kettle Valley trestle bridges and tunnels.", specs: ["4 hours", "24 km", "Moderate"], price: "from C$149", to: "/wine-tour" },
  { img: "ls-11.webp", title: "E-Bike Rentals", desc: "Take a premium e-bike and our guided app routes at your own pace.", specs: ["Half / full day", "Self-guided"], price: "from C$59", to: "/rentals" },
  { img: "ls-34.jpg", title: "Corporate & Groups", desc: "Team days, retreats, and private group tours, fully tailored.", specs: ["Custom", "Up to 20"], price: "Get a quote", to: "/contact" },
];

export default function Experiences() {
  return (
    <>
      <PageHero
        eyebrow="Tours & activities"
        title="Find your Okanagan adventure."
        sub="Curated, guided, and electric-assisted. Every experience is led by a local who knows the lake, the vines, and the back roads by heart."
        img={img("ls-31.png")}
        crumbs={<><Link to="/">Home</Link> &nbsp;/&nbsp; Experiences</>}
      />

      <section>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Pick your day out</span>
            <h2><SplitText text="Six ways to ride the valley." /></h2>
          </Reveal>
          <div className="exp-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {ITEMS.map((e, i) => (
              <Reveal as="article" className="exp-card" key={i} delay={(i % 3) * 0.08} y={34} {...hoverLift} style={{ minHeight: 340 }}>
                {e.tag && <span className="tag">{e.tag}</span>}
                <img src={img(e.img)} alt={e.title} loading="lazy" />
                <div className="body">
                  <h3 style={{ fontSize: "1.5rem" }}>{e.title}</h3>
                  <p style={{ fontSize: ".88rem", color: "rgba(255,255,255,.85)", margin: ".4rem 0 .7rem" }}>{e.desc}</p>
                  <div className="specs">{e.specs.map((s, j) => <span key={j}>{s}</span>)}</div>
                  <div className="row">
                    <div className="price">{e.price}</div>
                    <Link to={e.to} className="go" aria-label={`View ${e.title}`}><Arrow /></Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <img src={img("ls-34.jpg")} alt="Okanagan Lake panorama" loading="lazy" />
        <div className="wrap">
          <Reveal><h2><SplitText text="Not sure which to pick?" /></h2></Reveal>
          <Reveal delay={0.1}><p>Tell us who's riding and we'll match you to the right tour. Most guests start with the Lake Vista or Wine Tour.</p></Reveal>
          <Reveal delay={0.2}><Link className="btn btn-primary" to="/contact">Ask a local <Arrow /></Link></Reveal>
        </div>
      </section>
    </>
  );
}
