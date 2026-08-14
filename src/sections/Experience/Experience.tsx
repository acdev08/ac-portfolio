import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">
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
              <span className="experience-date">2023 – 2025</span>

              <h3>Senior WordPress Developer / Social Media Specialist</h3>

              <h4>EHW Tech</h4>

              <p>
                Led the development of high-performance WordPress websites,
                optimized website performance, managed deployments, maintenance,
                hosting, and supported digital marketing initiatives.
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
                Managed clinical trial systems, maintained data integrity,
                coordinated operational workflows, inventory management, and
                technical support for healthcare research.
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
                Developed and maintained WordPress websites, managed hosting,
                implemented SEO improvements, and performed website maintenance.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="timeline-dot" />

            <div className="experience-content">
              <span className="experience-date">2017 – 2019</span>

              <h3>Web Developer</h3>

              <h4>Digital Edge</h4>

              <p>
                Developed responsive client websites, converted UI/UX designs
                into production-ready CMS websites, and configured CRM systems.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="timeline-dot" />

            <div className="experience-content">
              <span className="experience-date">2015 – 2017</span>

              <h3>Web Developer</h3>

              <h4>Protos EzyVA Pampanga Inc.</h4>

              <p>
                Built end-to-end websites from planning to deployment, converted
                design mockups into responsive websites, and handled testing and
                production deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
