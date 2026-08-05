import "./About.css";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-container">

        {/* LEFT */}
        <div className="about-left">

          <div className="about-image">

            <div className="about-shape"></div>

            <div className="about-frame">
              <img
                src="/images/about-image.png"
                alt="Andro Cruz"
              />
            </div>

          </div>

          <div className="about-socials">

            <a href="https://github.com/acdev08" target="_blank"
                rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/androcruz08" target="_blank" 
                rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="about-content">

          <span className="section-tag">
            About Me
          </span>

          <h2 className="section-title">
            Building Digital Solutions for Over< br/>10 Years
          </h2>

          <p className="about-description">
            I'm Andro Cruz, an IT graduate and Web Developer with over 10 years of experience building business websites, e-commerce platforms, and modern web applications. I help businesses transform ideas into modern web solutions through clean code, responsive design, and user-focused experiences.
          </p>

          <p className="about-description">
            My experience in Graphic Design and Digital Marketing complements my development expertise, allowing me to create websites that not only perform well but also support business growth.
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