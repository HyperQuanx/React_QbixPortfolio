import { useRef, useState } from "react";
import {
  MobileContainer,
  MobileContentContainer,
  MobileContent,
  MobileAside,
  MobileHeader,
  MobileLogo,
  MobileMenuButton,
  MenuIconWrapper,
  MenuIconFace,
} from "../../assets/css/layout/Mobile.styles";
import { FaBars, FaTimes } from "react-icons/fa";
import { FlexAlignCenter } from "../../assets/css/common/Common.styles";
import MobileCategoryGroup from "../mobile/MobileCategoryGroup";
import MobileSectionGroup from "../mobile/MobileSectionGroup";
import Side_Bar from "../sections/side/Side_Bar";

const sectionIds = [
  "info",
  "skills",
  "projects",
  "repository",
  "contact",
  "feedback",
];

const Mobile = () => {
  const menuButtonRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileToggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const handleCategoryNavigation = (index) => {
    const targetId = sectionIds[index];
    const targetSection = targetId ? document.getElementById(targetId) : null;

    const scrollContainer = document.querySelector("[data-mobile-scroll]");
    if (targetSection && scrollContainer) {
      scrollContainer.scrollTo({
        top: scrollContainer.scrollTop + targetSection.getBoundingClientRect().top
          - scrollContainer.getBoundingClientRect().top - 16,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      });
    }

    if (typeof index === "number") {
      setActiveSection(index);
    }

    setIsMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <MobileContainer onKeyDown={(event) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }}>
      {/* 헤더 */}
      <MobileHeader>
        <FlexAlignCenter>
          <MobileLogo src="/cyWorldLogoIconBgDelete.png" alt="logo" />
          Web Developer Portfolio
        </FlexAlignCenter>
        <FlexAlignCenter>
          <MobileMenuButton ref={menuButtonRef} type="button" onClick={mobileToggleMenu}
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isMenuOpen} aria-controls="mobile-navigation">
            <MenuIconWrapper $isMenuOpen={isMenuOpen} aria-hidden="true">
              <MenuIconFace className="front">
                <FaBars />
              </MenuIconFace>
              <MenuIconFace className="back">
                <FaTimes />
              </MenuIconFace>
            </MenuIconWrapper>
          </MobileMenuButton>
        </FlexAlignCenter>
      </MobileHeader>
      {/* 헤더 */}

      {/* 메인 */}
      <MobileContentContainer>
        <MobileContent data-mobile-scroll $isMenuOpen={isMenuOpen}>
          <MobileSectionGroup onSectionActive={setActiveSection} />
        </MobileContent>
        <MobileAside id="mobile-navigation" $isMenuOpen={isMenuOpen} inert={!isMenuOpen} aria-hidden={!isMenuOpen}>
          <MobileCategoryGroup
            activeSection={activeSection}
            onNavigate={handleCategoryNavigation}
          />
          <Side_Bar />
        </MobileAside>
      </MobileContentContainer>
      {/* 메인 */}
    </MobileContainer>
  );
};

export default Mobile;
