import { site } from "@/lib/site";
import { intro } from "@/lib/content";
import ShareButton from "./ShareButton";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.inner}>
          <h1 className={styles.title}>After Motion Z</h1>
          <p className={styles.sub}>
            APK Download Version ({site.version}) for Android
          </p>

          <div className={styles.intro}>
            {intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className={styles.actions}>
            <a className="btn" href={site.downloadUrl} rel="nofollow noopener">
              Download APK
            </a>
            <ShareButton />
          </div>
        </div>
      </div>
    </section>
  );
}
