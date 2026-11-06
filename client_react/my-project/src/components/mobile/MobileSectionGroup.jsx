import { useEffect, useRef } from "react";
import MobileSection01_Info from "./MobileSection01_Info";
import MobileSection02_Skills from "./MobileSection02_Skills";
import MobileSection03_Projects from "./MobileSection03_Projects";
import MobileSection04_Repository from "./MobileSection04_Repository";
import MobileSection05_Contact from "./MobileSection05_Contact";
import MobileSection06_Feedback from "./MobileSection06_Feedback";

const MobileSectionGroup = ({ onSectionActive }) => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const scrollContainer = document.querySelector("[data-mobile-scroll]");
    if (!scrollContainer) return;

    const handleScroll = () => {
      let currentIndex = 0;
      const top = scrollContainer.getBoundingClientRect().top + 17;
      sectionRefs.current.forEach((section, index) => {
        if (section && section.getBoundingClientRect().top <= top) currentIndex = index;
      });
      // The final section can be shorter than the viewport.
      if (scrollContainer.scrollTop > 0 &&
          scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 2) {
        currentIndex = sectionRefs.current.length - 1;
      }

      if (onSectionActive) {
        onSectionActive(currentIndex);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [onSectionActive]);

  return (
    <div style={{ width: "100%", height: "100%", padding: "1.04vw" }}>
      <div
        id="info"
        ref={(el) => (sectionRefs.current[0] = el)}
        style={{ scrollMarginTop: "16px" }}
      >
        <MobileSection01_Info />
      </div>

      <div
        id="skills"
        ref={(el) => (sectionRefs.current[1] = el)}
        style={{ scrollMarginTop: "16px" }}
      >
        <MobileSection02_Skills />
      </div>

      <div
        id="projects"
        ref={(el) => (sectionRefs.current[2] = el)}
        style={{ scrollMarginTop: "16px" }}
      >
        <MobileSection03_Projects />
      </div>

      <div
        id="repository"
        ref={(el) => (sectionRefs.current[3] = el)}
        style={{ scrollMarginTop: "16px" }}
      >
        <MobileSection04_Repository />
      </div>

      <div
        id="contact"
        ref={(el) => (sectionRefs.current[4] = el)}
        style={{ scrollMarginTop: "16px" }}
      >
        <MobileSection05_Contact />
      </div>

      <div
        id="feedback"
        ref={(el) => (sectionRefs.current[5] = el)}
        style={{ scrollMarginTop: "16px" }}
      >
        <MobileSection06_Feedback />
      </div>
    </div>
  );
};

export default MobileSectionGroup;
