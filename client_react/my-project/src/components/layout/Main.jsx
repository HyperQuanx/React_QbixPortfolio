import React from "react";
import {
  MainBackground1,
  MainBackground2,
  MainBackground3,
  MainBackground3_1,
  MainBackground3_1_contentBackground,
  MainBackground3_2,
  MainBackground3_2_contentBackground,
  MainBackground3Spring,
  MainBackground3SpringGroup,
  MainContainer,
} from "../../assets/css/layout/Layout.styles";
import ViewCountArea from "../common/ViewCountArea";
import MainRightHeader from "../common/MainRightHeader";
import LeftSection from "../sections/left/LeftSection";
import Section00_Group from "../sections/right/Section00_Group";

const main = () => {
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

              <MainBackground3_2_contentBackground>
                <Section00_Group />
              </MainBackground3_2_contentBackground>
            </MainBackground3_2>
          </MainBackground3>
        </MainBackground2>
      </MainBackground1>
    </MainContainer>
  );
};

export default main;
