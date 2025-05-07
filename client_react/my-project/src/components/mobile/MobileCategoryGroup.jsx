import React, { useState } from "react";
import {
  MbSecCateG,
  MbSecCateGItem,
} from "../../assets/css/mobile/MobileCategoryGroup.style";

const MobileCategoryGroup = () => {
  const [mbActiveCate, setMbActiveCate] = useState(0);

  return (
    <MbSecCateG>
      <MbSecCateGItem>Info</MbSecCateGItem>
      <MbSecCateGItem>Skills</MbSecCateGItem>
      <MbSecCateGItem>Projects</MbSecCateGItem>
      <MbSecCateGItem>Repository</MbSecCateGItem>
      <MbSecCateGItem>Contact</MbSecCateGItem>
      <MbSecCateGItem>Feedback</MbSecCateGItem>
    </MbSecCateG>
  );
};

export default MobileCategoryGroup;
