import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.link}>
        Index
      </Link>
      <Link href="/about" className={styles.link}>
        About
      </Link>
    </header>
  );
}
