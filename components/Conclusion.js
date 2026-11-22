import { site } from "@/lib/site";
import { conclusion } from "@/lib/content";
import styles from "./Conclusion.module.css";

export default function Conclusion() {
  return (
    <section id="conclusion" className={styles.section}>
      <div className="container">
        <div className={styles.banner}>
          <h2>Conclusion</h2>
          <p>{conclusion}</p>
          <a className="btn" href={site.downloadUrl} rel="nofollow noopener">
            Download After Motion Z APK
          </a>
        </div>
      </div>
    </section>
  );
}
