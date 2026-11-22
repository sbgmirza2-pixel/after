import styles from "./Toc.module.css";

const items = [
  ["app-info", "App Information"],
  ["what-is", "What is After Motion Z App?"],
  ["features", "Features of After Motion Z App"],
  ["how-to-install", "How to Download and Install After Motion Z?"],
  ["tips", "Tips for Using After Motion Z"],
  ["why-choose", "Why Choose After Motion Z Editing App?"],
  ["comparison", "After Motion Z vs. Other Editing Apps"],
  ["problems", "Common Problems and Their Solutions"],
  ["conclusion", "Conclusion"],
  ["faqs", "FAQs"],
];

export default function Toc() {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <nav className={styles.box} aria-label="Table of contents">
          <h2 className={styles.title}>Table of Contents</h2>
          <ol className={styles.list}>
            {items.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
