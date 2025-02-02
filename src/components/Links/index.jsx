import styles from "src/components/Links/Links.module.css";

export function Links({ items }) {
  return (
    <div className={styles.ctas}>
      {items.map((item) => {
        return (
          <a
            key={item.href}
            href={item.href}
            className={styles.primary}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>{item.title}</p>
          </a>
        );
      })}
    </div>
  );
}
