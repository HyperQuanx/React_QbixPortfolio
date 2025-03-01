import React from "react";
import Section01_Info from "./Section01_Info";
import Section02_Skill from "./Section02_Skills";
import Section03_Projects from "./Section03_Projects";
import Section04_Contact from "./Section04_Contact";
import Section05_Links from "./Section05_Links";
import Section06_Feedback from "./Section06_Feedback";

const Section00_Group = () => {
  return (
    <>
      <Section01_Info />
      <Section02_Skill />
      <Section03_Projects />
      <Section04_Contact />
      <Section05_Links />
      <Section06_Feedback />
    </>
  );
};

export default Section00_Group;
