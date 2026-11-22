import StaticPage from "@/components/StaticPage";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description: `Get in touch with the ${site.name} team.`,
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <StaticPage title="Contact Us">
      <p>
        Have a question, a broken link to report, or feedback? Send us an email
        and we will reply as soon as we can.
      </p>
      <p>
        {/* Apni email yahan likhein */}
        Email: <a href="mailto:contact@example.com">contact@example.com</a>
      </p>
    </StaticPage>
  );
}
