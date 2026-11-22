import { site } from "@/lib/site";

export default function sitemap() {
  const pages = ["", "/faqs", "/blogs", "/about", "/contact", "/privacy-policy", "/disclaimer"];
  return pages.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(site.updated),
    changeFrequency: p === "" ? "weekly" : "yearly",
    priority: p === "" ? 1 : 0.4,
  }));
}
