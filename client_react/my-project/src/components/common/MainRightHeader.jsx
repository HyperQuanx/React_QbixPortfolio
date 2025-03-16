import React from "react";
import Cookies from "js-cookie";
import {
  MainRightHeaderGroup,
  PortfolioGithubLink,
  PortfolioTitle,
  PortfolioTitleRightArea,
  Re_Animation_Button,
} from "../../assets/css/common/MainRightHeader.style";

const MainRightHeader = () => {
  const handleReAnimation = () => {
    Cookies.remove("animationCookie");
    window.location.reload();
  };

  return (
    <MainRightHeaderGroup>
      <PortfolioTitle>Web Developer Portfolio</PortfolioTitle>
      <PortfolioTitleRightArea>
        <Re_Animation_Button onClick={handleReAnimation}>
          로딩 애니메이션 재시작
        </Re_Animation_Button>
        <PortfolioGithubLink
          href="https://github.com/HyperQuanx"
          target="_blank"
        >
          https://github.com/HyperQuanx
        </PortfolioGithubLink>
      </PortfolioTitleRightArea>
    </MainRightHeaderGroup>
  );
};

export default MainRightHeader;
