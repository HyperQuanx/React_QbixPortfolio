import styled, { keyframes, css, createGlobalStyle } from "styled-components";

const fadeInProject = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const expandAnimation = keyframes`
  from { 
    transform: translate(-50%, -50%) scale(0.7);
    opacity: 0;
  }
  to { 
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const ProjectsContainer = styled.div`
  padding: 1.5rem 0;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 1px solid #e1e1e1;
  min-height: 57vh;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  }
`;

export const ProjectImageContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  background-color: #f9f9f9;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 1rem;
  position: relative;
  border: 1px solid #eaeaea;
`;

export const ProjectImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ProjectIcon = styled.div`
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0.5rem 0;
  color: #2c3e50;
  display: flex;
  align-items: center;
`;

export const ProjectContainerSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
`;

export const RoleDescription = styled.p`
  font-size: 0.875rem;

  &::before {
    content: "•";
  }
`;

export const ProjectTag = styled.span`
  background-color: #359dc2;
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
`;

export const SkillsTags = styled.span`
  background-color: ${(props) => {
    if (props.children.includes("React")) return "#61DAFB";
    if (props.children.includes("JavaScript")) return "#F7DF1E";
    if (props.children.includes("TypeScript")) return "#3178C6";
    if (props.children.includes("Axios")) return "#5A29E4";
    if (props.children.includes("Styled")) return "#DB7093";
    if (props.children.includes("Java")) return "#007396";
    if (props.children.includes("OAuth2.0")) return "#EB5424";
    if (props.children.includes("HTML")) return "#E34F26";
    if (props.children.includes("CSS")) return "#1572B6";
    if (props.children.includes("SCSS")) return "#CC6699";
    if (props.children.includes("Spring")) return "#6DB33F";
    if (props.children.includes("JPA")) return "#009688";
    if (props.children.includes("MySQL")) return "#4479A1";
    if (props.children.includes("AWS")) return "#232F3E";
    if (props.children.includes("Jenkins")) return "#D24939";
    if (props.children.includes("FastAPI")) return "#009688";
    if (props.children.includes("Jsp")) return "#007396";
    if (props.children.includes("Thymeleaf")) return "#005F0F";
    return "#359dc2";
  }};
  color: ${(props) => {
    if (props.children.includes("React")) return "#FFF";
    if (props.children.includes("TypeScript")) return "#FFF";
    if (props.children.includes("Axios")) return "#FFF";
    if (props.children.includes("Styled")) return "#FFF";
    if (props.children.includes("JavaScript")) return "#000";
    if (props.children.includes("Java")) return "#FFF";
    if (props.children.includes("OAuth2.0")) return "#FFF";
    if (props.children.includes("HTML")) return "#FFF";
    if (props.children.includes("CSS")) return "#FFF";
    if (props.children.includes("SCSS")) return "#FFF";
    if (props.children.includes("Spring")) return "#FFF";
    if (props.children.includes("JPA")) return "#FFF";
    if (props.children.includes("MySQL")) return "#FFF";
    if (props.children.includes("AWS")) return "#FFF";
    if (props.children.includes("Jenkins")) return "#FFF";
    if (props.children.includes("FastAPI")) return "#FFF";
    if (props.children.includes("Jsp")) return "#FFF";
    if (props.children.includes("Thymeleaf")) return "#FFF";
    return "#fff";
  }};
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  box-sizing: content-box;
`;

export const DateContainer = styled.div`
  font-size: 0.8rem;
  color: #95a5a6;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.25rem;
  }
`;

export const ProjectLink = styled.div`
  font-size: 0.8rem;
  color: #7f8c8d;
  margin-top: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// 모달 스타일
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  animation: ${fadeInProject} 0.3s ease-out;
`;

export const ProjectModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform-origin: center;
  transform: translate(-50%, -50%);
  z-index: 1001;
  width: 90%;
  max-width: 1200px;
  max-height: 90vh;
  animation: ${expandAnimation} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
`;

export const ModalHeader = styled.div`
  padding: 1.8rem 2rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.8rem;
  color: #2c3e50;
  font-weight: bold;

  .folderIcon {
    margin-right: 0.875rem;
    font-size: 1.8rem;
  }
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #95a5a6;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #e74c3c;
  }
`;

