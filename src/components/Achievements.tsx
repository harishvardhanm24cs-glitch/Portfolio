import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Achievements.css";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    title: "TECHDAY'26 Ideathon Winner",
    icon: "🏆",
    role: "Winner",
    description: "Secured 1st place in the national-level TECHDAY'26 Ideathon for pitching innovative software solutions addressing industrial challenges.",
  },
  {
    title: "Pitch Festival 2026 Participant",
    icon: "🚀",
    role: "Pitcher",
    description: "Showcased technology designs and scalable business ideas to expert panels and startup ecosystem enablers.",
  },
  {
    title: "ISRO Hackathon Participant",
    icon: "🌍",
    role: "Developer",
    description: "Developed simulation models and geospatial dashboard mockups during the space exploration geospatial hackathon.",
  },
  {
    title: "Samsung Solve For Tomorrow Participant",
    icon: "💡",
    role: "Innovator",
    description: "Proposed community-centered technology initiatives utilizing IoT and software engineering concepts to solve environmental problems.",
  },
];

const Achievements = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll entry
      gsap.fromTo(
        ".achievement-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate line fill
      gsap.fromTo(
        ".timeline-progress-line",
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="achievements-section section-container" id="achievements" ref={sectionRef}>
      <h2>
        My <span>Achievements</span>
      </h2>
      <div className="achievements-timeline">
        <div className="timeline-line">
          <div className="timeline-progress-line"></div>
        </div>
        <div className="achievements-list">
          {achievements.map((item, idx) => (
            <div className="achievement-card" key={idx} data-cursor="disable">
              <div className="achievement-icon-wrapper">
                <span className="achievement-icon">{item.icon}</span>
              </div>
              <div className="achievement-content-box">
                <div className="achievement-header">
                  <h3>{item.title}</h3>
                  <span className="achievement-badge">{item.role}</span>
                </div>
                <p className="achievement-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
