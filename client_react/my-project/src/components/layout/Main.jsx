import React, { useState, useRef } from "react";
import {
  MainBackground1,
  MainBackground2,
  MainBackground3,
  MainBackground3_1,
  MainBackground3_1_contentBackground,
  MainBackground3_2,
  MainBackground3_2_contentBackground,
  MainBackground3_2_Flex,
  MainBackground3Spring,
  MainBackground3SpringGroup,
  MainContainer,
} from "../../assets/css/layout/Layout.styles";
import ViewCountArea from "../common/ViewCountArea";
import MainRightHeader from "../common/MainRightHeader";
import LeftSection from "../sections/left/LeftSection";
import Section00_Group from "../sections/right/Section00_Group";
import SectionCategoryGroup from "../sections/right/SectionCategoryGroup";

const Main = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  return (
    <MainContainer>
      <MainBackground1>
        <MainBackground2>
          <MainBackground3>
            <MainBackground3_1>
              <ViewCountArea />

              <MainBackground3_1_contentBackground>
                <LeftSection />
              </MainBackground3_1_contentBackground>
            </MainBackground3_1>

            <MainBackground3SpringGroup>
              <MainBackground3Spring></MainBackground3Spring>
            </MainBackground3SpringGroup>

            <MainBackground3_2>
              <MainRightHeader />

              <MainBackground3_2_Flex>
                <MainBackground3_2_contentBackground className="main-background3-2-content">
                  <Section00_Group
                    setActiveSection={setActiveSection}
                    sectionRefs={sectionRefs}
                  />
                </MainBackground3_2_contentBackground>

                <SectionCategoryGroup
                  activeSection={activeSection}
                  sectionRefs={sectionRefs}
                />
              </MainBackground3_2_Flex>
            </MainBackground3_2>
          </MainBackground3>
        </MainBackground2>
      </MainBackground1>
    </MainContainer>
  );
};

export default Main;
