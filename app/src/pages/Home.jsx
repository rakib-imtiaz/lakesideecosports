import Hero from "../components/Hero";
import { Trust, Experiences, WineFeature, Eco, Steps, Testimonials, Gallery, CTA } from "../components/HomeSections";

export default function Home({ ready }) {
  return (
    <>
      <Hero ready={ready} />
      <Trust />
      <Experiences />
      <WineFeature />
      <Eco />
      <Steps />
      <Testimonials />
      <Gallery />
      <CTA />
    </>
  );
}
