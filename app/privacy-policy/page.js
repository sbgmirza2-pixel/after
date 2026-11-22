import StaticPage from "@/components/StaticPage";
import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy of ${site.name}.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function Privacy() {
  return (
    <StaticPage title="Privacy Policy">
      <p>
        We respect your privacy. This website does not require registration and
        does not ask you for personal information to read its content.
      </p>
      <h2>Information we collect</h2>
      <p>
        We may collect basic, non-personal data such as browser type, pages
        visited, and approximate location through analytics tools, to improve
        the website.
      </p>
      <h2>Cookies</h2>
      <p>
        Cookies may be used by us or by third-party services (such as analytics
        or advertising) to understand traffic and show relevant content. You
        can disable cookies in your browser settings.
      </p>
      <h2>External links</h2>
      <p>
        This website may link to other websites. We are not responsible for the
        privacy practices of those sites.
      </p>
      <h2>Contact</h2>
      <p>If you have questions about this policy, please use our contact page.</p>
    </StaticPage>
  );
}
