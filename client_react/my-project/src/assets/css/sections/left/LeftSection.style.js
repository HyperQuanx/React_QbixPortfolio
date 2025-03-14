import styled, { keyframes } from "styled-components";

export const L_ProfileImg = styled.div`
  width: 10.42vw;
  min-width: 200px;
  height: 23.15vh;
  min-height: 250px;
  border: 1px solid black;
  background-image: url("/public/한덕용_증명사진.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 10px;
`;

export const L_FeelingBox = styled.div`
  margin-top: 3.7vh;
  font-family: "Nanum Pen Script", cursive;
  font-size: 1rem;
  border: 1px solid black;
  height: 2.78vh;
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:hover::after {
    content: "현재 서울 날씨에 따라 아이콘이 바뀝니다!";
    position: absolute;
    bottom: 35px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.46vh 0.52vw;
    border-radius: 4px;
    font-size: 0.75rem;
    white-space: nowrap;
    z-index: 1000;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

export const TodayText = styled.div`
  color: #2aacd3;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.25rem;
`;

export const WeatherIcon = styled.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.color || "#000"};
`;

export const WeatherDescription = styled.span`
  color: black;
`;

export const L_ShortPR = styled.div`
  margin-top: 1.85vh;
  min-height: 23.52vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  padding: 0.93vh 0;
  font-family: "Nanum Pen Script", cursive;
`;

export const L_ShortSnippet = styled.div`
  color: #2aacd3;
  font-size: 1.625rem;
  text-align: center;
  line-height: 1.5;
  width: 100%;
  max-width: 10.42vw;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

export const L_CyWriteInfo = styled.div`
  font-family: "Hi Melody", cursive;
`;

export const L_CyName = styled.div`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const L_CyGenderBox = styled.div`
  width: 0.68vw;
  min-width: 13px;
  height: 0.68vw;
  min-height: 13px;
  padding: 0.26vw;
  border: 1px solid rgb(130, 123, 123);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
`;

export const L_CyGender = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/public/cy_gender_male.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
`;

export const L_CyMyInfo = styled.section`
  font-size: 1.2rem;
  color: #e8b793;
`;

// AboutMeHoverMessage
export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-3px);
  }
`;

export const AboutMeHoverMessageContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

export const AboutMeHoverMessage = styled.span`
  position: absolute;
  left: 50%;
  bottom: 100%;
  transform: translateX(-50%);
  background-color: rgba(52, 152, 219, 0.9);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  white-space: nowrap;
  margin-bottom: 8px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  z-index: 10;

  &:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid rgba(52, 152, 219, 0.9);
  }
`;

export const AboutMeText = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover ${AboutMeHoverMessage} {
    opacity: 1;
    visibility: visible;
  }
`;

export const BounceButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s;

  ${AboutMeHoverMessageContainer}:hover ~ & {
    animation: ${bounce} 1s infinite;
    color: #3498db;
  }
`;

// 정보 팝업 관련 스타일
export const AboutMeInfoPopup = styled.div`
  position: absolute;
  top: -250px;
  right: -30px;
  width: 300px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 15px;
  z-index: 100;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  transition: opacity 0.3s, visibility 0.3s;
  border: 1px solid #e1e1e1;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    right: 15px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid white;
  }
`;

export const AboutMeInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`;

export const AboutMeInfoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutMeInfoLabel = styled.span`
  font-size: 0.7rem;
  color: #7f8c8d;
  margin-bottom: 3px;
`;

export const AboutMeInfoValue = styled.span`
  font-size: 0.85rem;
  color: #2c3e50;
  font-weight: 500;
`;

export const AboutMePopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f1f1f1;
`;

export const AboutMePopupTitle = styled.h4`
  margin: 0;
  font-size: 1rem;
  color: #3498db;
`;

export const AboutMeCloseButton = styled.button`
  background: none;
  border: none;
  color: #95a5a6;
  cursor: pointer;
  font-size: 1rem;
  padding: 0;

  &:hover {
    color: #e74c3c;
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;

export const AboutMeButtonContainer = styled.div`
  position: relative;
`;
