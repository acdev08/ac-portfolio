import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-image">
          <img
          src="/images/about-image.png"
          alt="Andro Cruz"
          />
        </div>

        <div className="about-content">
          <span className="section-tag">
          About Me
          </span>

          <h2 className="section-title">
          Passionate About Building Digital Experiences
          </h2>

          <p className="about-description">
          I'm Andro Cruz, a passionate Web Developer focused on creating
          modern, responsive, and user-friendly websites. I enjoy turning
          ideas into real digital products through clean code, thoughtful
          design, and continuous learning.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;