export const ModalBody = styled.div`
  padding: 2rem;
  overflow-y: auto;
  max-height: 60vh;

  // 메뉴로 쓸거
  h4 {
    position: relative;
    margin: 2.2rem 0 1.2rem;
    color: #2c3e50;
    font-size: 1.4rem;
    font-weight: 600;
    padding-left: 1rem;
    display: flex;
    align-items: center;
    text-decoration: none;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 4px;
      background: linear-gradient(to bottom, #3498db, #2980b9);
      border-radius: 2px;
    }

    svg {
      margin-right: 8px;
      color: #3498db;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 1px;
      background: linear-gradient(
        to right,
        rgba(52, 152, 219, 0.5),
        rgba(52, 152, 219, 0)
      );
    }
  }

  p {
    margin: 0.8rem 0;
    line-height: 1.7;
    color: #34495e;
    font-size: 1.05rem;
    padding-left: 1.8rem;
  }

  ul {
    margin: 0.8rem 0;
    padding-left: 0;
    list-style-type: none;

    li {
      margin-bottom: 1rem;
      color: #34495e;
      font-size: 1.05rem;
      position: relative;
      padding-left: 2rem;

      &::before {
        content: "";
        position: absolute;
        left: 0.5rem;
        top: 0.6rem;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: linear-gradient(135deg, #3498db, #2980b9);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        transition: all 0.2s ease-out;
      }

      &:hover::before {
        transform: scale(1.3);
        background: linear-gradient(135deg, #2980b9, #1a5276);
      }

      strong {
        color: #2980b9;
        font-weight: 600;
      }

      &.check-style::before {
        content: "✓";
        background: none;
        box-shadow: none;
        width: auto;
        height: auto;
        font-size: 1rem;
        color: #27ae60;
        top: 0.1rem;
        left: 0.2rem;
      }

      &.check-style:hover::before {
        transform: scale(1.2);
        color: #219653;
      }
    }
  }

  &:first-child h4 {
    margin-top: 0;
  }
`;

export const ModalFooter = styled.div`
  padding: 1.5rem 2rem;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    text-decoration: none;
    color: #3498db;
    font-weight: 500;
    font-size: 1.1rem;
    transition: color 0.2s;

    &:hover {
      color: #2980b9;
    }
  }
`;

export const ProjectInfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  border-bottom: 1px solid #e1e1e1;

  td {
    padding: 12px 4px;
    vertical-align: left;
  }

  td:first-child {
    width: 200px;
    font-weight: bold;
  }

  tbody > tr > td:last-child {
    display: flex;
    gap: 10px;
  }

  .iconCell {
    width: 30px;
    color: #666;
    font-size: 1rem;
  }

  .labelCell {
    width: 120px;
    font-weight: 500;
  }

  .contentCell {
    color: #333;
  }

  a {
    color: #1e88e5;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  article {
    width: 500px;
    height: 500px;
    display: block;
    margin: 0 auto;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: auto;
    height: auto;
    object-fit: contain;
    display: block;
    margin: 0 auto;
  }
`;

// 글로벌 스타일 추가 dangerouslySetInnerHTML는 글로벌 스타일 추가 필요
export const ProjectDetailStyles = createGlobalStyle`
  .projectModalContent article {
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
  
  .projectModalContent article img {
    width: 80%;
    height: auto;
    object-fit: contain;
    display: block;
    margin: 0 auto;
    border-radius: 6px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  }

  .projectModalContent .pjDetails {
    margin: 2rem 0 4rem 0;
    line-height: 1.7;
    color: #34495e;
    font-size: 1.25rem;
  }

  /* 트러블슈팅 토글 스타일 */
  .troubleshootingContainer {
    margin: 20px 0;
  }
  
  .troubleItem {
    margin-bottom: 12px;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    overflow: hidden;
  }
  
  .troubleTitle {
    padding: 12px 15px;
    background-color: #f6f8fa;
    cursor: pointer;
    font-weight: 600;
    color: #24292e;
    position: relative;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    user-select: none;
  }
  
  .troubleTitle:hover {
    background-color: #f0f3f6;
  }
  
  .troubleTitle::before {
    content: "▶";
    margin-right: 8px;
    font-size: 0.8em;
    color: #586069;
    transition: transform 0.2s;
  }
  
  details[open] .troubleTitle::before {
    transform: rotate(90deg);
  }
  
  .troubleContent {
    padding: 15px;
    background-color: #fff;
    border-top: 1px solid #e1e4e8;
  }
  
  .troubleContent p {
    margin: 0 0 10px 0;
    line-height: 1.6;
  }
  
  .troubleContent p:last-child {
    margin-bottom: 0;
  }

  .troubleContent img {
    width: 70%;
    height: auto;
    object-fit: contain;
    display: block;
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 6px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  }

  /* YouTube 비디오 컨테이너 스타일 */
  .video-container {
    margin: 30px auto;
    width: 100%;
    max-width: 750px;
  }
  
  .video-container h5 {
    margin-bottom: 15px;
    font-size: 1.2rem;
    color: #2c3e50;
    text-align: center;
  }
  
  .video-container iframe {
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    display: block;
    margin: 0 auto;
    aspect-ratio: 16 / 9;
    height: auto;
  }

  /* 기능 테이블 스타일 */
  .feature-table {
    width: 100%;
    border-collapse: collapse;
    margin: 30px 0;
    table-layout: fixed;
  }
  
  .feature-table th {
    padding: 12px 15px;
    background-color: #f0f4f8;
    color: #2c3e50;
    font-weight: 600;
    text-align: center;
    border-bottom: 2px solid #dfe6e9;
  }
  
  .feature-table td {
    padding: 15px;
    text-align: center;
    vertical-align: top;
    border: 1px solid #dfe6e9;
  }
  
  .feature-table img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    max-height: 350px;
    object-fit: contain;
  }
  
  .feature-description {
    padding: 15px;
    text-align: left;
    background-color: #f8fafc;
  }
  
  .feature-description p {
    margin: 5px 0;
    color: #34495e;
    font-size: 0.95rem;
  }
  
  @media (max-width: 768px) {
    .feature-table {
      display: block;
      overflow-x: auto;
    }
  }
`;
