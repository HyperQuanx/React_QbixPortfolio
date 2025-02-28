import React from "react";
import {
  MainBackground1,
  MainBackground2,
  MainBackground3,
  MainBackground3_1,
  MainBackground3_1_contentBackground,
  MainBackground3_2,
  MainBackground3_2_header,
  MainBackground3Spring,
  MainBackground3SpringGroup,
  MainContainer,
} from "../../assets/css/layout/Layout.styles";
import ViewCountArea from "../common/ViewCountArea";

const main = () => {
  return (
    <MainContainer>
      <MainBackground1>
        <MainBackground2>
          <MainBackground3>
            <MainBackground3_1>
              <ViewCountArea />

              <MainBackground3_1_contentBackground></MainBackground3_1_contentBackground>
            </MainBackground3_1>

            <MainBackground3SpringGroup>
              <MainBackground3Spring></MainBackground3Spring>
            </MainBackground3SpringGroup>

            <MainBackground3_2>
              <MainBackground3_2_header>
                <div>한덕용의 포트폴리오</div>
                <div>https://github.com/HyperQuanx?tab=repositories</div>
              </MainBackground3_2_header>
            </MainBackground3_2>
          </MainBackground3>
        </MainBackground2>
      </MainBackground1>
    </MainContainer>
  );
};

export default main;
