import React from "react";
import {
  SectionTitle,
  SectionTitleUnderLine,
} from "../../../assets/css/common/Common.styles";
import {
  InfoMain,
  InfoHi,
  InfoContent,
  HighlightSpan,
  CharacteristicSection,
  CharacteristicTitle,
  CharacteristicList,
  CharacteristicCard,
  CharacteristicHeader,
  CharacteristicDescription,
} from "../../../assets/css/sections/right/Section01_Info.style";

const Section01_Info = () => {
  return (
    <>
      <SectionTitle>Info</SectionTitle>
      <SectionTitleUnderLine></SectionTitleUnderLine>

      <InfoMain>
        <InfoHi>안녕하세요!</InfoHi>
        <InfoContent delay="0.2s">웹 개발자 한덕용입니다.</InfoContent>
        <InfoContent delay="0.4s">
          저는 새로운 아이디어를 창출하고
          <br />
          기존 문제를 <HighlightSpan>혁신적으로 해결</HighlightSpan>하는 데
          <br />
          깊은 열정을 가지고 있습니다.
        </InfoContent>
        <InfoContent delay="0.6s" style={{ fontSize: "1.4rem" }}>
          지속적으로 학습하고 발전하는 것을 추구하며
          <br />
          창의성과 친화력을 바탕으로 팀과 조직에
          <br />
          실질적인 가치를 제공하기 위해 노력하고 있습니다.
        </InfoContent>

        <CharacteristicSection>
          <CharacteristicTitle>
            저는 [&nbsp;
            <code>
              <span className="codeLet">let&nbsp;</span>
              characteristic
              <span className="whiteEqual">&nbsp;=&nbsp;</span>
              <span>""</span>
            </code>
            &nbsp;] 사람입니다.
          </CharacteristicTitle>

          <CharacteristicList>
            <CharacteristicCard color="#3498db">
              <CharacteristicHeader>
                [&nbsp;
                <code>
                  characteristic
                  <span className="whiteEqual">&nbsp;=&nbsp;</span>
                  <span> "사용자 경험을 중요하게 생각하는"</span>
                </code>
                &nbsp;] 사람입니다.
              </CharacteristicHeader>
              <CharacteristicDescription>
                사용자의 관점에서 생각하고, 직관적이고 접근성 높은 인터페이스를
                설계하는 것을 중요시합니다.
                <br />
                사용자 피드백을 적극 수용하여 지속적으로 개선하는 것을
                추구합니다.
              </CharacteristicDescription>
            </CharacteristicCard>

            <CharacteristicCard color="#3498db">
              <CharacteristicHeader>
                [&nbsp;
                <code>
                  characteristic
                  <span className="whiteEqual">&nbsp;=&nbsp;</span>
                  <span>"친화력이 좋은"</span>
                </code>
                &nbsp;] 사람입니다.
              </CharacteristicHeader>
              <CharacteristicDescription>
                원활한 의사소통과 협업을 통해 팀의 시너지를 높이는 데
                기여합니다.
                <br />
                다양한 의견을 존중하고 경청하며, 긍정적인 팀 문화를 만들어가는
                것을 중요하게 생각합니다.
              </CharacteristicDescription>
            </CharacteristicCard>

            <CharacteristicCard color="#3498db">
              <CharacteristicHeader>
                [&nbsp;
                <code>
                  characteristic
                  <span className="whiteEqual">&nbsp;=&nbsp;</span>
                  <span>"문제 해결 능력이 뛰어난"</span>
                </code>
                &nbsp;] 사람입니다.
              </CharacteristicHeader>
              <CharacteristicDescription>
                복잡한 문제를 체계적으로 분석하고 효율적인 해결책을 찾아냅니다.
                <br />
                끊임없이 새로운 접근 방식을 탐색하며, 도전적인 상황에서도
                창의적인 솔루션을 제시할 수 있습니다.
              </CharacteristicDescription>
            </CharacteristicCard>
          </CharacteristicList>
        </CharacteristicSection>
      </InfoMain>
    </>
  );
};

export default Section01_Info;
