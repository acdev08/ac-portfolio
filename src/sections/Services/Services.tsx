import "./Services.css";

import {
  Globe,
  Wrench,
  Rocket,
} from "lucide-react";

import { FaWordpress } from "react-icons/fa";

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">

        <div className="services-header">
          <span className="section-tag">
            Services
          </span>

          <h2 className="section-title">
            Digital Solutions for Your Business
          </h2>

          <p className="services-description">
            I help businesses and entrepreneurs build modern websites,
            improve their online presence, and create digital solutions
            that are scalable, secure, and built for long-term success.
          </p>
        </div>

        <div className="services-grid">

          <div className="service-card">
            <div className="service-icon">
              <Globe size={34} />
            </div>

            <h3>Website Development</h3>

            <p>
              Build modern, responsive, and high-performance websites
              tailored to business goals, from landing pages to complete
              company websites.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FaWordpress size={34} />
            </div>

            <h3>WordPress Solutions</h3>

            <p>
              Develop custom WordPress websites using Elementor,
              Gutenberg, WooCommerce, and provide scalable content
              management solutions.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <Wrench size={34} />
            </div>

            <h3>Website Care & Support</h3>

            <p>
              Keep websites secure, updated, and running smoothly through
              maintenance, hosting & domain management, backups,
              migrations, and technical support.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <Rocket size={34} />
            </div>

            <h3>Website Performance & SEO</h3>

            <p>
              Improve website speed, Core Web Vitals, technical SEO,
              accessibility, and overall user experience to maximize
              online performance.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;