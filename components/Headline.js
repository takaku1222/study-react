import styles from "../styles/Home.module.css";

export function Headline(props) {
  console.log(props);
  return (
    <div>
      <h1 className={styles.title}>{props.page} Page</h1>
      <ol>
        <li>
          Get started by editing <code>pages/{props.page}.js</code>.
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>
    </div>
  );
}
