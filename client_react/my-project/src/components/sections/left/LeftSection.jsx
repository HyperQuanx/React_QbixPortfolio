import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { WiDaySunny, WiRain, WiCloudy, WiSnow } from "react-icons/wi";
import {
  L_FeelingBox,
  L_ProfileImg,
  TodayText,
  WeatherIcon,
  WeatherDescription,
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
          // getUltraSrtNcst는 초단기실황 정보
          `${import.meta.env.VITE_WEATHER_API_ENDPOINT}`,
          {
            params: {
              serviceKey: import.meta.env.VITE_WEATHER_API_KEY,
              numOfRows: "10",
              pageNo: "1",
              base_date: `${year}${month}${day}`,
              base_time: baseTime,
              nx: "60",
              ny: "127",
              dataType: "JSON",
            },
          }
        );

        // console.log("API 응답:", response.data);

        if (
          response.data &&
          response.data.response &&
          response.data.response.body
        ) {
          const weatherData = response.data.response.body.items.item;
          // console.log("날씨 데이터:", weatherData);

          const ptyItem = weatherData.find((item) => item.category === "PTY");
          if (ptyItem) {
            const skyValue = ptyItem.obsrValue;

            let icon, description, iconColor;
            switch (skyValue) {
              case "0":
                icon = <WiDaySunny />;
                description = "맑음";
                iconColor = "#FFB200";
                break;
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
              default:
                icon = <WiDaySunny />;
                description = "맑음";
                iconColor = "#FFB200";
            }

            setWeather({
              icon: icon,
              description: description,
              iconColor: iconColor,
            });
          }
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
      </div>
    </>
  );
};

export default LeftSection;
