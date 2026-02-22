import styled from "styled-components";

export const M_SkillLayout = styled.div`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  color: #333333;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
`;

export const M_SkillCategoryMenu = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  background-color: #f5fbff;
  padding: 10px;
  border-bottom: 1px solid #dce9f5;
  position: relative;
`;

export const M_SkillCategoryItem = styled.div`
  flex: 1;
  text-align: center;
  padding: 12px 6px;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${(props) => (props.active ? "#00bfff" : "transparent")};
  color: ${(props) => (props.active ? "#ffffff" : "#333")};
  font-weight: ${(props) => (props.active ? "700" : "500")};
  font-size: 0.95rem;
  border: 1px solid ${(props) => (props.active ? "#00bfff" : "#dce9f5")};
  transition: all 0.3s ease;
  letter-spacing: 0.01em;

  &:hover {
    border-color: #00bfff;
    color: ${(props) => (props.active ? "#ffffff" : "#00bfff")};
  }
`;

export const M_SkillContentArea = styled.div`
  flex: 1;
  padding: 18px 16px 24px;
  transition: opacity 0.5s ease;
`;

export const M_SkillTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 14px;
  color: #00bfff;
  display: flex;
  align-items: center;

  &::before {
    margin-right: 8px;
    color: #00bfff;
  }
`;

export const M_SkillItemContainer = styled.div`
  margin-top: 10px;
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

export const M_SkillItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 14px;
  margin-bottom: 12px;
  border-radius: 12px;
  background-color: #f9fdff;
  border: 1px solid #edf4fb;
`;

export const M_SkillIcon = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: #f0f9ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #00bfff;
  flex-shrink: 0;
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

export const M_SkillInfo = styled.div`
  flex: 1;
`;

export const M_SkillName = styled.h4`
  font-size: 1.06rem;
  margin: 0 0 8px;
  color: #333333;
`;

export const M_SkillDescription = styled.p`
  color: #666666;
  font-size: 0.92rem;
  line-height: 1.65;
  word-wrap: break-word;
  margin: 0 0 8px;

  &::before {
    content: "•";
    margin-right: 8px;
    color: #00bfff;
  }
`;
