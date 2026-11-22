import StaticPage from "@/components/StaticPage";
import { site } from "@/lib/site";

export const metadata = {
  title: "Disclaimer",
  description: `Disclaimer for ${site.name}.`,
  alternates: { canonical: "/disclaimer" },
};

export default function Disclaimer() {
  return (
    <StaticPage title="Disclaimer">
      <p>
        {site.name} is an independent informational website. All app names,
        logos, and trademarks belong to their respective owners, and we are not
        officially affiliated with them.
      </p>
      <p>
        The information on this website is provided for general purposes only.
        Always download apps from trusted sources and check the details before
        installing. You use any downloaded file at your own responsibility.
      </p>
    </StaticPage>
  );
}
