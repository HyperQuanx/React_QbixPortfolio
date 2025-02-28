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
      <PortfolioGithubLink
        href="https://github.com/HyperQuanx?tab=repositories"
        target="_blank"
      >
        https://github.com/HyperQuanx?tab=repositories
      </PortfolioGithubLink>
    </MainRightHeaderGroup>
  );
};

export default MainRightHeader;
