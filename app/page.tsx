import Header from "./components/landing-page/header";
import Hero from "./components/landing-page/hero";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div className="pt-28">
        <Hero />
      </div>

      {/* <VideoExplanation />
      <Pricing />
      <FAQ /> */}
    </div>
  );
}