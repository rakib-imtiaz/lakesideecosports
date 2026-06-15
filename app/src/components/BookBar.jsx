import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Mobile-only sticky booking bar that slides up once you scroll past the hero.
export default function BookBar({ price = "from C$59", note = "Tours & rentals", to = "/wine-tour", cta = "Book a Tour" }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`bookbar${show ? " show" : ""}`}>
      <div className="p">{price} <small>{note}</small></div>
      <Link className="btn btn-primary" to={to}>{cta}</Link>
    </div>
  );
}
