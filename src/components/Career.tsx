import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My <span>Timeline</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box" data-cursor="disable">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Joined PSNA College of Engineering and Technology</h4>
                <h5>B.E Computer Science and Engineering</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Enrolled in Computer Science Engineering, laying the foundation in software systems, algorithms, and computing principles.
            </p>
          </div>

          <div className="career-info-box" data-cursor="disable">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Built RM Monitor</h4>
                <h5>AI-Powered Warehouse Management</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed and implemented a real-time warehouse inventory dashboard integrating QR code tracking and 3D digital twins.
            </p>
          </div>

          <div className="career-info-box" data-cursor="disable">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Developing NeuroSense AI</h4>
                <h5>Cognitive Assessment Platform</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Building machine learning diagnostic pipelines to detect Dyslexia, ADHD, and recognize emotions.
            </p>
          </div>

          <div className="career-info-box" data-cursor="disable">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Working on ISRO Climate Digital Twin</h4>
                <h5>Geospatial Climate Simulator</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Collaborating on satellite image analysis and climate model visualization via geospatial dashboard layers.
            </p>
          </div>

          <div className="career-info-box" data-cursor="disable">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Won TECHDAY'26 Ideathon</h4>
                <h5>Project Pitch Champion</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Secured first place for presenting novel, scalable software architectures to address complex real-world challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
