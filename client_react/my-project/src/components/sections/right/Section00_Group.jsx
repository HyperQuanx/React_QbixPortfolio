import React, { useEffect, useRef } from "react";
import Section01_Info from "./Section01_Info";
import Section02_Skill from "./Section02_Skills";
import Section03_Projects from "./Section03_Projects";
import Section04_Repository from "./Section04_Repository";
import Section05_Contact from "./Section05_Contact";
import Section06_Feedback from "./Section06_Feedback";

const Section00_Group = ({ setActiveSection, sectionRefs }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 현재 보이는 섹션들 중에서 가장 많이 보이는 섹션을 찾는 함수
    const findMostVisibleSection = () => {
      const container = document.querySelector(".main-background3-2-content");
      if (!container) return;

      let maxVisibleArea = 0;
      let mostVisibleIndex = -1;

      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // 섹션과 컨테이너의 교차 영역 계산
        const top = Math.max(rect.top, containerRect.top);
        const bottom = Math.min(rect.bottom, containerRect.bottom);
        const left = Math.max(rect.left, containerRect.left);
        const right = Math.min(rect.right, containerRect.right);

        // 교차 영역이 있는 경우에만 계산
        if (top < bottom && left < right) {
          const visibleArea = (bottom - top) * (right - left);
          if (visibleArea > maxVisibleArea) {
            maxVisibleArea = visibleArea;
            mostVisibleIndex = index;
          }
        }
      });

      if (mostVisibleIndex !== -1) {
        setActiveSection(mostVisibleIndex);
      }
    };

    const handleScroll = () => {
      if (!handleScroll.ticking) {
        window.requestAnimationFrame(() => {
          findMostVisibleSection();
          handleScroll.ticking = false;
        });
        handleScroll.ticking = true;
      }
    };
    handleScroll.ticking = false;

    // 스크롤 컨테이너 찾기
    const scrollContainer = document.querySelector(
      ".main-background3-2-content"
    );
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);

      // 초기 실행
      findMostVisibleSection();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [sectionRefs, setActiveSection]);

  return (
    <>
      <div
        ref={containerRef}
        style={{ width: "100%", height: "100%", padding: "1.04vw" }}
      >
        <div ref={(e) => (sectionRefs.current[0] = e)}>
          <Section01_Info />
        </div>
        <div ref={(e) => (sectionRefs.current[1] = e)}>
          <Section02_Skill />
        </div>
        <div ref={(e) => (sectionRefs.current[2] = e)}>
          <Section03_Projects />
        </div>
        <div ref={(e) => (sectionRefs.current[3] = e)}>
          <Section04_Repository />
        </div>
        <div ref={(e) => (sectionRefs.current[4] = e)}>
          <Section05_Contact />
        </div>
        <div ref={(e) => (sectionRefs.current[5] = e)}>
          <Section06_Feedback />
        </div>
      </div>
    </>
  );
};

export default Section00_Group;
