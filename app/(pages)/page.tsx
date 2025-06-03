import { title } from "process";
import FAQ from "../components/landing-page/faq";
import Header from "../components/landing-page/header";
import Hero from "../components/landing-page/hero";
import Pricing from "../components/landing-page/pricing";
import VideoExplanation from "../components/landing-page/video-explanation";
import { trackServerEvent } from "../lib/mixpanel";
import type { Metadata } from "next";
import { getSEOTags } from "../lib/seo";

export const metadata: Metadata = getSEOTags({
  appName: "ProjectInBio",
  appDescription: "Seus projetos e redes sociais em um só link.",
  keywords: ["ProjectInBio", "projetos", "redes sociais", "link"],
  appDomain: "https://micro-saas-rocketseat-project-in-bi.vercel.app",
  canonicalUrlRelative: "/",
});

export default function Home() {
  trackServerEvent("page_view", {
    page: "home",
  });
  
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div className="pt-28">
        <Hero />
        <VideoExplanation />
        <Pricing />
      <FAQ />
      </div>
    </div>
  );
}