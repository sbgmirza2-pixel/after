import { features, featuresIntro } from "@/lib/content";
import styles from "./Features.module.css";

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <h2 className="section-title">Features of After Motion Z App</h2>
          <p className="lead">{featuresIntro}</p>
        </div>

        <div className={styles.grid}>
          {features.map(([title, text], i) => (
            <div className={styles.card} key={title}>
              <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
