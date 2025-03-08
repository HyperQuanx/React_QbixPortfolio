import styled, { css } from "styled-components";

export const ViewCountGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  gap: 10px;

  .red {
    color: red;
    font-weight: bold;
  }
`;

export const SectionTitle = styled.div`
  color: #00bfff;
  font-family: "Hi Melody", cursive;
  font-weight: 500;
  font-size: 36px;
  margin: 0 0 0 10px;
  line-height: 1;
`;

export const SectionTitleUnderLine = styled.div`
  border-top: 0.5px solid #808080;
  border-radius: 50%;
  margin-bottom: 10px;
`;
