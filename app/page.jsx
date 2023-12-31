import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br />
        <span className="orange_gradient text-center">
          Create your funny experience post
        </span>
      </h1>
      <p className="desc text-center">
        ShareMoments is an online funny moments  posting site where you can
        find and share funny moments online.
      </p>
      {/* Feed component */}
      <Feed />
    </section>
  );
};

export default Home;
