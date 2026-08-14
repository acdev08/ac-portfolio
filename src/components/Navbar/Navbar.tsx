import { useState } from "react";
import "./Navbar.css";

import { Menu, X } from "lucide-react";

import Logo from "../../assets/logo.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo" onClick={closeMenu}>
          <img src={Logo} alt="Andro Cruz Logo" />
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>

          <li>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" onClick={closeMenu}>
              Tech Stack
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>

          <li className="mobile-cta">
            <a href="#contact" onClick={closeMenu}>
              Let's Talk
            </a>
          </li>
        </ul>

        <a href="#contact" className="resume-btn">
          Let's Talk
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
