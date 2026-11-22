import JsonLd from "@/components/JsonLd";
import Faqs from "@/components/Faqs";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata = {
  title: "FAQs",
  description: `Frequently asked questions about ${site.name} APK for Android.`,
  alternates: { canonical: "/faqs" },
};

export default function FaqsPage() {
  return (
    <>
      <JsonLd faqs={faqs} />
      <Faqs asPageHeading />
    </>
  );
}
