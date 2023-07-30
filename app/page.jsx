import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          Create your funny experience post
        </span>
      </h1>
      <p className="desc text-center">
        MyFunnyExperiences is an online funny experience posting site where you
        can find and share funny experiences online.
      </p>
      {/* Feed component */}
      <Feed />
    </section>
  );
};

export default Home;
