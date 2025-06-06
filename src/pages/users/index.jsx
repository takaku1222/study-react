import Head from "next/head";
import { Header } from "src/components/Header";
import { UsersComponent } from "src/components/Users";
import { SWRConfig } from "swr";

export const getServerSideProps = async () => {
  const USERS_API_URL = `https://jsonplaceholder.typicode.com/users`;
  const users = await fetch(USERS_API_URL);
  const usersData = await users.json();

  return {
    props: {
      [USERS_API_URL]: usersData,
    },
  };
};

const Users = (props) => {
  const { fallback } = props;
  return (
    <div>
      <Head>
        <title>Posts Page</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <Header />
        <UsersComponent />
      </SWRConfig>
    </div>
  );
};

export default Users;
