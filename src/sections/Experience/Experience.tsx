import "./Experience.css";
import useInView from "../../hooks/useInView";

function Experience() {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section
      className={`experience ${isInView ? "is-visible" : ""}`}
      id="experience"
      ref={ref}
    >
      <div className="container">
        <div className="experience-header">
          <span className="experience-tag">Experience</span>

          <h2 className="experience-title">Beyond The Code</h2>

          <p className="experience-description">
            Building experience through real projects, continuous learning, and
            practical problem-solving.
          </p>
        </div>

        <div className="experience-timeline">
          <div className="experience-item">
            <div className="timeline-dot" />

            <div className="experience-content">
              <span className="experience-date">2025 – Present</span>

              <h3>Web Developer & Creative Designer</h3>

              <h4>Freelance</h4>

              <p>
                Develop and maintain responsive websites and modern web
                applications for startups, small businesses, and freelance
                clients, while creating website graphics, branding materials,
                and other digital assets to deliver cohesive digital solutions.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="timeline-dot" />

            <div className="experience-content">
              <span className="experience-date">2023 – 2025</span>

              <h3>Senior WordPress Developer / Social Media Specialist</h3>

              <h4>EHW Tech</h4>

              <p>
                Led WordPress development across 7 company websites and client
                projects while managing 21 social media channels and digital
                marketing campaigns that contributed to an 85% year-over-year
                sales increase.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="timeline-dot" />

            <div className="experience-content">
              <span className="experience-date">2021 – 2023</span>

              <h3>Site Data Manager / Deputy</h3>

              <h4>WHO Solidarity Trial Vaccine — St. Luke's Medical Center</h4>

              <p>
                Led 10 Data Encoders and Research Assistants supporting 1,000
                vaccine trial participants while managing CASTOR medical records
                and technical operations that contributed to a 96% successful
                study outcome.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="timeline-dot" />

            <div className="experience-content">
              <span className="experience-date">2019 – 2020</span>

              <h3>WordPress Developer</h3>

              <h4>EHW Tech</h4>

              <p>
                Developed and maintained 20+ WordPress websites while managing
                WHM/cPanel hosting, deployments, backups, troubleshooting, and
                SEO optimizations to support reliable web operations.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="timeline-dot" />

            <div className="experience-content">
              <span className="experience-date">2017 – 2019</span>

              <h3>Web & Automation Developer</h3>

              <h4>Digital Edge</h4>

              <p>
                Developed responsive websites across WordPress, Shopify, and
                Squarespace while building Infusionsoft (now Keap) automation
                workflows and email campaigns for client marketing operations.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="timeline-dot" />

            <div className="experience-content">
              <span className="experience-date">2015 – 2017</span>

              <h3>Web Designer</h3>

              <h4>Protos EzyVA Pampanga Inc.</h4>

              <p>
                Designed and implemented WordPress websites, UI/UX mockups,
                landing pages, and marketing funnels while building WooCommerce
                sites and supporting e-commerce and lead-generation activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
