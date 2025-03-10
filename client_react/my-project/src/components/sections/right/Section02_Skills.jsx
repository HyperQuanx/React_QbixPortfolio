import React from "react";
import {
  H500px,
  SectionTitle,
  SectionTitleUnderLine,
} from "../../../assets/css/common/Common.styles";
import { SkillLayout } from "../../../assets/css/sections/right/Section02_Skills.style";
import { SkillItemButtonGroup } from "../../../assets/css/sections/right/Section02_Skills.style";
import { SkillItemButton } from "../../../assets/css/sections/right/Section02_Skills.style";
import { SkillItemDescriptionGroup } from "../../../assets/css/sections/right/Section02_Skills.style";
import { SkillItemDescriptionTitle } from "../../../assets/css/sections/right/Section02_Skills.style";

const Section02_Skills = () => {
  return (
    <>
      <SectionTitle>Skills</SectionTitle>
      <SectionTitleUnderLine></SectionTitleUnderLine>
      <SkillLayout>
        <SkillItemButtonGroup>
          <SkillItemButton>FrontEnd</SkillItemButton>
          <SkillItemButton>BackEnd</SkillItemButton>
          <SkillItemButton>ETC</SkillItemButton>
        </SkillItemButtonGroup>

        <SkillItemDescriptionGroup>
          <SkillItemDescriptionTitle>FrontEnd</SkillItemDescriptionTitle>
        </SkillItemDescriptionGroup>

        {/* <SkillItemDescriptionGroup>
          <SkillItemDescriptionTitle>BackEnd</SkillItemDescriptionTitle>
        </SkillItemDescriptionGroup>

        <SkillItemDescriptionGroup>
          <SkillItemDescriptionTitle>ETC</SkillItemDescriptionTitle>
        </SkillItemDescriptionGroup> */}
      </SkillLayout>
      <H500px></H500px>
    </>
  );
};

export default Section02_Skills;
