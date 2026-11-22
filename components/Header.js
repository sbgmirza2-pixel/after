import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="After Motion Z logo" width={36} height={36} priority />
          <span>After Motion Z</span>
        </Link>
        <Nav />
      </div>
    </header>
  );
}
