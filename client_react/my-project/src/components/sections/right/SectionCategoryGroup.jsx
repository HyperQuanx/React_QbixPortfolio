import {
  SectionCategoryItem,
  SectionCategoryList,
} from "../../../assets/css/sections/right/SectionCategoryGroup.style";

/** @param {{ activeSection: number, sectionRefs: import("react").RefObject<Array<HTMLElement | null>> }} props */
const SectionCategoryGroup = ({ activeSection, sectionRefs }) => {
  const scrollToSection = (i) => {
    const element = sectionRefs.current[i];
    if (!element) return;

    const container = element.closest(".main-background3-2-content");
    if (!container) return;

    const padding = window.innerWidth * 0.0104;
    const elementTop = element.offsetTop - padding;

    container.scrollTo({
      top: elementTop,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  return (
    <nav aria-label="본문 메뉴">
      <SectionCategoryList>
        {["Info", "Skills", "Projects", "Repository", "Contact", "Feedback"].map((label, index) => (
          <SectionCategoryItem key={label} $active={activeSection === index}>
            <button type="button" aria-current={activeSection === index ? "location" : undefined}
              onClick={() => scrollToSection(index)}>{label}</button>
          </SectionCategoryItem>
        ))}
      </SectionCategoryList>
    </nav>
  );
};

export default SectionCategoryGroup;
