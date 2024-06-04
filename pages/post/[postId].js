import { withPageAuthRequired } from "@auth0/nextjs-auth0";
const post = () => {
  return (
    <div>
      <h1>I am a post</h1>
    </div>
  );
};

export default post;

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
