import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Event Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <h1 className="logo">NAMO AI WEBTECH</h1>

        {/* Desktop Menu */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
         
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/About_Us">ABOUT US </Link></li>

        <li><Link to="/portfoliyo">SERVICES</Link></li>
        <li><Link to="/portfoliyo">PROJECT</Link></li>
        <li><Link to="/contact_us">CONTACT US </Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="menu-btn">
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

// Reusable NavItem Component
const NavItem = ({ text }) => (
  <li className="nav-item">
    <span>{text}</span>
  </li>
);

export default Navbar;
