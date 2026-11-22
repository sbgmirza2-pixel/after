import { appInfo } from "@/lib/site";
import styles from "./AppInfo.module.css";

export default function AppInfo() {
  return (
    <section id="app-info" className={styles.section}>
      <div className="container">
        <h2 className="section-title">App Information</h2>
        <dl className={styles.grid}>
          {appInfo.map(([label, value]) => (
            <div className={styles.tile} key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
