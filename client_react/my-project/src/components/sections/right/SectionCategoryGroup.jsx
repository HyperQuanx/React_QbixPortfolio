import React from "react";
import {
  SectionCategoryItem,
  SectionCategoryList,
} from "../../../assets/css/sections/right/SectionCategoryGroup.style";

const SectionCategoryGroup = ({ activeSection, sectionRefs }) => {
  const scrollToSection = (index) => {
    const element = sectionRefs.current[index];
    if (!element) return;

    const container = element.closest(".main-background3-2-content");
    if (!container) return;

    const padding = window.innerWidth * 0.0104;
    const elementTop = element.offsetTop - padding;

    container.scrollTo({
      top: elementTop,
      behavior: "smooth",
    });
  };

  return (
    <SectionCategoryList>
      <SectionCategoryItem
        active={activeSection === 0}
        onClick={() => scrollToSection(0)}
      >
        Info
      </SectionCategoryItem>
      <SectionCategoryItem
        active={activeSection === 1}
        onClick={() => scrollToSection(1)}
      >
        Skills
      </SectionCategoryItem>
      <SectionCategoryItem
        active={activeSection === 2}
        onClick={() => scrollToSection(2)}
      >
        Projects
      </SectionCategoryItem>
      <SectionCategoryItem
        active={activeSection === 3}
        onClick={() => scrollToSection(3)}
      >
        Contact
      </SectionCategoryItem>
      <SectionCategoryItem
        active={activeSection === 4}
        onClick={() => scrollToSection(4)}
      >
        Links
      </SectionCategoryItem>
      <SectionCategoryItem
        active={activeSection === 5}
        onClick={() => scrollToSection(5)}
      >
        Feedback
      </SectionCategoryItem>
    </SectionCategoryList>
  );
};

export default SectionCategoryGroup;
