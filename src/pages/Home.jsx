import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCards from "../components/FeatureCards";
import Footer from "../components/Footer";
import About from "../components/About";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <FeatureCards />

      <Footer />
    </div>
  );
};

export default Home;
