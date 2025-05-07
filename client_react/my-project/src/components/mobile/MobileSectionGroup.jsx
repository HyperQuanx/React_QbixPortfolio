import React from "react";
import MobileSection01_Info from "./MobileSection01_Info";
import MobileSection02_Skills from "./MobileSection02_Skills";
import MobileSection03_Projects from "./MobileSection03_Projects";
import MobileSection04_Repository from "./MobileSection04_Repository";
import MobileSection05_Contact from "./MobileSection05_Contact";
import MobileSection06_Feedback from "./MobileSection06_Feedback";

const MobileSectionGroup = () => {
  return (
    <>
      <MobileSection01_Info />
      <MobileSection02_Skills />
      <MobileSection03_Projects />
      <MobileSection04_Repository />
      <MobileSection05_Contact />
      <MobileSection06_Feedback />
    </>
  );
};

export default MobileSectionGroup;
