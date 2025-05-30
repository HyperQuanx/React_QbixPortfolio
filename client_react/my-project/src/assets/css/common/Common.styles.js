import styled, { css } from "styled-components";

export const ViewCountGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5.56vh;
  min-height: 60px;
  font-size: 0.875rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  gap: 10px;

  .red {
    color: red;
    font-weight: bold;
  }
`;

export const SectionTitle = styled.h2`
  color: #00bfff;
  font-family: "Hi Melody", cursive;
  font-weight: 500;
  font-size: 3rem;
  margin: 0 0 0 0.52vw;
  line-height: 1;
`;

export const SectionTitleUnderLine = styled.div`
  border-top: 0.5px solid #808080;
  border-radius: 50%;
  margin-bottom: 0.52vw;
`;

export const Flex = styled.div`
  display: flex;
`;

export const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlexAlignCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexDirectionColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexDirectionColumnReverse = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const FlexAlignEnd = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const H100 = styled.div`
  height: 100%;
`;

export const H500px = styled.div`
  height: 500px;
`;
