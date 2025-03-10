import styled from "styled-components";

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
  font-size: 1.125rem;
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

export const L_CyEmail = styled.div`
  font-size: 1rem;
  color: #e8b793;
`;
