import Head from "next/head";
import { Header } from "src/components/Header";
import { CommentsComponent } from "src/components/Comments";

const Comments = () => {
  return (
    <div>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <CommentsComponent />
    </div>
  );
};

export default Comments;
