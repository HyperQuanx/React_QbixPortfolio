import styled, { css } from "styled-components";

// 적응형 기점 포인트
const breakpoints = {
  mobile: "480px", // 모바일
};

// 웹 디자인 트러블슈팅 무적권 넣는다 아 머리아파

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const MainBackground1 = styled.div`
  background-color: #b4d1da;
  border: 1px solid #738186;
  border-radius: 9px;
  position: relative;
  display: flex;
  padding: 20px;
  width: 75.52vw;
  min-width: 1450px;
  height: 84vh;
  min-height: 800px;
  top: 4.63vh;
  left: 2.6vw;

  /* 모바일 (480px 이하) */
  /* @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    min-height: 640px;
  } */
`;

export const MainBackground2 = styled.div`
  border: 2px dashed #ffffff;
  border-radius: 9px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const MainBackground3 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.04vw;
`;

export const MainBackground3_1 = styled.div`
  background-color: #f1f1f1;
  border-radius: 12px;
  width: 16.67vw;
  min-width: 320px;
  height: 95%;
  min-height: 760px;
  margin: 0;
  padding: 0 1.04vw;
`;

export const MainBackground3_2 = styled.div`
  background-color: #f1f1f1;
  border-radius: 12px;
  width: 51.56vw;
  min-width: 990px;
  height: 95%;
  min-height: 760px;
  margin: 0;
  padding: 0 1.04vw;
`;

export const MainBackground3_2_Flex = styled.div`
  display: flex;
  height: 100%;
`;

// [ Fix: 나중에 스프링 추가]
export const MainBackground3SpringGroup = styled.div``;

export const MainBackground3Spring = styled.div`
  /* background-color: #e8e8e8;
  border-radius: 12px;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 80px; 
  */
`;

export const MainBackground3_1_contentBackground = styled.div`
  background-color: #ffffff;
  border: 2px solid #d4d4d4;
  border-radius: 9px;
  width: 100%;
  height: 89.47%;
  min-height: 680px;
  display: flex;
  justify-content: center;
`;

export const MainBackground3_2_contentBackground = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  background-color: #ffffff;
  border: 2px solid #d4d4d4;
  border-radius: 9px;
  width: 100%;
  height: 89.47%;
  min-height: 680px;
  overflow: hidden;
  position: relative;
  overflow-y: auto;
  display: flex;
  justify-content: center;
`;
