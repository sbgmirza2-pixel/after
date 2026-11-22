import { installSteps } from "@/lib/content";
import styles from "./HowToInstall.module.css";

export default function HowToInstall() {
  return (
    <section id="how-to-install" className={styles.band}>
      <div className={`container ${styles.inner}`}>
        <h2 className="section-title">How to Download and Install After Motion Z?</h2>
        <ol className={styles.steps}>
          {installSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
