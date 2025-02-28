import React from "react";
import {
  MainBackground1,
  MainBackground2,
  MainBackground3,
  MainBackground3_1,
  MainBackground3_2,
  MainBackground3Spring,
  MainBackground3SpringGroup,
  MainContainer,
} from "../../assets/css/layout/Layout.styles";

const main = () => {
  return (
    <MainContainer>
      <MainBackground1>
        <MainBackground2>
          <MainBackground3>
            <MainBackground3_1></MainBackground3_1>
            <MainBackground3SpringGroup>
              <MainBackground3Spring></MainBackground3Spring>
            </MainBackground3SpringGroup>
            <MainBackground3_2></MainBackground3_2>
          </MainBackground3>
        </MainBackground2>
      </MainBackground1>
    </MainContainer>
  );
};

export default main;
