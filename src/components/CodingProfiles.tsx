import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiGithub, SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";
import "./styles/CodingProfiles.css";

gsap.registerPlugin(ScrollTrigger);

const profiles = [
  {
    name: "GitHub",
    username: "@harishvardhanm24cs-glitch",
    url: "https://github.com/harishvardhanm24cs-glitch",
    icon: <SiGithub />,
    className: "profile-github",
  },
  {
    name: "LeetCode",
    username: "@harshvardhan",
    url: "https://leetcode.com/u/harshvardhan/",
    icon: <SiLeetcode />,
    className: "profile-leetcode",
  },
  {
    name: "GeeksForGeeks",
    username: "@harshvardhan",
    url: "https://www.geeksforgeeks.org/user/harshvardhan/",
    icon: <SiGeeksforgeeks />,
    className: "profile-geeksforgeeks",
  },
  {
    name: "HackerRank",
    username: "@harshvardhan",
    url: "https://www.hackerrank.com/profile/harshvardhan",
    icon: <SiHackerrank />,
    className: "profile-hackerrank",
  },
];

const CodingProfiles = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".profile-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="profiles-section section-container" id="profiles" ref={sectionRef}>
      <h2>
        Coding <span>Profiles</span>
      </h2>
      <div className="profiles-grid">
        {profiles.map((profile, idx) => (
          <a
            key={idx}
            href={profile.url}
            target="_blank"
            rel="noreferrer"
            className={`profile-card ${profile.className}`}
            data-cursor="disable"
          >
            <div className="profile-icon">{profile.icon}</div>
            <div className="profile-details">
              <h3>{profile.name}</h3>
              <p>{profile.username}</p>
            </div>
            <span className="profile-link-btn">View Profile →</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CodingProfiles;
