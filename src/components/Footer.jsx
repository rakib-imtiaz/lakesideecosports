import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <div className="top">
          <div>
            <div className="logo"><img src="/assets/img/logo.png" alt="Lakeside Eco Sports" /></div>
            <p className="blurb">Guided electric-assist bike, wine and adventure tours through Kelowna and the Okanagan Valley. Powered by the planet, guided by locals.</p>
          </div>
          <div>
            <h4>Experiences</h4>
            <ul>
              <li><Link to="/experiences">All experiences</Link></li>
              <li><Link to="/wine-tour">E-Bike Wine Tour</Link></li>
              <li><Link to="/experiences">Lake Vista Tour</Link></li>
              <li><Link to="/rentals">E-Bike Rentals</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/sustainability">Sustainability</Link></li>
              <li><Link to="/journal">Journal</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/contact">Gift cards</Link></li>
            </ul>
          </div>
          <div>
            <h4>Visit</h4>
            <ul>
              <li>Downtown Kelowna, BC</li>
              <li><a href="tel:+12505550199">(250) 555-0199</a></li>
              <li><a href="mailto:ride@lakesideecosports.com">ride@lakesideecosports.com</a></li>
              <li>Apr to Oct · 8am to 7pm</li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <span>© 2026 Lakeside Eco Sports · Redesign concept mock</span>
          <span>Privacy · Terms · Safety</span>
        </div>
      </div>
    </footer>
  );
}
