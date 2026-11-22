"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import styles from "./ShareButton.module.css";

const icons = {
  whatsapp: <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
  telegram: (
    <>
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </>
  ),
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  x: <path d="M4 4l7.5 10L4 20h2l6.3-5.4L17 20h3l-7.9-10.6L19.5 4h-2l-5.7 4.9L8 4H4z" />,
};

export default function ShareButton() {
  const ref = useRef(null);
  const [url, setUrl] = useState(site.url);
  const [copied, setCopied] = useState(false);

  // Asli page ka link (browser mein)
  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  // Bahar click karne par ya Esc dabane par apne aap band
  useEffect(() => {
    const close = () => {
      if (ref.current) ref.current.open = false;
    };
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) close();
    };
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const u = encodeURIComponent(url);
  const t = encodeURIComponent(`${site.name} APK for Android`);

  const targets = [
    ["WhatsApp", "whatsapp", `https://wa.me/?text=${t}%20${u}`],
    ["Telegram", "telegram", `https://t.me/share/url?url=${u}&text=${t}`],
    ["Facebook", "facebook", `https://www.facebook.com/sharer/sharer.php?u=${u}`],
    ["X", "x", `https://twitter.com/intent/tweet?url=${u}&text=${t}`],
  ];

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        if (ref.current) ref.current.open = false;
      }, 1200);
    } catch {
      /* clipboard allowed nahi */
    }
  }

  return (
    <details className={styles.share} ref={ref}>
      <summary className={styles.button}>
        <span className={styles.badge}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <path d="M8.6 10.6l6.8-4M8.6 13.4l6.8 4" />
          </svg>
        </span>
        Share
        <svg className={styles.chev} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>

      <div className={styles.panel}>
        <ul className={styles.tiles}>
          {targets.map(([label, key, href]) => (
            <li key={key}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                data-brand={key}
                onClick={() => ref.current && (ref.current.open = false)}
              >
                <span className={styles.ico}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill={key === "x" ? "currentColor" : "none"} stroke={key === "x" ? "none" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {icons[key]}
                  </svg>
                </span>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.copyRow}>
          <span className={styles.link} title={url}>
            {url.replace(/^https?:\/\//, "")}
          </span>
          <button type="button" onClick={copy} className={copied ? styles.done : undefined}>
            {copied ? "Copied" : "Copy link"}
          </button>
        </div>
      </div>
    </details>
  );
}
