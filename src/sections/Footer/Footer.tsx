import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  Mail,
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-content">

          <h3>Andro Cruz</h3>

          <span>
            Full Stack Web Developer
          </span>

          <p>
            Building modern websites and web applications
            with clean code, scalable solutions, and
            exceptional user experiences.
          </p>

          <div className="footer-social">

            <a
              href="https://github.com/acdev08"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:your@email.com">
              <Mail size={18} />
            </a>

          </div>

          <div className="footer-bottom">

            © 2026 Andro Cruz.
            All Rights Reserved.

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;