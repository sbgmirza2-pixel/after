import StaticPage from "@/components/StaticPage";
import { site } from "@/lib/site";

export const metadata = {
  title: "Blogs",
  description: `Latest articles and guides about ${site.name}.`,
  alternates: { canonical: "/blogs" },
};

export default function Blogs() {
  return (
    <StaticPage title="Blogs">
      <p>Blog posts will be listed here.</p>
    </StaticPage>
  );
}
