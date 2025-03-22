import React, { useState, useEffect, useRef } from "react";
import {
  SectionTitle,
  SectionTitleUnderLine,
} from "../../../assets/css/common/Common.styles";
import {
  SkillLayout,
  SkillCategoryMenu,
  SkillCategoryItem,
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
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [indicatorHeight, setIndicatorHeight] = useState(0);

  const frontEndRef = useRef(null);
  const backEndRef = useRef(null);
  const etcRef = useRef(null);

  useEffect(() => {
    // 초기 인디케이터 위치 설정
    updateIndicator();
  }, [activeCategory]);

  const updateIndicator = () => {
    let ref;
    switch (activeCategory) {
      case "FrontEnd":
        ref = frontEndRef;
        break;
      case "BackEnd":
        ref = backEndRef;
        break;
      case "ETC":
        ref = etcRef;
        break;
      default:
        ref = frontEndRef;
    }

    if (ref.current) {
      const { offsetTop, clientHeight } = ref.current;
      setIndicatorPosition(offsetTop);
      setIndicatorHeight(clientHeight);
    }
  };

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
    <section>
      <SectionTitle>Skills</SectionTitle>
      <SectionTitleUnderLine></SectionTitleUnderLine>

      <SkillLayout>
        <SkillCategoryMenu
          indicatorPosition={indicatorPosition}
          indicatorHeight={indicatorHeight}
        >
          <SkillCategoryItem
            ref={frontEndRef}
            active={activeCategory === "FrontEnd"}
            onClick={() => handleCategoryClick("FrontEnd")}
          >
            FrontEnd
          </SkillCategoryItem>
          <SkillCategoryItem
            ref={backEndRef}
            active={activeCategory === "BackEnd"}
            onClick={() => handleCategoryClick("BackEnd")}
          >
            BackEnd
          </SkillCategoryItem>
          <SkillCategoryItem
            ref={etcRef}
            active={activeCategory === "ETC"}
            onClick={() => handleCategoryClick("ETC")}
          >
            ETC
          </SkillCategoryItem>
        </SkillCategoryMenu>

        <SkillContentArea style={{ opacity: isAnimating ? 0 : 1 }}>
          {/* FrontEnd 기술스택 */}
          {activeCategory === "FrontEnd" && (
            <>
              <SkillTitle>FrontEnd</SkillTitle>
              <SkillItemContainer>
                <SkillItem>
                  <SkillIcon>
                    <img
                      src="/icons/skills/frontEnd/html_icon.svg"
                      alt="HTML5"
                    />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>HTML</SkillName>
                    <SkillDescription>
                      웹 표준을 준수하며 시멘틱 태그를 활용한 웹 페이지 구조
                      설계 가능
                    </SkillDescription>
                    <SkillDescription>
                      SEO를 고려한 마크업 구축 경험
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>

                <SkillItem>
                  <SkillIcon>
                    <img src="/icons/skills/frontEnd/css_icon.svg" alt="CSS3" />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>CSS</SkillName>
                    <SkillDescription>
                      웹 표준과 접근성을 고려한 스타일링 가능
                    </SkillDescription>
                    <SkillDescription>
                      미디어 쿼리를 활용한 반응형 및 적응형 웹 개발 경험
                    </SkillDescription>
                    <SkillDescription>
                      Sass를 활용한 스타일링 경험
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>

                <SkillItem>
                  <SkillIcon>
                    <img
                      src="/icons/skills/frontEnd/javascript_icon.svg"
                      alt="Javascript"
                    />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>Javascript</SkillName>
                    <SkillDescription>
                      DOM 조작 및 이벤트 핸들링 가능, 동적인 UI 요소 구현 경험
                    </SkillDescription>
                    <SkillDescription>
                      비동기 통신(fetch API, Axios) 및 Promise, async/await을
                      활용한 API 연동 경험
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>

                <SkillItem>
                  <SkillIcon>
                    <img
                      src="/icons/skills/frontEnd/typescript_icon.svg"
                      alt="Typescript"
                    />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>Typescript</SkillName>
                    <SkillDescription>
                      정적 타입 설정을 통해 코드 안정성 강화 및 유지보수 용이한
                      로직 작성 가능
                    </SkillDescription>
                    <SkillDescription>
                      React 환경에서 TypeScript 적용 경험, ESLint & Prettier와
                      함께 코드 품질 관리 경험
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>

                <SkillItem>
                  <SkillIcon>
                    <img
                      src="/icons/skills/frontEnd/react_icon.svg"
                      alt="React"
                    />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>React</SkillName>
                    <SkillDescription>
                      함수형 컴포넌트 및 React Hooks를 활용한 UI 개발, React
                      Router를 이용한 SPA 구현 경험
                    </SkillDescription>
                    <SkillDescription>
                      Redux, Recoil 등을 활용한 상태 관리 경험, React Query를
                      활용한 비동기 데이터 관리 가능
                    </SkillDescription>
                    <SkillDescription>
                      Styled-components 사용 경험, 반응형 웹 디자인 구현 가능
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>

                <SkillItem>
                  <SkillIcon>
                    <img
                      src="/icons/skills/frontEnd/socket_io_icon.svg"
                      alt="Socket.io"
                    />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>Socket.io</SkillName>
                    <SkillDescription>
                      WebSocket 기반의 양방향 통신 구현 경험
                    </SkillDescription>
                    <SkillDescription>
                      실시간 채팅 기능 개발 경험
                    </SkillDescription>
                    <SkillDescription>
                      Node.js와 연동하여 실시간 알림 시스템, 실시간 채팅 기능
                      구현 경험
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>

                <SkillItem>
                  <SkillIcon>
                    <img src="/icons/skills/frontEnd/vue_icon.svg" alt="Vue" />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>Vue</SkillName>
                    <SkillDescription>현재 독학중입니다.</SkillDescription>
                  </SkillInfo>
                </SkillItem>
              </SkillItemContainer>
            </>
          )}

          {/* BackEnd 기술스택 */}
          {activeCategory === "BackEnd" && (
            <>
              <SkillTitle>BackEnd</SkillTitle>
              <SkillItemContainer>
                <SkillItem>
                  <SkillIcon>
                    <img
                      src="/icons/skills/backEnd/java_logo_icon.svg"
                      alt="Java"
                    />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>Java</SkillName>
                    <SkillDescription>
                      객체지향 프로그래밍(OOP) 원칙을 적용하여 유지보수성 높은
                      코드 설계 가능
                    </SkillDescription>
                    <SkillDescription>
                      파일 처리, 컬렉션 등 Java의 주요 기능 활용 가능
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>

                <SkillItem>
                  <SkillIcon>
                    <img
                      src="/icons/skills/backEnd/spring_boot_icon.svg"
                      alt="SpringBoot"
                    />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>Spring Boot</SkillName>
                    <SkillDescription>
                      RESTful API 설계 및 구현, 서버 로직 처리, 데이터 유효성
                      검증 등 백엔드 개발 가능
                    </SkillDescription>
                    <SkillDescription>
                      MyBatis 및 JPA를 활용한 데이터베이스 연동 경험
                    </SkillDescription>
                    <SkillDescription>
                      Spring Security를 활용한 암호화(BCrypt), 보안 설정 및 JWT
                      인증/인가 구현 경험
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>

                <SkillItem>
                  <SkillIcon>
                    <img
                      src="/icons/skills/backEnd/mariadb_icon.svg"
                      alt="MariaDB"
                    />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>MariaDB</SkillName>
                    <SkillDescription>
                      데이터베이스 설계, 테이블 생성 및 최적화 쿼리 작성 가능
                    </SkillDescription>
                    <SkillDescription>
                      JOIN, 서브쿼리 등 복잡한 SQL 문법 활용 경험
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>

                <SkillItem>
                  <SkillIcon>
                    <img src="/icons/skills/backEnd/jsp_icon.svg" alt="Jsp" />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>Jsp</SkillName>
                    <SkillDescription>
                      동적 웹 페이지 생성 및 서버 사이드에서 HTML과 Java의
                      결합을 통한 페이지 작성 가능
                    </SkillDescription>
                    <SkillDescription>
                      EL 및 스크립틀릿을 활용한 기능 구현 경험
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>

                <SkillItem>
                  <SkillIcon>
                    <img
                      src="/icons/skills/backEnd/thymeleaf_icon.svg"
                      alt="Thymeleaf"
                    />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>Thymeleaf</SkillName>
                    <SkillDescription>
                      Spring Boot와 통합하여 동적 콘텐츠 생성 및 RESTful API
                      연동 경험
                    </SkillDescription>
                    <SkillDescription>"[Fix]" 나중에 채워</SkillDescription>
                  </SkillInfo>
                </SkillItem>

                <SkillItem>
                  <SkillIcon>
                    <img
                      src="/icons/skills/backEnd/fastapi_icon.svg"
                      alt="FastAPI"
                    />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>FastAPI</SkillName>
                    <SkillDescription>
                      FastAPI로 Restful API 개발 및 비동기 처리 경험
                    </SkillDescription>
                    <SkillDescription>
                      Chat-GPT API를 연동하여 실시간 데이터 분석 및 API 응답
                      최적화 경험
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>
              </SkillItemContainer>
            </>
          )}

          {/* 그 외 */}
          {activeCategory === "ETC" && (
            <>
              <SkillTitle>ETC</SkillTitle>
              <SkillItemContainer>
                <SkillItem>
                  <SkillIcon>
                    <img src="/icons/skills/etc/git_icon.svg" alt="Git" />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>Git</SkillName>
                    <SkillDescription>
                      기본적인 버전 관리 및 협업을 위한 Git 사용 경험
                    </SkillDescription>
                    <SkillDescription>
                      Jenkins와 연동하여 자동화 및 배포 설정 경험
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>

                <SkillItem>
                  <SkillIcon>
                    <img src="/icons/skills/etc/github_icon.svg" alt="Github" />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>Github</SkillName>
                    <SkillDescription>
                      GitHub를 활용한 소스 코드 관리 및 버전 관리 경험
                    </SkillDescription>
                    <SkillDescription>
                      대부분의 프로젝트에서 GitHub 관리 및 브랜치 관리 담당
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>

                <SkillItem>
                  <SkillIcon>
                    <img
                      src="/icons/skills/etc/sourcetree_icon.svg"
                      alt="SourceTree"
                    />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>SourceTree</SkillName>
                    <SkillDescription>
                      SourceTree를 활용한 소스 코드 관리 및 버전 관리 경험
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>

                <SkillItem>
                  <SkillIcon>
                    <img src="/icons/skills/etc/slack_icon.svg" alt="slack" />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>Slack</SkillName>
                    <SkillDescription>
                      팀원들과의 소통 및 협업을 위한 Slack 사용 경험
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>

                <SkillItem>
                  <SkillIcon>
                    <img src="/icons/skills/etc/figma_icon.svg" alt="Figma" />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>Figma</SkillName>
                    <SkillDescription>
                      UI/UX 디자인 및 프로토타이핑을 위한 Figma 사용 경험
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>

                <SkillItem>
                  <SkillIcon>
                    <img src="/icons/skills/etc/notion_icon.svg" alt="Notion" />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>Notion</SkillName>
                    <SkillDescription>
                      팀원들과의 소통 및 협업을 위한 Notion 사용 경험
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>
              </SkillItemContainer>
            </>
          )}
        </SkillContentArea>
      </SkillLayout>
    </section>
  );
};

export default Section02_Skills;
