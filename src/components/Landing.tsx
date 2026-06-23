import { PropsWithChildren } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { TbNotes } from "react-icons/tb";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1 className="hero-name">
              HARSH
              <br />
              <span>VARDHAN</span>
            </h1>
            <div className="hero-roles">
              <h3>Full Stack Developer</h3>
              <h4>AI & Software Engineering Enthusiast</h4>
            </div>
          </div>
          <div className="landing-info">
            <p className="hero-description">
              Building intelligent systems, scalable applications, and real-world solutions through software engineering, artificial intelligence, and innovation.
            </p>
            <div className="hero-buttons">
              <a
                href="/Harsh_Vardhan.pdf"
                target="_blank"
                rel="noreferrer"
                className="hero-btn resume-btn"
                data-cursor="disable"
              >
                Resume <TbNotes className="btn-icon" />
              </a>
              <a
                href="https://github.com/harishvardhanm24cs-glitch"
                target="_blank"
                rel="noreferrer"
                className="hero-btn github-btn"
                data-cursor="disable"
              >
                GitHub <FaGithub className="btn-icon" />
              </a>
              <a
                href="https://linkedin.com/in/harsh-vardhan2005"
                target="_blank"
                rel="noreferrer"
                className="hero-btn linkedin-btn"
                data-cursor="disable"
              >
                LinkedIn <FaLinkedinIn className="btn-icon" />
              </a>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
