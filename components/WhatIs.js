import { whatIs } from "@/lib/content";
import styles from "./WhatIs.module.css";

export default function WhatIs() {
  return (
    <section id="what-is" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.side}>
          <h2 className="section-title">What is After Motion Z App?</h2>
        </div>
        <div className={styles.body}>
          <p className={styles.quote}>{whatIs}</p>
        </div>
      </div>
    </section>
  );
}
