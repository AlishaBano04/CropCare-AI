import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCards from "../components/FeatureCards";
import Chatbox from "../components/Chatbox";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureCards />
      <Chatbox />
    </div>
  );
};

export default Home;
