import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Advantages from "./components/Advantages";
import Customizable from "./components/Customizable";
import Testinomial from "./components/Testinomial";
import FaqSection from "./components/FaqSection";
import GetStartedSection from "./components/GetStartedSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-[95%] xl:w-[1090px] bg-[#fefefe] mx-auto font-clash">
        <Navbar />
        <Hero />
        <Features />
        <Advantages />
        <Customizable />
        <Testinomial />
        <FaqSection />
        <GetStartedSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
