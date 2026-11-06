import {
  MainRightHeaderGroup,
  PortfolioGithubLink,
  PortfolioTitle,
  PortfolioTitleRightArea,
} from "../../assets/css/common/MainRightHeader.style";

const MainRightHeader = () => {

  return (
    <MainRightHeaderGroup>
      <PortfolioTitle>Web Developer Portfolio</PortfolioTitle>
      <PortfolioTitleRightArea>
        <PortfolioGithubLink
          href="https://github.com/HyperQuanx"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/HyperQuanx
        </PortfolioGithubLink>
      </PortfolioTitleRightArea>
    </MainRightHeaderGroup>
  );
};

export default MainRightHeader;
