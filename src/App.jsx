import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import useLenis, { lockScroll } from "./lib/useLenis";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookBar from "./components/BookBar";
import Home from "./pages/Home";
import WineTour from "./pages/WineTour";
import Experiences from "./pages/Experiences";
import Rentals from "./pages/Rentals";
import Sustainability from "./pages/Sustainability";
import Journal from "./pages/Journal";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Shell() {
  useLenis();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    lockScroll(!ready);
  }, [ready]);

  return (
    <>
      <ScrollToTop />
      <AnimatePresence>
        {!ready && <Loader key="loader" onDone={() => setReady(true)} />}
      </AnimatePresence>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home ready={ready} />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/wine-tour" element={<WineTour />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <BookBar />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
