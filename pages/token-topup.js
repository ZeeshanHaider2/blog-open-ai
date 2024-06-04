import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../components/AppLayout";
const TokenTopup = () => {
  return (
    <div>
      <h1>This is TokenTopup page</h1>
    </div>
  );
};
TokenTopup.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};
export default TokenTopup;

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
