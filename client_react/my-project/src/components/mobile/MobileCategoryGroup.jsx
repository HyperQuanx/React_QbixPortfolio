import React from "react";
import {
  MbSecCateG,
  MbSecCateGItem,
} from "../../assets/css/mobile/MobileCategoryGroup.style";

const categories = [
  "Info",
  "Skills",
  "Projects",
  "Repository",
  "Contact",
  "Feedback",
];

const MobileCategoryGroup = ({ activeSection = 0, onNavigate }) => {
  const handleClick = (index) => {
    if (onNavigate) {
      onNavigate(index);
    }
  };

  return (
    <MbSecCateG>
      {categories.map((category, index) => (
        <MbSecCateGItem
          key={category}
          active={activeSection === index}
          onClick={() => handleClick(index)}
        >
          {category}
        </MbSecCateGItem>
      ))}
    </MbSecCateG>
  );
};

export default MobileCategoryGroup;
