import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-header">
          <span className="section-tag">
            My Skills
          </span>

          <h2 className="section-title">
            Technologies & Tools I Use
          </h2>

          <p className="skills-description">
            Here are the technologies, frameworks, and tools I use to build
            modern, scalable, and high-performance web applications.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>

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
              <span>PostgreSQL</span>
              <span>Supabase</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>WordPress Ecosystem</h3>

            <div className="skill-tags">
              <span>WordPress</span>
              <span>WooCommerce</span>
              <span>Elementor</span>
              <span>Gutenberg</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>

            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Figma</span>
              <span>Notion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;