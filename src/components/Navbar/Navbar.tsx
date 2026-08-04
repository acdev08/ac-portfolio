import "./Navbar.css";
import Logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo">
      <img src={Logo} alt="Andro Cruz Logo" />
        </a>

        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#experience">Experience</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#skills">Tech Stack</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button className="resume-btn">
          <a href="#contact">Hire Me</a>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;