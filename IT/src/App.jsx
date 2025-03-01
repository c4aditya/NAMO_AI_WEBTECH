import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
// import { PinContainer } from "./components/pages/ContainerScroll";
// import ThreeDCardDemo from "./components/pages/ThreeDCardDemo";
import { HeroParallaxDemo } from "./components/pages/Products";
import Contact from "./components/pages/ContactUs";
import About from "./components/pages/Aboutus"


import "./components/main.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfoliyo" element={<HeroParallaxDemo/>} />
       
        <Route path="/contact_us" element={<Contact/>}/>
        <Route path="/About_Us" element={<About/>}/>
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
