import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SplitText from "../components/SplitText";

const img = (n) => `/assets/img/${n}`;

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (busy || sent) return;
    setBusy(true);
    setTimeout(() => { setBusy(false); setSent(true); }, 800);
  };

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Come ride with us."
        sub="Questions about a tour, a group booking, or a rental? We're a small local team and we answer fast, usually the same day."
        img={img("ls-34.jpg")}
        crumbs={<><Link to="/">Home</Link> &nbsp;/&nbsp; Contact</>}
      />

      <section>
        <div className="wrap">
          <div className="contact-grid">
            <Reveal className="contact-info">
              <span className="eyebrow">Find us</span>
              <h2 style={{ fontSize: "1.9rem", margin: ".5rem 0 1rem" }}><SplitText text="Downtown Kelowna, BC" /></h2>
              <div className="row"><b>Phone</b><a href="tel:+12505550199">(250) 555-0199</a></div>
              <div className="row"><b>Email</b><a href="mailto:ride@lakesideecosports.com">ride@lakesideecosports.com</a></div>
              <div className="row"><b>Shop</b><span>120 Lakeshore Road, Kelowna</span></div>
              <div className="row"><b>Season</b><span>Apr to Oct · 8am to 7pm daily</span></div>
              <div className="map" aria-hidden="true">
                <span>🗺️ Lakeshore Road, Kelowna</span>
              </div>
            </Reveal>

            <Reveal className="booking" delay={0.1} style={{ position: "static" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                  <div style={{ fontSize: "2.4rem" }}>🌲</div>
                  <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "1.5rem", margin: ".5rem 0" }}>Message sent</h3>
                  <p style={{ color: "var(--ink-soft)" }}>Thanks for reaching out. A local guide will get back to you shortly.</p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "1.6rem", marginBottom: "1rem" }}>Send us a note</h3>
                  <form onSubmit={submit}>
                    <div className="field"><label htmlFor="name">Name</label><input id="name" type="text" required placeholder="Your name" /></div>
                    <div className="field"><label htmlFor="email">Email</label><input id="email" type="email" required placeholder="you@email.com" /></div>
                    <div className="field"><label htmlFor="topic">I'm interested in</label>
                      <select id="topic"><option>A guided tour</option><option>An e-bike rental</option><option>A group / corporate day</option><option>Something else</option></select>
                    </div>
                    <div className="field"><label htmlFor="msg">Message</label><textarea id="msg" rows="4" placeholder="Tell us what you're planning..." style={{ width: "100%", border: "1px solid var(--line)", borderRadius: 12, padding: ".7rem .9rem", font: "inherit", background: "var(--bone)", resize: "vertical" }} /></div>
                    <button type="submit" className="btn btn-primary" disabled={busy}>{busy ? "Sending…" : "Send message"}</button>
                    <p style={{ fontSize: ".78rem", color: "var(--ink-soft)", marginTop: ".8rem", textAlign: "center" }}>We reply within a day, usually much sooner.</p>
                  </form>
                </>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
