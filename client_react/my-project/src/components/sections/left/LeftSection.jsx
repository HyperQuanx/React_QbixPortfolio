import React, { useState, useEffect } from "react";
import axios from "axios";
import { WiDaySunny, WiRain, WiCloudy, WiSnow } from "react-icons/wi";
import { FaCaretRight, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import {
  L_FeelingBox,
  L_ProfileImg,
  TodayText,
  WeatherIcon,
  WeatherDescription,
  L_ShortPR,
  L_ShortSnippet,
  L_CyWriteInfo,
  L_CyName,
  L_CyGender,
  L_CyGenderBox,
  L_CyMyInfo,
  AboutMeHoverMessageContainer,
  AboutMeText,
  AboutMeHoverMessage,
  BounceButton,
  AboutMeInfoPopup,
  AboutMeInfoGrid,
  AboutMeInfoItem,
  AboutMeInfoLabel,
  AboutMeInfoValue,
  AboutMePopupHeader,
  AboutMePopupTitle,
  AboutMeCloseButton,
  AboutMeButtonContainer,
  bounce,
} from "../../../assets/css/sections/left/LeftSection.style";
import {
  FlexCenter,
  FlexSpaceBetween,
} from "../../../assets/css/common/Common.styles";

const HoverContainer = styled(FlexSpaceBetween)`
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  position: relative;

  &:hover ${BounceButton} {
    animation: ${bounce} 1s infinite;
    color: #3498db;
  }
`;

const LeftSection = () => {
  const [weather, setWeather] = useState({
    icon: null,
    description: "",
    iconColor: "",
  });

  // 정보 팝업 표시 상태
  const [showInfo, setShowInfo] = useState(false);

  // 날씨 정보 가져오기
  // 공식문서 죄다 뜯어서 메모 GPT 안씀
  // 출저 - 기상청41_단기예보 조회서비스_오픈API활용가이드_241128

  // 2025/03/09 00:10 [트러블슈팅]
  // 문제 : 작업 중 갑자기 날씨 정보 아이콘이 표시되지 않음
  // 원인 : 날씨 정보 가져올 시 No Data 반환
  // 검증 : Postman에서 직접 API 호출 시 No Data를 반환함.
  // Params 중 자정을 넘기게 되면 오늘 날짜의 어제 시간을 호출하게 됨 -> 예보가 뜨지도 않은 시간 데이터를 가져오게 됨.
  // 해결 : 자정 ~ 0030 사이일 때는 이전 날짜의 23:30 데이터를 사용하도록 수정

  useEffect(() => {
    const getWeather = async () => {
      try {
        const now = new Date();
        let year = now.getFullYear();
        let month = String(now.getMonth() + 1).padStart(2, "0");
        let day = String(now.getDate()).padStart(2, "0");
        let hour = now.getHours();
        let baseTime;

        // API가 매시 30분에 생성되므로 30분 이전이면 한 시간 전 데이터를 사용
        // 매시간 30분에 생성되고 10분마다 최신 정보로 업데이트
        if (hour === 0 && now.getMinutes() < 30) {
          const yesterday = new Date(now);
          yesterday.setDate(yesterday.getDate() - 1);

          year = yesterday.getFullYear();
          month = String(yesterday.getMonth() + 1).padStart(2, "0");
          day = String(yesterday.getDate()).padStart(2, "0");
          baseTime = "2330";
        } else {
          if (now.getMinutes() < 30) {
            hour = hour - 1;
            if (hour < 0) hour = 23;
          }
          baseTime = String(hour).padStart(2, "0") + "30";
        }

        // console.log("요청 시간:", `${year}${month}${day}`, baseTime);

        const response = await axios.get(
          // getUltraSrtNcst는 초단기실황 정보
          // 흐림을 표현하기 위해 초단기예보(getUltraSrtFcst)로 수정

          // 초단기예보 코드값 정보
          // T1H : 기온 (단위 : ℃)
          // RN1 : 1시간 강수량 (단위 : mm)
          // SKY : 하늘상태 (단위 : 코드값  1 => 맑음, 3 =>구름많음, 4 => 흐림)
          // UUU : 동서바람성분 (단위 : m/s  동 => +, 서 => -)
          // VVV : 남북바람성분 (단위 : m/s  북 => +, 남 => -)
          // REH : 습도 (단위 : %)
          // PTY : 강수형태 (단위 : 코드값  0 => 없음, 1 => 비, 2 => 비/눈, 3 => 눈, 5 => 빗방울, 6 => 빗방울눈날림, 7 => 눈날림)
          // LGT : 낙뢰 (단위 : kA)
          // VEC : 풍향 (단위 : deg)
          // WSD : 풍속 (단위 : m/s)

          `${import.meta.env.VITE_WEATHER_API_ENDPOINT}`,
          {
            params: {
              serviceKey: import.meta.env.VITE_WEATHER_API_KEY, // 키
              numOfRows: "60", // 한번에 가져오는 데이터 수
              pageNo: "1", // 페이지 번호
              dataType: "JSON", // 데이터 타입 XML 또는 JSON
              base_date: `${year}${month}${day}`, // 기준 날짜 ex) 20250301
              base_time: baseTime, // 기준 시간 ex) 1600
              nx: "60", // 좌표
              ny: "127", // 좌표 여긴 중구임
            },
          }
        );

        if (response.data?.response?.body?.items?.item) {
          const weatherData = response.data.response.body.items.item;
          // console.log("날씨 데이터:", weatherData);

          // 응답 데이터의 첫 번째 항목의 예보 시각을 확인
          // if (weatherData.length > 0) {
          //   console.log("첫 번째 데이터의 예보 시각:", weatherData[0].fcstTime);
          // }

          // 모든 예보 시각 출력
          const availableTimes = [
            ...new Set(weatherData.map((item) => item.fcstTime)),
          ];
          // console.log("사용 가능한 예보 시각들:", availableTimes);

          // 가장 최근 예보 시각 사용
          const latestTime = availableTimes[0];
          // console.log("사용할 예보 시각:", latestTime);

          const ptyItem = weatherData.find(
            (item) => item.category === "PTY" && item.fcstTime === latestTime
          );
          const skyItem = weatherData.find(
            (item) => item.category === "SKY" && item.fcstTime === latestTime
          );

          // console.log("강수형태(PTY) 데이터:", ptyItem);
          // console.log("하늘상태(SKY) 데이터:", skyItem);

          let icon, description, iconColor;

          if (ptyItem && ptyItem.fcstValue !== "0") {
            switch (ptyItem.fcstValue) {
              case "1":
                icon = <WiRain />;
                description = "비";
                iconColor = "#4A6FA5";
                break;
              case "2":
                icon = <WiRain />;
                description = "비/눈";
                iconColor = "#6B8EAE";
                break;
              case "3":
                icon = <WiSnow />;
                description = "눈";
                iconColor = "#379980";
                break;
              case "4":
                icon = <WiRain />;
                description = "소나기";
                iconColor = "#2E5C8A";
                break;
            }
          } else if (skyItem) {
            switch (skyItem.fcstValue) {
              case "1":
                icon = <WiDaySunny />;
                description = "맑음";
                iconColor = "#FFB200";
                break;
              case "3":
                icon = <WiCloudy />;
                description = "구름많음";
                iconColor = "#8C8C8C";
                break;
              case "4":
                icon = <WiCloudy />;
                description = "흐림";
                iconColor = "#646464";
                break;
              default:
                icon = <WiDaySunny />;
                description = "맑음";
                iconColor = "#FFB200";
            }
          }

          setWeather({
            icon: icon,
            description: description,
            iconColor: iconColor,
          });
        }
      } catch (error) {
        console.error("날씨 정보 가져오기 실패 : ", error);
        if (error.response) {
          console.log("외앉뒘? : ", error.response.data);
        }
      }
    };

    getWeather();
  }, []);

  return (
    <section>
      <L_FeelingBox>
        <TodayText>
          TODAY IS..
          <WeatherIcon color={weather.iconColor}>{weather.icon}</WeatherIcon>
          <WeatherDescription>{weather.description}</WeatherDescription>
        </TodayText>
      </L_FeelingBox>
      <L_ProfileImg />
      <L_ShortPR>
        <L_ShortSnippet>
          제 포트폴리오를 방문해주셔서
          <br />
          진심으로 감사드립니다.
        </L_ShortSnippet>
      </L_ShortPR>

      <HoverContainer>
        <AboutMeHoverMessageContainer>
          <AboutMeText>
            <FaCaretRight size={10} style={{ marginRight: "4px" }} />
            About Me
            <AboutMeHoverMessage>
              우측 버튼을 누르면 개인정보가 나옵니다!
            </AboutMeHoverMessage>
          </AboutMeText>
        </AboutMeHoverMessageContainer>

        <AboutMeButtonContainer>
          <BounceButton onClick={() => setShowInfo(!showInfo)}>▲</BounceButton>

          <AboutMeInfoPopup isVisible={showInfo}>
            <AboutMePopupHeader>
              <AboutMePopupTitle>About Me</AboutMePopupTitle>
              <AboutMeCloseButton onClick={() => setShowInfo(false)}>
                <FaTimes />
              </AboutMeCloseButton>
            </AboutMePopupHeader>

            <AboutMeInfoGrid>
              <AboutMeInfoItem>
                <AboutMeInfoLabel>이름</AboutMeInfoLabel>
                <AboutMeInfoValue>한덕용</AboutMeInfoValue>
              </AboutMeInfoItem>

              <AboutMeInfoItem>
                <AboutMeInfoLabel>연락처</AboutMeInfoLabel>
                <AboutMeInfoValue>010-8904-4623</AboutMeInfoValue>
              </AboutMeInfoItem>

              <AboutMeInfoItem>
                <AboutMeInfoLabel>위치</AboutMeInfoLabel>
                <AboutMeInfoValue>서울특별시</AboutMeInfoValue>
              </AboutMeInfoItem>

              <AboutMeInfoItem>
                <AboutMeInfoLabel>생년월일</AboutMeInfoLabel>
                <AboutMeInfoValue>1999.06.03</AboutMeInfoValue>
              </AboutMeInfoItem>

              <AboutMeInfoItem>
                <AboutMeInfoLabel>교육 이수</AboutMeInfoLabel>
                <AboutMeInfoValue>천재교육 FullStack</AboutMeInfoValue>
                <AboutMeInfoValue>항해99 FrontEnd</AboutMeInfoValue>
              </AboutMeInfoItem>

              <AboutMeInfoItem>
                <AboutMeInfoLabel>학력</AboutMeInfoLabel>
                <AboutMeInfoValue>
                  학점은행제 재학중
                  <br />
                  (컴퓨터공학)
                </AboutMeInfoValue>
              </AboutMeInfoItem>
            </AboutMeInfoGrid>
          </AboutMeInfoPopup>
        </AboutMeButtonContainer>
      </HoverContainer>

      <L_CyWriteInfo>
        <L_CyName>
          한덕용
          <L_CyGenderBox>
            <L_CyGender></L_CyGender>
          </L_CyGenderBox>
        </L_CyName>

        <L_CyMyInfo>
          <p>qbixroqkfwk@gmail.com</p>
        </L_CyMyInfo>
      </L_CyWriteInfo>
    </section>
  );
};

export default LeftSection;
