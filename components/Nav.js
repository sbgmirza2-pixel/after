"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const links = [
  ["/", "Home"],
  ["/blogs", "Blogs"],
  ["/faqs", "FAQs"],
];

// Active page highlight karne ke liye chhota client component
export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="Main">
      {links.map(([href, label]) => {
        const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={active ? styles.active : undefined}
            aria-current={active ? "page" : undefined}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
