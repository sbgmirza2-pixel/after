import { tips } from "@/lib/content";
import styles from "./Tips.module.css";

export default function Tips() {
  return (
    <section id="tips" className={styles.section}>
      <div className="container">
        <h2 className={`section-title ${styles.title}`}>Tips for Using After Motion Z</h2>

        <div className={styles.grid}>
          {tips.map(([lead, rest]) => (
            <article className={styles.tip} key={lead}>
              <p>
                <strong>{lead}</strong> {rest}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
