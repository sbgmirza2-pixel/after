import { comparison } from "@/lib/content";
import styles from "./Comparison.module.css";

export default function Comparison() {
  return (
    <section id="comparison" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <h2 className="section-title">After Motion Z vs. Other Editing Apps</h2>
        </div>

        <div className={styles.grid}>
          {comparison.map(([name, text]) => (
            <article className={styles.card} key={name}>
              <div className={styles.versus}>
                <span className={styles.us}>After Motion Z</span>
                <b>VS</b>
                <h3>{name}</h3>
              </div>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
