import React, { useState, useEffect } from "react";
import {
  SectionTitle,
  SectionTitleUnderLine,
} from "../../../assets/css/common/Common.styles";
import {
  SkillLayout,
  SkillCategoryMenu,
  CategoryItem,
  SkillContentArea,
  SkillTitle,
  SkillItemContainer,
  SkillItem,
  SkillIcon,
  SkillInfo,
  SkillName,
  SkillDescription,
} from "../../../assets/css/sections/right/Section02_Skills.style";

const Section02_Skills = () => {
  const [activeCategory, setActiveCategory] = useState("FrontEnd");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCategoryClick = (category) => {
    if (category !== activeCategory && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveCategory(category);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <>
      <SectionTitle>Skills</SectionTitle>
      <SectionTitleUnderLine></SectionTitleUnderLine>

      <SkillLayout>
        <SkillCategoryMenu>
          <CategoryItem
            active={activeCategory === "FrontEnd"}
            onClick={() => handleCategoryClick("FrontEnd")}
          >
            FrontEnd
          </CategoryItem>
          <CategoryItem
            active={activeCategory === "BackEnd"}
            onClick={() => handleCategoryClick("BackEnd")}
          >
            BackEnd
          </CategoryItem>
          <CategoryItem
            active={activeCategory === "ETC"}
            onClick={() => handleCategoryClick("ETC")}
          >
            ETC
          </CategoryItem>
        </SkillCategoryMenu>

        <SkillContentArea style={{ opacity: isAnimating ? 0 : 1 }}>
          {activeCategory === "FrontEnd" && (
            <>
              <SkillTitle>Skill Stack @ FrontEnd</SkillTitle>
              <SkillItemContainer>
                <SkillItem>
                  <SkillIcon>
                    <img src="/icons/react.svg" alt="React" />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>React</SkillName>
                    <SkillDescription>
                      컴포넌트 기반 아키텍처를 활용한 SPA 개발 경험이 있습니다.
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>

                <SkillItem>
                  <SkillIcon>
                    <img src="/icons/html5.svg" alt="HTML5" />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>HTML5</SkillName>
                    <SkillDescription>
                      시맨틱 태그를 활용한 웹 페이지 구조화 능력을 갖추고
                      있습니다.
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>

                <SkillItem>
                  <SkillIcon>
                    <img src="/icons/css3.svg" alt="CSS3" />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>CSS3</SkillName>
                    <SkillDescription>
                      반응형 웹 디자인과 모던 CSS 기법을 활용할 수 있습니다.
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>
              </SkillItemContainer>
            </>
          )}

          {activeCategory === "BackEnd" && (
            <>
              <SkillTitle>Skill Stack @ BackEnd</SkillTitle>
              <SkillItemContainer>
                <SkillItem>
                  <SkillIcon>
                    <img src="/icons/express.svg" alt="Express" />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>Express</SkillName>
                    <SkillDescription>
                      React와 Express를 학습 후 첫 간단한 프로젝트의 백엔드
                      프레임워크로 사용한 경험이 있습니다.
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>

                <SkillItem>
                  <SkillIcon>
                    <img src="/icons/spring-boot.svg" alt="Spring Boot" />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>Spring-Boot</SkillName>
                    <SkillDescription>
                      프로젝트에 사용한 경험은 없지만, 스프링부트가 무엇이고
                      어떻게 사용하는지 공부해서 강의나 책을 보며 따라 해 본
                      경험이 있습니다.
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>

                <SkillItem>
                  <SkillIcon>
                    <img src="/icons/nodejs.svg" alt="Node.js" />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>Node.js</SkillName>
                    <SkillDescription>
                      JavaScript 런타임 환경으로 서버 사이드 애플리케이션을
                      개발할 수 있습니다.
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>
              </SkillItemContainer>
            </>
          )}

          {activeCategory === "ETC" && (
            <>
              <SkillTitle>Skill Stack @ ETC</SkillTitle>
              <SkillItemContainer>
                <SkillItem>
                  <SkillIcon>
                    <img src="/icons/git.svg" alt="Git" />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>Git</SkillName>
                    <SkillDescription>
                      기본적인 버전 관리 및 협업을 위한 Git 사용 경험이
                      있습니다.
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>

                <SkillItem>
                  <SkillIcon>
                    <img src="/icons/figma.svg" alt="Figma" />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>Figma</SkillName>
                    <SkillDescription>
                      UI/UX 디자인 및 프로토타이핑을 위한 Figma 사용 경험이
                      있습니다.
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>

                <SkillItem>
                  <SkillIcon>
                    <img src="/icons/aws.svg" alt="AWS" />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>AWS</SkillName>
                    <SkillDescription>
                      기본적인 AWS 서비스를 활용한 배포 경험이 있습니다.
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>
              </SkillItemContainer>
            </>
          )}
        </SkillContentArea>
      </SkillLayout>
    </>
  );
};

export default Section02_Skills;
