import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <div className="about-card">
          <p className="about-bio">
            I am <strong>Harsh Vardhan</strong>, a Computer Science Engineering student at <strong>PSNA College of Engineering and Technology</strong>.
          </p>
          <p className="about-specialties">
            I specialize in Full Stack Development, Artificial Intelligence, Software Engineering, and Digital Twin technologies. I enjoy building industry-oriented solutions that solve real-world problems.
          </p>
          <div className="about-projects-section">
            <h4>Current Projects</h4>
            <div className="about-projects-grid">
              <div className="project-card" data-cursor="disable">
                <span className="project-dot"></span>
                <h5>RM Monitor</h5>
              </div>
              <div className="project-card" data-cursor="disable">
                <span className="project-dot"></span>
                <h5>NeuroSense AI</h5>
              </div>
              <div className="project-card" data-cursor="disable">
                <span className="project-dot"></span>
                <h5>ISRO Climate Digital Twin</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
