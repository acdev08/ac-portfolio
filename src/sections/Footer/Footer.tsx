import "./Footer.css";
import useInView from "../../hooks/useInView";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

function Footer() {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <footer className={`footer ${isInView ? "is-visible" : ""}`} ref={ref}>
      <div className="container">
        <div className="footer-main">
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Tech Stack</a>
            <a href="#contact">Contact</a>
          </nav>

          <nav className="footer-social" aria-label="Social links">
            <a
              href="https://github.com/acdev08"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/androcruz08/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:revelz08@gmail.com" aria-label="Email">
              <Mail size={17} />
            </a>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>All Rights Reserved.</span>
          <span>© 2026 Andro Cruz</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
