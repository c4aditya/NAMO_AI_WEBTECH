import { useState } from "react";
import { FaHome, FaInfoCircle, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <h1 className="logo">NAMO AI</h1>

        {/* Desktop Menu */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <NavItem  text="Home" />

          <NavItem  text="Contact Us" />
          <NavItem text="About Us" />
          <NavItem  text="Portfolio" />
          <NavItem  text="Services" />
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
const NavItem = ({ icon, text }) => (
  <li className="nav-item">
    {icon} <span>{text}</span>
  </li>
);

export default Navbar;
