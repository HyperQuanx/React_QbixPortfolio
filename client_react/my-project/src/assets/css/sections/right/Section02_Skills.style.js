import styled from "styled-components";

export const SkillLayout = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 50px;
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  color: #333333;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const SkillCategoryMenu = styled.div`
  width: 150px;
  background-color: #f8f8f8;
  padding: 20px 0;
  border-right: 1px solid #e0e0e0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 3px;
    background-color: #00bfff;
    transition: top 0.3s ease, height 0.2s ease;
    top: ${(props) => props.indicatorPosition}px;
    height: ${(props) => props.indicatorHeight}px;
  }
`;

export const SkillCategoryItem = styled.div`
  padding: 15px 20px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#e6f7ff" : "transparent")};
  color: ${(props) => (props.active ? "#00bfff" : "#333")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  transition: all 0.3s ease;

  &:hover {
    background-color: #e6f7ff;
  }
`;

export const SkillContentArea = styled.div`
  flex: 1;
  padding: 30px;
  transition: opacity 0.5s ease;
`;

export const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #00bfff;
  display: flex;
  align-items: center;

  &::before {
    margin-right: 8px;
    color: #00bfff;
  }
`;

export const SkillItemContainer = styled.div`
  margin-top: 20px;
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const SkillItem = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: flex-start;
`;

export const SkillIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #f0f9ff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  border: 2px solid #00bfff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  img {
    max-width: 60%;
    max-height: 60%;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 191, 255, 0.3);
  }
`;

export const SkillInfo = styled.div`
  flex: 1;
`;

export const SkillName = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333333;
`;

export const SkillDescription = styled.p`
  color: #666666;
  font-size: 0.95rem;
  line-height: 1.6;

  &::before {
    content: "•";
    margin-right: 8px;
    color: #00bfff;
  }
`;
