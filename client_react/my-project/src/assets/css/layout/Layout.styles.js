import styled, { css } from "styled-components";

// 적응형 기점 포인트
const breakpoints = {
  mobile: "480px", // 모바일
  tablet: "768px", // 태블릿
  laptop: "1024px", // 노트북
  desktop: "1450px", // FHD 이하
  FHD: "1920px", // FHD
  QHD: "2560px", // QHD
  UHD: "3840px", // 4K
};

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

  /* 모바일 (480px 이하) */
  /* @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    min-height: 640px;
  } */

  /* 그 사이 어딘가 (480px - 768px) */
  /* @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    width: 100%;
    min-height: 640px;
  } */

  /* 태블릿 (768px - 1023px) */
  /* @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.laptop}) {
    width: 768px;
    height: 1024px;
    top: 30px;
    left: 30px;
  } */

  /* 노트북 (1024px - 1449px) */
  /* @media (min-width: ${breakpoints.laptop}) and (max-width: ${breakpoints.desktop}) {
    width: 1024px;
    height: 768px;
    top: 40px;
    left: 40px;
  } */

  /* 데스크탑 (1450px - 1919px) */
  /* @media (min-width: ${breakpoints.desktop}) and (max-width: ${breakpoints.FHD}) {
    width: 1450px;
    height: 950px;
    top: 50px;
    left: 50px;
  } */

  /* FHD (1920px - 2559px) [Fix : 나중에 FHD로 변환]*/
  /* @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.QHD}) { */
  width: 1450px;
  height: 800px;
  top: 50px;
  left: 50px;
  /* } */

  /* QHD (2560px - 3839px) */
  /* @media (min-width: ${breakpoints.QHD}) and (max-width: ${breakpoints.UHD}) {
    width: 1800px;
    height: 1000px;
    top: 100px;
    left: 100px;
  } */

  /* 4K 이상 (3840px 이상) */
  /* @media (min-width: ${breakpoints.UHD}) {
    width: 2400px;
    height: 1300px;
    top: 150px;
    left: 150px;
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
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const MainBackground3_1 = styled.div`
  background-color: #f1f1f1;
  border-radius: 12px;
  width: 320px;
  height: 760px;
  margin: 0;
  padding: 0 20px;
`;

export const MainBackground3_2 = styled.div`
  background-color: #f1f1f1;
  border-radius: 12px;
  width: 990px;
  height: 760px;
  margin: 0;
  padding: 0 20px;
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
  height: 680px;
  display: flex;
  justify-content: center;
`;

export const MainBackground3_2_contentBackground = styled.div`
  border: 2px solid #d4d4d4;
  background-color: #ffffff;
  height: 640px;
  border-radius: 9px;
  overflow: hidden;
  position: relative;
  padding: 20px;
  overflow-y: auto;
`;
