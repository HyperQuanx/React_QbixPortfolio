import styled from "styled-components";

export const L_ProfileImg = styled.div`
  width: 200px;
  height: 250px;
  border: 1px solid black;
  border-radius: 9px;
  background-image: url("/public/한덕용_증명사진.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 40px;
`;

export const L_FeelingBox = styled.div`
  font-family: "Nanum Pen Script", cursive;
  font-size: 16px;
  border: 1px solid black;
  margin-top: 10px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodayText = styled.div`
  color: #2aacd3;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 20px;
`;

export const WeatherIcon = styled.span`
  font-size: 24px;
  display: flex;
  align-items: center;
  color: ${(props) => props.color || "#000"};
`;

export const WeatherDescription = styled.span`
  color: black;
`;
