import Head from "next/head";
import { Header } from "src/components/Header";
import { Posts as PostsComponent } from "src/components/Posts";

const Posts = () => {
  return (
    <>
      <Head>
        <title>Posts Page</title>
      </Head>

      <div>
        <Header />
        <PostsComponent />
      </div>
    </>
  );
};

export default Posts;
