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

/** @param {{ activeSection?: number, onNavigate?: (index: number) => void }} props */
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
          $active={activeSection === index}
        >
          <button type="button" aria-current={activeSection === index ? "location" : undefined}
            onClick={() => handleClick(index)}>{category}</button>
        </MbSecCateGItem>
      ))}
    </MbSecCateG>
  );
};

export default MobileCategoryGroup;
