import "./Services.css";

import { Globe, Wrench, Palette } from "lucide-react";
import { FaWordpress } from "react-icons/fa";

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <span className="services-tag">Services</span>

          <h2 className="services-title">What I Deliver</h2>

          <p className="services-description">
            Development builds the foundation. Creativity shapes the
            experience. Optimization keeps it growing.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <Globe size={34} />
            </div>

            <h3>Website Development</h3>

            <p>
              Modern business websites, web applications, and e-commerce
              solutions built with responsive design, clean code, and modern
              technologies.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FaWordpress size={34} />
            </div>

            <h3>WordPress Development</h3>

            <p>
              Custom WordPress websites, WooCommerce solutions, CMS
              customization, plugin integration, and scalable websites
              tailored to your business needs.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <Wrench size={34} />
            </div>

            <h3>Website Care & Optimization</h3>

            <p>
              Website maintenance, technical SEO, performance optimization,
              security updates, hosting, domain management, backups, and
              ongoing support.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <Palette size={34} />
            </div>

            <h3>Creative Design</h3>

            <p>
              Creative website design, branding assets, digital graphics, and
              marketing materials that strengthen your brand and enhance user
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;