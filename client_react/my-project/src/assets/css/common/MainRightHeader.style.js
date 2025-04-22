import styled from "styled-components";

export const MainRightHeaderGroup = styled.header`
  display: flex;
  justify-content: space-between;
  height: 5.56vh;
  min-height: 60px;
  padding: 0 0 0 1.04vw;
`;

export const PortfolioTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: #4682c2;
  margin-top: auto;
`;

export const PortfolioTitleRightArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 0.1em;
`;

export const Re_Animation_Button = styled.button`
  cursor: pointer;
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
    font-size: 0.75rem;
    white-space: nowrap;
    z-index: 1000;
  }
`;
