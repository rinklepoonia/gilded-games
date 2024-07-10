import logo from "./logo.svg";
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

function App() {
  return (
    <div className="App">
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
