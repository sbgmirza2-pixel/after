import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="After Motion Z logo" width={40} height={40} />
          <span>{site.name}</span>
        </Link>

        <nav className={styles.links} aria-label="Footer">
          <Link href="/">Home</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/faqs">FAQs</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </nav>
        </div>

        <div className={styles.copy}>
          © {new Date().getFullYear()} {site.name}. All trademarks belong to
          their respective owners.
        </div>
      </div>
    </footer>
  );
}
