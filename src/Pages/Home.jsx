import Hero from "./../Components/Home/Hero";
import Navbar from "./../Components/Layout/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Featured collection comes next */}
      </main>
    </>
  );
}

export default Home;
