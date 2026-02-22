import React, { useEffect, useRef } from "react";
import MobileSection01_Info from "./MobileSection01_Info";
import MobileSection02_Skills from "./MobileSection02_Skills";
import MobileSection03_Projects from "./MobileSection03_Projects";
import MobileSection04_Repository from "./MobileSection04_Repository";
import MobileSection05_Contact from "./MobileSection05_Contact";
import MobileSection06_Feedback from "./MobileSection06_Feedback";

const MobileSectionGroup = ({ onSectionActive }) => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      sectionRefs.current.forEach((section, index) => {
        if (!section) {
          return;
        }

        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      if (onSectionActive) {
        onSectionActive(closestIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onSectionActive]);

  return (
    <div style={{ width: "100%", height: "100%", padding: "1.04vw" }}>
      <div
        id="info"
        ref={(el) => (sectionRefs.current[0] = el)}
        style={{ scrollMarginTop: "5rem" }}
      >
        <MobileSection01_Info />
      </div>

      <div
        id="skills"
        ref={(el) => (sectionRefs.current[1] = el)}
        style={{ scrollMarginTop: "5rem" }}
      >
        <MobileSection02_Skills />
      </div>

      <div
        id="projects"
        ref={(el) => (sectionRefs.current[2] = el)}
        style={{ scrollMarginTop: "5rem" }}
      >
        <MobileSection03_Projects />
      </div>

      <div
        id="repository"
        ref={(el) => (sectionRefs.current[3] = el)}
        style={{ scrollMarginTop: "5rem" }}
      >
        <MobileSection04_Repository />
      </div>

      <div
        id="contact"
        ref={(el) => (sectionRefs.current[4] = el)}
        style={{ scrollMarginTop: "5rem" }}
      >
        <MobileSection05_Contact />
      </div>

      <div
        id="feedback"
        ref={(el) => (sectionRefs.current[5] = el)}
        style={{ scrollMarginTop: "5rem" }}
      >
        <MobileSection06_Feedback />
      </div>
    </div>
  );
};

export default MobileSectionGroup;
