import React from "react";
import {
  SectionTitle,
  SectionTitleUnderLine,
} from "../../assets/css/common/Common.styles";
import {
  HighlightSpan,
  InfoContent,
  InfoHi,
  InfoMain,
  InfoMainDiv,
} from "../../assets/css/sections/right/Section01_Info.style";

const MobileSection01_Info = () => {
  return (
    <section>
      <SectionTitle>Info</SectionTitle>
      <SectionTitleUnderLine></SectionTitleUnderLine>

      <InfoMain style={{ padding: "2rem 2rem 0 0" }}>
        <div>
          <InfoHi>안녕하세요!</InfoHi>
          <InfoContent delay="0.2s" style={{ fontSize: "1.725rem" }}>
            웹 개발자 <HighlightSpan>한덕용</HighlightSpan> 입니다.
          </InfoContent>
          <InfoContent delay="0.4s" style={{ fontSize: "2.4rem" }}>
            저는 새로운 아이디어를 창출하고
            <br />
            기존 문제를 <HighlightSpan>혁신적으로 해결</HighlightSpan>하는 데
            <br />
            깊은 열정을 가지고 있습니다.
          </InfoContent>
          <InfoContent delay="0.6s">
            지속적으로 학습하고 발전하는 것을 추구하며
            <br />
            창의성과 친화력을 바탕으로 팀과 조직에
            <br />
            실질적인 가치를 제공하기 위해 노력하고 있습니다.
          </InfoContent>
        </div>
      </InfoMain>
    </section>
  );
};

export default MobileSection01_Info;
