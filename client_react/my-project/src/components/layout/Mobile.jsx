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

const Mobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

      <MobileContentContainer>
        <MobileContent isMenuOpen={isMenuOpen}>
          <MobileSectionGroup />
        </MobileContent>
        <MobileAside isMenuOpen={isMenuOpen}>
          <MobileCategoryGroup />
        </MobileAside>
      </MobileContentContainer>
    </MobileContainer>
  );
};

export default Mobile;
