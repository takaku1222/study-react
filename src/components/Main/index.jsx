import styles from "src/components/Main/main.module.css";
import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
