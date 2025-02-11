import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Index = () => {
  return (
    <div
      className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
    >
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <h1>Next.jsで学ぶReact講座</h1>
      <p>JSONPlaceholderのAPIを色々叩いてみる</p>
    </div>
  );
};

export default Index;
