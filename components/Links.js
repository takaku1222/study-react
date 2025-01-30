import styles from "./Links.module.css";

const ITEMS = [
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy now",
  },
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Read our docs",
  },
];

export function Links() {
  return (
    <div className={styles.ctas}>
      {ITEMS.map((item) => {
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
