import { problems, problemsIntro } from "@/lib/content";
import styles from "./Problems.module.css";

export default function Problems() {
  return (
    <section id="problems" className={styles.section}>
      <div className="container">
        <h2 className="section-title">Common Problems and Their Solutions</h2>
        <p className="lead">{problemsIntro}</p>

        <div className={styles.grid}>
          {problems.map(([title, text]) => (
            <article className={styles.card} key={title}>
              <h3>{title}</h3>
              <div className={styles.fix}>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
