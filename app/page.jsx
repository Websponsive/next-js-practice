import "@style/landing.css";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <>
      <section className="banner">
          <h1 className="dark header">Discover Your Dream Car Today</h1>
      </section>
      <Feed/>
    </>
  )
}

export default Home