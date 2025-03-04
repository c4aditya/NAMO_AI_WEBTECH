import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
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

  // Window Resize Event Listener to hide menu on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsopen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Disable scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }
  }, [isOpen]);

  function openNavbar() {
    setIsopen(!isOpen);
  }

  function closeNav() {
    setIsopen(false);
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <h1 className="logo">NAMO AI WEBTECH</h1>
          <ul className="nav-links">
            <li><Link to="/" onClick={closeNav}>HOME</Link></li>
            <li><Link to="/About_Us" onClick={closeNav}>ABOUT US</Link></li>
            <li><Link to="/portfoliyo" onClick={closeNav}>SERVICES</Link></li>
            <li><Link to="/portfoliyo" onClick={closeNav}>PROJECT</Link></li>
            <li><Link to="/contact_us" onClick={closeNav}>CONTACT US</Link></li>
          </ul>

          <button onClick={openNavbar} className="menu-btn">
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>

      {isOpen && window.innerWidth <= 900 && (
        <div className="main-nav-link-open show">
          <div className="nav-links-ham">
            <ul>
              <li><Link to="/" onClick={closeNav}>HOME</Link></li>
              <li><Link to="/About_Us" onClick={closeNav}>ABOUT US</Link></li>
              <li><Link to="/portfoliyo" onClick={closeNav}>SERVICES</Link></li>
              <li><Link to="/portfoliyo" onClick={closeNav}>PROJECT</Link></li>
              <li><Link to="/contact_us" onClick={closeNav}>CONTACT US</Link></li>
            </ul>
            <div onClick={closeNav} className="cross">
              <RxCross1 />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
