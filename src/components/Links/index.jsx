import styles from "src/components/Links/Links.module.css";

export const Links = (props) => {
  return (
    <div className={styles.ctas}>
      {props.items.map((item) => {
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
};
