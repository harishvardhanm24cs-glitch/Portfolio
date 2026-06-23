import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "RM Monitor",
    category: "AI-Powered Warehouse Management System",
    features: [
      "QR Tracking",
      "Digital Twin Warehouse",
      "Inventory Monitoring",
      "Threshold Alerts",
      "Analytics Dashboard",
    ],
    tech: ["React", "Node.js", "MySQL", "TypeScript"],
    image: "/images/rm_monitor.webp",
    link: "#",
  },
  {
    title: "NeuroSense AI",
    category: "Cognitive Assessment Platform",
    features: [
      "Dyslexia Detection",
      "ADHD Assessment",
      "Cognitive Scoring",
      "Emotion Recognition",
      "Report Generation",
    ],
    tech: ["React", "Next.js", "Python", "FastAPI"],
    image: "/images/neurosense_ai.webp",
    link: "#",
  },
  {
    title: "ISRO Climate Digital Twin",
    category: "Geospatial Climate Simulator",
    features: [
      "Climate Prediction",
      "Satellite Data Analysis",
      "Climate Simulation",
      "Geospatial Dashboard",
    ],
    tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
    image: "/images/climate_twin.webp",
    link: "#",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        
                        <div className="carousel-features">
                          <span className="details-label">Key Features</span>
                          <ul className="project-features-list">
                            {project.features.map((feature, fIdx) => (
                              <li key={fIdx}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="carousel-tech">
                          <span className="details-label">Tech Stack</span>
                          <div className="project-tech-tags">
                            {project.tech.map((t, tIdx) => (
                              <span className="tech-tag" key={tIdx}>
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
