import React, { useState } from "react";
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

const sectionIds = [
  "info",
  "skills",
  "projects",
  "repository",
  "contact",
  "feedback",
];

const Mobile = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryNavigation = (index) => {
    const targetId = sectionIds[index];
    const targetSection = targetId ? document.getElementById(targetId) : null;

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (typeof index === "number") {
      setActiveSection(index);
    }

    setIsMenuOpen(false);
  };

  return (
    <MobileContainer>
      {/* 헤더 */}
      <MobileHeader>
        <FlexAlignCenter>
          <MobileLogo src="/cyWorldLogoIconBgDelete.png" alt="logo" />
          Web Developer Portfolio
        </FlexAlignCenter>
        <FlexAlignCenter>
          <MobileMenuButton onClick={mobileToggleMenu}>
            <MenuIconWrapper isMenuOpen={isMenuOpen}>
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
        <MobileContent isMenuOpen={isMenuOpen}>
          <MobileSectionGroup onSectionActive={setActiveSection} />
        </MobileContent>
        <MobileAside isMenuOpen={isMenuOpen}>
          <MobileCategoryGroup
            activeSection={activeSection}
            onNavigate={handleCategoryNavigation}
          />
        </MobileAside>
      </MobileContentContainer>
      {/* 메인 */}
    </MobileContainer>
  );
};

export default Mobile;
