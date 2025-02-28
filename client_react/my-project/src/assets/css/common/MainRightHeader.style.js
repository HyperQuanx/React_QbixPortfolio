import styled from "styled-components";

export const MainRightHeaderGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 0 0 5px;
`;

export const PortfolioTitle = styled.div`
  font-size: 24px;
  color: #4682c2;
  margin-top: auto;
`;

export const PortfolioGithubLink = styled.a`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 0.8rem;
  position: relative;
  cursor: pointer;
  text-decoration: underline;
  margin-top: auto;

  &:hover::after {
    content: "Repository";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -160%);
    background-color: #333;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    z-index: 1000;
  }
`;
