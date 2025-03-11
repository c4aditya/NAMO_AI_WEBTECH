import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import { HeroParallaxDemo } from "./components/pages/Products";
import Contact from "./components/pages/ContactUs";
import About from "./components/pages/Aboutus";
import ServicesPage from "./components/pages/ServicesPage";
import ScrollToTop from "./components/ScrollToTop"; 
import Websitedev from "./components/servicesPages/Websitedev";
import Digitalmarkting from "./components/servicesPages/DigitalMarkting";
import AppDevelopment from "./components/servicesPages/Appdevelpoment";
import "./components/main.css";
// import ServicesPage from "./components/pages/ServicesPage";
import UI from "./components/servicesPages/UI"; 

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
        <Route path="/servies"  element={<ServicesPage/>}/>
        <Route path="/Websitedev" element={<Websitedev/>} />
        <Route path="/digitalmarkting" element={<Digitalmarkting/>} />
        <Route path="/appdevelopment" element={<AppDevelopment/>} />
        <Route path="/services" element={<ServicesPage/>}></Route>
        <Route path="/UIdevs" element={<UI/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
