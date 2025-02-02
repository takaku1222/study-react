import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Home = (props) => {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>

      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Header />
        <Main page="index" />
        <Footer />
        {props.isShow ? <h1>{props.count}</h1> : null}
        <button onClick={props.handleClick}>ボタン</button>
        <button onClick={props.handleDisplay}>
          {props.isShow ? "非表示" : "表示"}
        </button>
        <input type="text" value={props.text} onChange={props.handleChange} />
        <ul>
          {props.array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
          <button onClick={props.handleAdd}>追加</button>
        </ul>
      </div>
    </>
  );
};

export default Home;
