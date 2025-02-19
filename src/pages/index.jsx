import Head from "next/head";
import { Header } from "src/components/Header";

const Index = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <h1 className="text-xl">Next.jsで学ぶReact講座</h1>
      <p className="text-xl">JSONPlaceholderのAPIを色々叩いてみる</p>
    </div>
  );
};

export default Index;
