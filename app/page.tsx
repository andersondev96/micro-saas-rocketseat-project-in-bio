import Image from "next/image";
import Hero from "./components/landing-page/hero";

export default function Home() {
  return (
    <h1 className="max-w-7xl mx-auto">
      <Hero />
     {/*  <Header />
      <Hero />
      <VideoExplanation />
      <Pricing />
      <FAQ /> */}
    </h1>
  );
}
