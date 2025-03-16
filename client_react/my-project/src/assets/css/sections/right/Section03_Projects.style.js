import styled, { keyframes, css } from "styled-components";

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
  background-color: #f8e8e8;
  color: #e74c3c;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const SkillsTags = styled.span`
  background-color: #eef2f7;
  color: #000000;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
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

  h4 {
    margin: 1.8rem 0 0.8rem;
    color: #3498db;
    font-size: 1.3rem;
  }

  p {
    margin: 0.8rem 0;
    line-height: 1.7;
    color: #34495e;
    font-size: 1.05rem;
  }

  ul {
    margin: 0.8rem 0;
    padding-left: 1.8rem;

    li {
      margin-bottom: 0.8rem;
      color: #34495e;
      font-size: 1.05rem;
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
