import  { MetadataRoute } from "next";
import { socialMedias } from "./server/get-texts-by-slugs";

export default function sitemap(): MetadataRoute.Sitemap {
  const socialMediaEntries: MetadataRoute.Sitemap = socialMedias.map((media) => ({
    url: `https://micro-saas-rocketseat-project-in-bi.vercel.app/recursos/link-na-bio-para-${media}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const staticEntries: MetadataRoute.Sitemap = [
  {
    url: "https://micro-saas-rocketseat-project-in-bi.vercel.app/",
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 1.0,
  },
];

return [...staticEntries, ...socialMediaEntries];
};

