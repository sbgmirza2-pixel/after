import { whyChoose, whyChooseIntro } from "@/lib/content";
import styles from "./WhyChoose.module.css";

export default function WhyChoose() {
  return (
    <section id="why-choose" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.side}>
          <h2 className="section-title">Why Choose After Motion Z Editing App?</h2>
          <p className={styles.intro}>{whyChooseIntro}</p>
        </div>

        <ul className={styles.list}>
          {whyChoose.map(([title, text]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
