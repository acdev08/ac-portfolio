import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-header">
          <span className="skills-tag">Tech Stack</span>

          <h2 className="skills-title">What I Work With</h2>

          <p className="skills-description">
            The right tools build the foundation. The right technologies bring
            ideas to life.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend Development</h3>

            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>React</span>
              <span>Vite</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Backend & Database</h3>

            <div className="skill-tags">
              <span>Node.js</span>
              <span>Express</span>
              <span>NestJS</span>
              <span>PHP</span>
              <span>PostgreSQL</span>
              <span>MySQL</span>
              <span>Supabase</span>
              <span>REST APIs</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>WordPress & CMS</h3>

            <div className="skill-tags">
              <span>WordPress</span>
              <span>Shopify</span>
              <span>Squarespace</span>
              <span>Elementor</span>
              <span>Gutenberg</span>
              <span>Spectra</span>
              <span>Divi</span>
              <span>WooCommerce</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Tools & Deployment</h3>

            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>Vercel</span>
              <span>VS Code</span>
              <span>Figma</span>
              <span>Photoshop</span>
              <span>Illustrator</span>
              <span>Canva</span>
              <span>Notion</span>
              <span>ChatGPT</span>
              <span>Codex</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
