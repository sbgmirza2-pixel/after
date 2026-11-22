import StaticPage from "@/components/StaticPage";
import { site } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description: `Learn more about ${site.name} and what this website offers.`,
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <StaticPage title="About Us">
      <p>
        {site.name} is an informational website where we share details about the
        app, its features, installation steps, tips, and fixes for common
        problems.
      </p>
      <p>
        Our goal is to keep the information simple, clear, and easy to follow
        for both beginners and regular video editors.
      </p>
    </StaticPage>
  );
}
