import { site, appInfo } from "@/lib/site";

// Google ke liye structured data.
// app=true: SoftwareApplication schema. faqs: sirf wahi FAQs do jo page par dikh rahe hon.
export default function JsonLd({ app = false, faqs = [] }) {
  const data = [];

  if (app) {
    data.push({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: site.name,
      operatingSystem: "Android 5.0 and up",
      applicationCategory: "MultimediaApplication",
      softwareVersion: appInfo.find(([k]) => k === "Version")[1],
      description: site.description,
    });
  }

  if (faqs.length) {
    data.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
