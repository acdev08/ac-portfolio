import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">

        {/* LEFT */}
        <div className="hero-content">

          <div className="hero-badge">
          <span className="badge-dot"></span>
          Available For Projects
        </div>< br/>

          <span className="hero-greeting">
            Hello, World
          </span>

          <h1 className="hero-title">
            I'm Andro Cruz
          </h1>

          <h2 className="hero-role">
            Web Developer
          </h2>

          <p className="hero-description">
            I build modern websites and web applications using WordPress and modern technologies, delivering complete digital solutions for businesses.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-btn"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="secondary-btn"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-image-wrapper">

          {/* Purple Glow */}
          <div className="hero-glow"></div>

          {/* Frame */}
          <div className="hero-frame">

            <img
              src="/images/hero-image-ac.png"
              alt="Andro Cruz"
              className="hero-image"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;