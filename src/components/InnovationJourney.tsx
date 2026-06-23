import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLightbulb, FaRocket, FaChartLine, FaLaptopCode } from "react-icons/fa6";
import "./styles/InnovationJourney.css";

gsap.registerPlugin(ScrollTrigger);

const journeyItems = [
  {
    title: "Samsung Solve For Tomorrow",
    role: "National Innovator",
    year: "2025",
    description: "Proposed community-centered technology initiatives utilizing IoT and software engineering concepts to solve environmental problems and enhance local resource sustainability.",
    icon: <FaLightbulb />,
    side: "left",
  },
  {
    title: "ISRO Hackathon",
    role: "Geospatial Developer",
    year: "2026",
    description: "Developed simulation models and geospatial dashboard mockups during the space exploration geospatial hackathon, optimizing telemetry visual overlays.",
    icon: <FaRocket />,
    side: "right",
  },
  {
    title: "Pitch Festival 2026",
    role: "Startup Pitcher",
    year: "2026",
    description: "Presented scalable SaaS architectures and product roadmaps to prominent tech panels, venture investors, and incubation enablers.",
    icon: <FaChartLine />,
    side: "left",
  },
  {
    title: "Startup & Product Building",
    role: "Lead Tech Architect",
    year: "2026",
    description: "Orchestrated end-to-end full-stack software development for NeuroSense AI and RM Monitor, engineering relational schemas and API integrations.",
    icon: <FaLaptopCode />,
    side: "right",
  },
];

const InnovationJourney = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline progress line animation
      gsap.fromTo(
        ".ij-progress-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.2,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: true,
          },
        }
      );

      // Slide in left cards from left
      gsap.fromTo(
        ".ij-card.left",
        { x: -70, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Slide in right cards from right
      gsap.fromTo(
        ".ij-card.right",
        { x: 70, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="ij-section section-container" id="innovation-journey" ref={sectionRef}>
      <h2>
        Innovation <span>Journey</span>
      </h2>

      <div className="ij-timeline">
        {/* Central line */}
        <div className="ij-timeline-line">
          <div className="ij-progress-line"></div>
        </div>

        <div className="ij-cards-container">
          {journeyItems.map((item, idx) => (
            <div className={`ij-card-wrapper ${item.side}`} key={idx}>
              {/* Timeline circle marker */}
              <div className="ij-marker">
                <span className="ij-icon">{item.icon}</span>
              </div>

              {/* actual card */}
              <div className={`ij-card ${item.side}`} data-cursor="disable">
                <span className="ij-date">{item.year}</span>
                <div className="ij-card-header">
                  <h3>{item.title}</h3>
                  <span className="ij-badge">{item.role}</span>
                </div>
                <p className="ij-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InnovationJourney;
