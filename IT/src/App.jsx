import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import { HeroParallaxDemo } from "./components/pages/Products";
import Contact from "./components/pages/ContactUs";
import About from "./components/pages/Aboutus";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Import ScrollToTop

import "./components/main.css";

function App() {
  return (
    <Router>
      <ScrollToTop /> 
            <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfoliyo" element={<HeroParallaxDemo />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/About_Us" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
