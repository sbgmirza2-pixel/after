import styles from "./StaticPage.module.css";

// About / Contact / Privacy / Disclaimer pages ka common wrapper
export default function StaticPage({ title, children }) {
  return (
    <div className={styles.page}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
