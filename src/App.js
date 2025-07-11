import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import HowWeWork from "./components/HowWeWork";
import OurImpact from "./components/OurImpact";
import OurInitiatives from "./components/OurInitiatives";
import OurPrograms from "./components/OurPrograms";
import VoicesAndPartners from "./components/VoicesAndPartners";

function App() {
  return (
    <>
      <Header />
      <Home />
      <AboutUs />
      <OurPrograms />
      <HowWeWork />
      <OurInitiatives />
      <OurImpact />
      <VoicesAndPartners />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
