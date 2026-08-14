import "./Hero.css";
import heroImage from "../../assets/images/hero-image-ac.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available For Projects
          </div>

          <span className="hero-greeting">Hello, World</span>

          <h1 className="hero-title">I'm Andro Cruz</h1>

          <h2 className="hero-role">Web Developer & Creative Designer</h2>

          <p className="hero-description">
            I build modern websites and web applications using WordPress and
            modern technologies, delivering complete digital solutions for
            businesses.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-glow" />

          <div className="hero-frame">
            <img src={heroImage} alt="Andro Cruz" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
