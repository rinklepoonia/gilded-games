import { useEffect } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Utility from "./components/Utility";
import Earn from "./components/Earn";
import ParaGilded from "./components/ParaGilded";
import Glid from "./components/Glid";
import Uniswap from "./components/Uniswap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Powered from "./components/Powered";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1200,
    });
    Aos.refresh();
  });
  return (
    <div className="App overflow-hidden">
      <HeroSection />
      <Utility />
      <Earn />
      <ParaGilded />
      <Glid />
      <Roadmap />
      <Uniswap />
      <Powered />
      <Footer />
    </div>
  );
}

export default App;
