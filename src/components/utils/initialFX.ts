import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  // Split name and greeting
  var nameText = new SplitText(
    [".landing-intro h2", ".hero-name"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  
  // Split roles
  var rolesText = new SplitText(
    [".hero-roles h3", ".hero-roles h4"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );

  // Split description
  var descText = new SplitText(".hero-description", {
    type: "lines",
    linesClass: "split-line",
  });

  // Entrance animations timeline
  const introTimeline = gsap.timeline();

  introTimeline
    // 1. Animate greeting and name chars
    .fromTo(
      nameText.chars,
      { opacity: 0, y: 50, filter: "blur(5px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.02,
        delay: 0.3,
      }
    )
    // 2. Animate roles chars (start slightly before name finishes)
    .fromTo(
      rolesText.chars,
      { opacity: 0, y: 30, filter: "blur(3px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.0,
        ease: "power2.out",
        stagger: 0.015,
      },
      "-=0.6"
    )
    // 3. Animate description lines
    .fromTo(
      descText.lines,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power2.out",
        stagger: 0.15,
      },
      "-=0.5"
    )
    // 4. Animate buttons fade and scale up
    .fromTo(
      ".hero-btn",
      { opacity: 0, y: 20, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1,
      },
      "-=0.6"
    );

  // Background fade and header fade
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
}
