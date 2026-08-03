import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
<div className="hero-content">
  <span className="hero-greeting">
    Hi, I'm
  </span>

  <h1 className="hero-title">
    Andro Cruz
  </h1>

  <h2 className="hero-role">
    Full Stack Web Developer
  </h2>

  <p className="hero-description">
    I build modern, responsive, and user-friendly web experiences with a focus on clean design and high-quality development.
  </p>

  <div className="hero-buttons">
    <a href="#portfolio" className="primary-btn">
  View Projects
    </a>

  <a href="#contact" className="secondary-btn">
  Contact Me
    </a>
  </div>
</div>
      </div>

        <div className="hero-image">
    <img
    src="/images/hero-image.png"
    alt="Andro Cruz"/>
</div>
      </div>
    </section>
  );
}

export default Hero;