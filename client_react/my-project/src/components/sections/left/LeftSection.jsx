import React, { useState, useEffect } from "react";
import axios from "axios";
import { WiDaySunny, WiRain, WiCloudy, WiSnow } from "react-icons/wi";
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
  L_CyEmail,
  L_CyGender,
} from "../../../assets/css/sections/left/LeftSection.style";

const LeftSection = () => {
  const [weather, setWeather] = useState({
    icon: null,
    description: "",
    iconColor: "",
  });

  useEffect(() => {
    const getWeather = async () => {
      try {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        const hour = String(now.getHours()).padStart(2, "0");
        const baseTime = hour + "00";

        const response = await axios.get(
          `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst`,
          {
            params: {
              serviceKey:
                "Y5AU7Ss+e1GMwPVStRefwOrZrpRzfQM1JDVifiAkFw0nUcFiEbi7ZuII3XiNQIjwMi+rZ/TiMP9F8gD/rZa1A==",
              numOfRows: "60",
              pageNo: "1",
              base_date: `${year}${month}${day}`,
              base_time: baseTime,
              nx: "60",
              ny: "127",
              dataType: "JSON",
            },
          }
        );

        console.log("API 응답:", response.data);

        if (
          response.data &&
          response.data.response &&
          response.data.response.body
        ) {
          const weatherData = response.data.response.body.items.item;

          // 현재 시간의 데이터 찾기
          const currentData = weatherData.filter(
            (item) => item.fcstTime === baseTime
          );

          const ptyItem = currentData.find((item) => item.category === "PTY");
          const skyItem = currentData.find((item) => item.category === "SKY");

          let icon, description, iconColor;

          // 먼저 강수형태 체크
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
                iconColor = "#FFFFFF";
                break;
              case "4":
                icon = <WiRain />;
                description = "소나기";
                iconColor = "#2E5C8A";
                break;
            }
          } else if (skyItem) {
            // 강수가 없을 때 하늘상태 체크
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
        console.error("날씨 정보를 가져오는데 실패했습니다:", error);
        if (error.response) {
          console.log("에러 응답:", error.response.data);
        }
      }
    };

    getWeather();
  }, []);

  return (
    <>
      <div>
        <L_ProfileImg />
        <L_FeelingBox>
          <TodayText>
            TODAY IS..
            <WeatherIcon color={weather.iconColor}>{weather.icon}</WeatherIcon>
            <WeatherDescription>{weather.description}</WeatherDescription>
          </TodayText>
        </L_FeelingBox>
        <L_ShortPR>
          <L_ShortSnippet>
            안녕하세요! 창의적이고 혁신적인 문제 해결을 통해 팀과 조직에
            실질적인 가치를 제공하며, 지속적인 학습과 발전을 추구하는
            한덕용입니다.
          </L_ShortSnippet>
        </L_ShortPR>
        <L_CyWriteInfo>
          <L_CyName>
            한덕용<L_CyGender></L_CyGender>
          </L_CyName>

          <L_CyEmail>qbixroqkfwk@gmail.com</L_CyEmail>
        </L_CyWriteInfo>
      </div>
    </>
  );
};

export default LeftSection;
