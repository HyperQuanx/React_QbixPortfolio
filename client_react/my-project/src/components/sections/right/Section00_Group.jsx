import React, { useEffect } from "react";
import Section01_Info from "./Section01_Info";
import Section02_Skill from "./Section02_Skills";
import Section03_Projects from "./Section03_Projects";
import Section04_Contact from "./Section04_Contact";
import Section05_Links from "./Section05_Links";
import Section06_Feedback from "./Section06_Feedback";

const Section00_Group = ({ setActiveSection, sectionRefs }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            setActiveSection(index);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div style={{ width: "100%", padding: "1.04vw" }}>
        <div ref={(e) => (sectionRefs.current[0] = e)}>
          <Section01_Info />
        </div>
        <div ref={(e) => (sectionRefs.current[1] = e)}>
          <Section02_Skill />
        </div>
        <div ref={(e) => (sectionRefs.current[2] = e)}>
          <Section03_Projects />
        </div>
        <div ref={(e) => (sectionRefs.current[3] = e)}>
          <Section04_Contact />
        </div>
        <div ref={(e) => (sectionRefs.current[4] = e)}>
          <Section05_Links />
        </div>
        <div ref={(e) => (sectionRefs.current[5] = e)}>
          <Section06_Feedback />
        </div>
      </div>
    </>
  );
};

export default Section00_Group;
