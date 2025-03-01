import React from "react";
import {
  MainRightHeaderGroup,
  PortfolioGithubLink,
  PortfolioTitle,
} from "../../assets/css/common/MainRightHeader.style";
const MainRightHeader = () => {
  return (
    <MainRightHeaderGroup>
      <PortfolioTitle>Front-End Portfolio</PortfolioTitle>
      <PortfolioGithubLink href="https://github.com/HyperQuanx" target="_blank">
        https://github.com/HyperQuanx
      </PortfolioGithubLink>
    </MainRightHeaderGroup>
  );
};

export default MainRightHeader;
