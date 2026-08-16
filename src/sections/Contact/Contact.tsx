import "./Contact.css";
import useInView from "../../hooks/useInView";

import { Mail, MapPin, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section
      className={`contact ${isInView ? "is-visible" : ""}`}
      id="contact"
      ref={ref}
    >
      <div className="container">
        <div className="contact-header">
          <span className="contact-tag">Contact</span>

          <h2 className="contact-title">Let's Work Together</h2>

          <p className="contact-description">
            Have a project in mind, an opportunity to discuss, or simply want to
            connect? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card contact-cta">
            <span className="contact-card-label">Get In Touch</span>

            <h3>Have a Project in Mind?</h3>

            <p>
              I'm open to full-time opportunities, freelance projects, and
              meaningful collaborations. Let's create something useful,
              thoughtful, and impactful together.
            </p>

            <div className="contact-buttons">
              <a
                href="mailto:revelz08@gmail.com"
                className="contact-primary-btn"
              >
                <Mail size={18} />
                Send Email
              </a>

              <a
                href="https://drive.google.com/file/d/1R31n_N0EXzkLxwXS0GD1_1Z-jmk2dnOM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-secondary-btn"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-card-label">Contact Information</span>

            <div className="contact-info">
              <div className="contact-item">
                <Mail size={20} />

                <div>
                  <span className="contact-item-label">Email</span>

                  <a href="mailto:revelz08@gmail.com">revelz08@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <MapPin size={20} />

                <div>
                  <span className="contact-item-label">Location</span>

                  <span>Metro Manila, Philippines</span>
                </div>
              </div>

              <div className="contact-item">
                <FaGithub size={20} />

                <div>
                  <span className="contact-item-label">GitHub</span>

                  <a
                    href="https://github.com/acdev08"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/acdev08
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <FaLinkedin size={20} />

                <div>
                  <span className="contact-item-label">LinkedIn</span>

                  <a
                    href="https://www.linkedin.com/in/androcruz08/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
