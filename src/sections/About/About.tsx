import "./About.css";
import aboutImage from "../../assets/images/about-image.png";

import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-container">
        <div className="about-left">
          <div className="about-image">
            <div className="about-shape" />

            <div className="about-frame">
              <img src={aboutImage} alt="Andro Cruz" className="about-photo" />
            </div>
          </div>

          <div className="about-socials">
            <a
              href="https://github.com/acdev08"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/androcruz08"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.facebook.com/andro.cruz.7"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div className="about-content">
          <span className="about-tag">About Me</span>

          <h2 className="about-title">
            Building Digital Solutions for Over 10 Years
          </h2>

          <p className="about-description">
            I'm an IT graduate and Web Developer & Creative Designer with over
            10 years of experience building business websites, e-commerce
            platforms, and modern web applications. My expertise includes
            WordPress development, front-end development, website maintenance,
            performance optimization, technical SEO, hosting management, and
            website security.
          </p>

          <p className="about-description">
            Beyond development, I also create digital assets including website
            graphics, branding materials, and email campaigns, allowing me to
            deliver complete digital solutions that support business growth.
          </p>

          <div className="about-info">
            <div className="info-card">
              <h3>10+</h3>
              <span>Years Of Experience</span>
            </div>

            <div className="info-card">
              <h3>50+</h3>
              <span>Projects Delivered</span>
            </div>

            <div className="info-card">
              <h3>20+</h3>
              <span>Core Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
