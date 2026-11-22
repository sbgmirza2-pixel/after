import Link from "next/link";
import { faqs as allFaqs } from "@/lib/content";
import styles from "./Faqs.module.css";

// limit: home page par sirf pehle kuch FAQs dikhane ke liye. Bina limit ke sab dikhte hain.
export default function Faqs({ limit, asPageHeading = false }) {
  const items = limit ? allFaqs.slice(0, limit) : allFaqs;
  const Heading = asPageHeading ? "h1" : "h2";

  return (
    <section id="faqs" className={styles.section}>
      <div className={`container ${asPageHeading ? styles.stack : styles.grid}`}>
        <div className={asPageHeading ? styles.pageHead : styles.side}>
          <Heading className="section-title">FAQs</Heading>
        </div>

        <div className={styles.list}>
          {items.map(([question, answer]) => (
            <details className={styles.item} key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}

          {limit && allFaqs.length > limit && (
            <Link href="/faqs" className={`btn ${styles.more}`}>
              View more FAQs
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
