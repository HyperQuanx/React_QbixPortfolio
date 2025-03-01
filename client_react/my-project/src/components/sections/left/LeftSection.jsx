import React from "react";
import {
  L_FeelingBox,
  L_ProfileImg,
} from "../../../assets/css/sections/left/LeftSection.style";
import { FontColor_SkyBlue } from "../../../assets/css/common/Common.styles";

const LeftSection = () => {
  return (
    <>
      <div>
        <L_ProfileImg />
        <L_FeelingBox>
          <FontColor_SkyBlue>TODAY IS.. &nbsp;</FontColor_SkyBlue>
          <div>아이콘 &nbsp;</div>
          <div>날씨</div>
        </L_FeelingBox>
      </div>
    </>
  );
};

export default LeftSection;
