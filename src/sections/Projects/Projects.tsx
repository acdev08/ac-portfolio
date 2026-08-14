import "./Projects.css";

import portfolio from "../../assets/projects/img-project1.png";
import bongabon from "../../assets/projects/img-project2.png";
import wellspring from "../../assets/projects/img-project3.png";
import dietcare from "../../assets/projects/img-project4.png";
import creativedesign from "../../assets/projects/img-project5.png";
import guroly from "../../assets/projects/img-project6.png";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <span className="projects-tag">Projects</span>

          <h2 className="projects-title">What I've Built</h2>

          <p className="projects-description">
            Turning ideas into digital experiences through thoughtful design,
            modern development, and real-world solutions.
          </p>
        </div>

        <div className="projects-grid">
          {/* AC PORTFOLIO */}
          <div className="project-card">
            <div className="project-image">
              <img src={portfolio} alt="Personal portfolio website preview" />
            </div>

            <div className="project-content">
              <span className="project-category">Web Development</span>

              <span className="project-stack">React • TypeScript • Vite</span>

              <h3>AC Portfolio</h3>

              <p>
                A modern React portfolio showcasing my experience, skills,
                services, and featured projects.
              </p>

              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  View Website
                </a>

                <a
                  href="https://github.com/acdev08/ac-portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* BONGABON LGU */}
          <div className="project-card">
            <div className="project-image">
              <img src={bongabon} alt="Bongabon LGU website preview" />
            </div>

            <div className="project-content">
              <span className="project-category">WordPress Development</span>

              <span className="project-stack">
                Elementor • PHP • MySQL • API
              </span>

              <h3>Bongabon LGU</h3>

              <p>
                Official municipal website providing public information,
                announcements, and digital services.
              </p>

              <div className="project-links">
                <a
                  href="https://www.bongabonnuevaecija.com.ph"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Website
                </a>
              </div>
            </div>
          </div>

          {/* WELLSPRING */}
          <div className="project-card">
            <div className="project-image">
              <img
                src={wellspring}
                alt="Wellspring Tutorials website preview"
              />
            </div>

            <div className="project-content">
              <span className="project-category">WordPress Development</span>

              <span className="project-stack">Spectra • PHP • MySQL</span>

              <h3>Wellspring Tutorials</h3>

              <p>
                Brochure-style tutoring website showcasing programs, services,
                and online enrollment inquiries.
              </p>

              <div className="project-links">
                <a
                  href="https://wellspringtutorials.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Website
                </a>
              </div>
            </div>
          </div>

          {/* DIETCARE */}
          <div className="project-card">
            <div className="project-image">
              <img src={dietcare} alt="DietCare Australia website preview" />
            </div>

            <div className="project-content">
              <span className="project-category">WordPress Development</span>

              <span className="project-stack">
                WooCommerce • PHP • MySQL • API
              </span>

              <h3>DietCare Mackay</h3>

              <p>
                Healthcare e-commerce website built with WordPress and
                WooCommerce, featuring Stripe and API integrations.
              </p>

              <div className="project-links">
                <a
                  href="https://dietcare.com.au"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Website
                </a>
              </div>
            </div>
          </div>

          {/* CREATIVE DESIGN */}
          <div className="project-card">
            <div className="project-image">
              <img
                src={creativedesign}
                alt="Creative design portfolio preview"
              />
            </div>

            <div className="project-content">
              <span className="project-category">Creative Design</span>

              <span className="project-stack">
                Photoshop • Illustrator • Figma • Canva
              </span>

              <h3>Digital Work Collection</h3>

              <p>
                A collection of brand identity, social media creatives, web
                graphics, and digital marketing materials.
              </p>

              <div className="project-links">
                <a
                  href="https://www.behance.net/gallery/254144971/AC-Digital-Work-Collection-%282026%29"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Designs
                </a>
              </div>
            </div>
          </div>

          {/* GUROLY */}
          <div className="project-card">
            <div className="project-image">
              <img src={guroly} alt="Guroly website preview" />
            </div>

            <div className="project-content">
              <span className="project-category">Web Development</span>

              <span className="project-stack">
                React • TypeScript • Vite • Node.js
              </span>

              <h3>Guroly</h3>

              <p>
                A tutor marketplace web app connecting students and educators
                through tutor discovery and booking.
              </p>

              <div className="project-links">
                <span className="project-coming-soon">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
