import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SplitText from "../components/SplitText";

const img = (n) => `/assets/img/${n}`;

const POSTS = [
  { img: "ls-31.png", cat: "Trails", title: "Riding the Myra Canyon trestles", excerpt: "Eighteen wooden trestles, two rock tunnels, and one of the best rail-trail rides in Canada. Here's how to do it on an e-bike." },
  { img: "ls-12.webp", cat: "Wine", title: "A perfect day in Kelowna wine country", excerpt: "How to pace three tastings, a charcuterie stop, and a lakeside cruise without rushing a single pour." },
  { img: "ls-34.jpg", cat: "Sustainability", title: "Why we went all-electric", excerpt: "The story behind our zero-emission fleet, and what 2,150 emission-free kilometres actually adds up to." },
  { img: "ls-09.webp", cat: "Family", title: "Gold panning with kids in the Okanagan", excerpt: "A hands-on half-day the whole family remembers, plus what to bring and where the gold really hides." },
  { img: "ls-11.webp", cat: "Guides", title: "First time on an e-bike? Read this", excerpt: "Pedal-assist demystified: how the modes work, how far a charge goes, and why hills stop being scary." },
  { img: "ls-34.jpg", cat: "Local", title: "Kelowna's best lake lookouts by bike", excerpt: "Our five favourite viewpoints over Okanagan Lake, ranked by the gasp they get from first-timers." },
];

export default function Journal() {
  return (
    <>
      <PageHero
        eyebrow="The journal"
        title="Stories from the trail."
        sub="Ride guides, wine-country tips, and notes on keeping the Okanagan wild, written by the people who pedal it every day."
        img={img("ls-31.png")}
        crumbs={<><Link to="/">Home</Link> &nbsp;/&nbsp; Journal</>}
      />

      <section>
        <div className="wrap">
          <div className="posts">
            {POSTS.map((p, i) => (
              <Reveal as="article" className="post" key={i} delay={(i % 3) * 0.08}>
                <img src={img(p.img)} alt={p.title} loading="lazy" />
                <div className="pbody">
                  <span className="cat">{p.cat}</span>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <a className="more" href="#">Read more →</a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <img src={img("ls-12.webp")} alt="Okanagan vineyard" loading="lazy" />
        <div className="wrap">
          <Reveal><h2><SplitText text="Read it, then go ride it." /></h2></Reveal>
          <Reveal delay={0.1}><p>Every story here is a real route or experience you can book. Turn the inspiration into a day out.</p></Reveal>
          <Reveal delay={0.2}><Link className="btn btn-primary" to="/experiences">Browse experiences</Link></Reveal>
        </div>
      </section>
    </>
  );
}
