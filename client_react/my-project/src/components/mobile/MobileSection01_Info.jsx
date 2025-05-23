import React from "react";
import {
  SectionTitle,
  SectionTitleUnderLine,
} from "../../assets/css/common/Common.styles";
import {
  CharacteristicList,
  HighlightSpan,
  InfoContent,
  InfoHi,
  InfoMain,
  InfoMainDiv,
  CharacteristicSection,
  CharacteristicTitle,
  CharacteristicCard,
  CharacteristicHeader,
  CharacteristicDescription,
} from "../../assets/css/sections/right/Section01_Info.style";

const MobileSection01_Info = () => {
  return (
    // ㄴㄻㄹ
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

      <CharacteristicSection
        style={{ padding: "2rem 2rem 0 0" }}
        //  ref={characteristicRef}
      >
        <section>
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
                항해99에서 진행하던 서비스 개발 당시 사용자 피드백을 적극
                수용하여 보완, 새로운 기술을 도입하였습니다.
                <br />
                이를 통해 약 60%의 사용자 만족도를 90% 이상으로 이끌어올린
                경험이 있습니다.
              </CharacteristicDescription>
            </CharacteristicCard>

            <CharacteristicCard color="#3498db">
              <CharacteristicHeader>
                [&nbsp;
                <code>
                  characteristic
                  <span className="whiteEqual">&nbsp;=&nbsp;</span>
                  <span>"친화력이 좋고 팀원들과 원활하게 소통하는"</span>
                </code>
                &nbsp;] 사람입니다.
              </CharacteristicHeader>
              <CharacteristicDescription>
                항해99에서 가장 소통을 원할하게 한 팀원으로 상을 받았던 경험이
                있고
                <br />
                천재교육에서 진행하던 부트캠프에서 대부분의 프로젝트에서 팀장
                역할을 맡아
                <br />
                팀원들과의 협업을 주도하며 원활한 의사소통과 문제 해결을
                이끌었습니다.
              </CharacteristicDescription>
            </CharacteristicCard>

            <CharacteristicCard color="#3498db">
              <CharacteristicHeader>
                [&nbsp;
                <code>
                  characteristic
                  <span className="whiteEqual">&nbsp;=&nbsp;</span>
                  <span>"개발을 너무 좋아하는"</span>
                </code>
                &nbsp;] 사람입니다.
              </CharacteristicHeader>
              <CharacteristicDescription>
                새로운 기술을 배우는 것과 상상했던 아이디어를 실제로 구현하는
                것을 좋아합니다.
                <br />
                웹 개발의 전반적인 과정을 이해하기 위해 다양한 기술을 학습하고
                경험을 쌓고 있으며
                <br />
                오랫동안 구상해 온 서비스를 직접 운영하기 위해 개발을 준비하고
                있습니다.
              </CharacteristicDescription>
            </CharacteristicCard>
          </CharacteristicList>
        </section>
      </CharacteristicSection>
    </section>
  );
};

export default MobileSection01_Info;
