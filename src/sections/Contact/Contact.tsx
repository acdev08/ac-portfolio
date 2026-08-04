import "./Contact.css";

import {
  Mail,
  MapPin,
  Download,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">

          <span className="section-tag">
            Contact
          </span>

          <h2 className="section-title">
            Let's Build Something Great Together
          </h2>

          <p className="contact-description">
            I'm currently open to full-time opportunities, freelance
            projects, and exciting collaborations. If you're looking for
            a passionate developer to help build your next digital
            product, I'd love to hear from you.
          </p>

          <div className="contact-info">

            <div className="contact-item">
              <Mail size={20} />
              <span>your@email.com</span>
            </div>

            <div className="contact-item">
              <MapPin size={20} />
              <span>Metro Manila, Philippines</span>
            </div>

            <div className="contact-item">
              <FaGithub size={20} />
              <a
                href="https://github.com/acdev08"
                target="_blank"
                rel="noreferrer"
              >
                github.com/acdev08
              </a>
            </div>

            <div className="contact-item">
              <FaLinkedin size={20} />
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>

          </div>

          <div className="contact-buttons">

            <a
              href="mailto:your@email.com"
              className="btn-primary"
            >
              <Mail size={18} />
              Send Email
            </a>

            <a
              href="#"
              className="btn-secondary"
            >
              <Download size={18} />
              Download Resume
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;