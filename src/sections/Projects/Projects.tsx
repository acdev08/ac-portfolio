import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">

        <div className="projects-header">
          <span className="section-tag">
            Featured Projects
          </span>

          <h2 className="section-title">
            Projects I've Built
          </h2>

          <p className="projects-description">
            A collection of projects I've developed for businesses,
            government agencies, educational institutions, and international
            clients using modern web technologies and WordPress.
          </p>
        </div>

        <div className="projects-grid">

          {/* Personal Portfolio */}

          <div className="project-card">

            <div className="project-image">
              Project Preview
            </div>

            <div className="project-content">

              <span className="project-stack">
                React • TypeScript • Vite
              </span>

              <h3>Personal Portfolio</h3>

              <p>
                A modern portfolio website showcasing my experience,
                technical skills, services, and featured projects while
                demonstrating React and TypeScript development.
              </p>

              <div className="project-links">
                <a href="#">Live Demo</a>
                <a href="#">GitHub</a>
              </div>

            </div>

          </div>

          {/* Bongabon LGU */}

          <div className="project-card">

            <div className="project-image">
              Project Preview
            </div>

            <div className="project-content">

              <span className="project-stack">
                Government Website • WordPress
              </span>

              <h3>Bongabon LGU Website</h3>

              <p>
                Official municipal government website providing online
                public information, announcements, and digital services
                through a modern content management system.
              </p>

              <div className="project-links">
                <a
                  href="https://www.bongabonnuevaecija.com.ph"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Website
                </a>
              </div>

            </div>

          </div>

          {/* Wellspring */}

          <div className="project-card">

            <div className="project-image">
              Project Preview
            </div>

            <div className="project-content">

              <span className="project-stack">
                Education Platform • WordPress
              </span>

              <h3>Wellspring Tutorials</h3>

              <p>
                Educational platform designed to help students access
                learning resources, tutoring services, and academic support
                through an intuitive online experience.
              </p>

              <div className="project-links">
                <a
                  href="https://wellspringtutorials.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Website
                </a>
              </div>

            </div>

          </div>

          {/* DietCare */}

          <div className="project-card">

            <div className="project-image">
              Project Preview
            </div>

            <div className="project-content">

              <span className="project-stack">
                WooCommerce • Stripe • PayPal • API
              </span>

              <h3>DietCare Australia</h3>

              <p>
                Healthcare e-commerce website rebuilt from the ground up,
                featuring WooCommerce, payment gateway integration,
                third-party APIs, and performance optimization.
              </p>

              <div className="project-links">
                <a
                  href="https://dietcare.com.au"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Website
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;