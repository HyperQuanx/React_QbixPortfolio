import React, { useState, useRef, useEffect } from "react";
import {
  SectionTitle,
  SectionTitleUnderLine,
} from "../../assets/css/common/Common.styles";
import {
  ProjectsContainer,
  ProjectGrid,
  ProjectCard,
  ProjectIcon,
  ProjectTitle,
  ProjectDescription,
  ProjectTag,
  SkillsTags,
  DateContainer,
  ProjectLink,
  ProjectModal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  ProjectImageContainer,
  ProjectImage,
  ProjectContainerSection,
  RoleDescription,
  ProjectInfoTable,
  ProjectDetailStyles,
} from "../../assets/css/sections/right/Section03_Projects.style";
import {
  FaRegFileAlt,
  FaTimes,
  FaGithub,
  FaCalendarAlt,
  FaUsers,
  FaGlobe,
  FaProjectDiagram,
  FaFileAlt,
  FaCode,
  FaTrophy,
  FaTasks,
  FaFolderOpen,
  FaExclamationTriangle,
  FaCogs,
  FaUserTie,
  FaClipboardList,
  FaFlagCheckered,
  FaLink,
} from "react-icons/fa";
import { Section03_Projects_Arrays } from "../sections/right/Section03_Projects_Arrays";
import ModalPortal from "../common/ModalPortal";

const MobileSection03_Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  // 각 섹션별 ref 배열 생성 (설명, 스택, 역할, 스킬)
  const descriptionRefs = useRef([]);
  const stackRefs = useRef([]);
  const rolesRefs = useRef([]);
  const skillsRefs = useRef([]);

  // 프로젝트 목록
  const projects = Section03_Projects_Arrays();

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // 같은 행에 있는 섹션들의 높이를 일치시키는 함수
  const equalizeHeights = () => {
    // 각 행마다 2개의 프로젝트씩 그룹화
    const rows = Math.ceil(projects.length / 2);

    for (let row = 0; row < rows; row++) {
      const startIdx = row * 2;
      const endIdx = Math.min(startIdx + 1, projects.length - 1); // 마지막 행은 프로젝트가 하나일 수 있음

      // 설명 섹션 높이 맞추기
      if (
        descriptionRefs.current[startIdx] &&
        descriptionRefs.current[endIdx]
      ) {
        const height1 = descriptionRefs.current[startIdx].offsetHeight;
        const height2 = descriptionRefs.current[endIdx].offsetHeight;
        const maxHeight = Math.max(height1, height2);
        descriptionRefs.current[startIdx].style.height = `${maxHeight}px`;
        descriptionRefs.current[endIdx].style.height = `${maxHeight}px`;
      }

      // 스택 섹션 높이 맞추기
      if (stackRefs.current[startIdx] && stackRefs.current[endIdx]) {
        const height1 = stackRefs.current[startIdx].offsetHeight;
        const height2 = stackRefs.current[endIdx].offsetHeight;
        const maxHeight = Math.max(height1, height2);
        stackRefs.current[startIdx].style.height = `${maxHeight}px`;
        stackRefs.current[endIdx].style.height = `${maxHeight}px`;
      }

      // 역할 섹션 높이 맞추기
      if (rolesRefs.current[startIdx] && rolesRefs.current[endIdx]) {
        const height1 = rolesRefs.current[startIdx].offsetHeight;
        const height2 = rolesRefs.current[endIdx].offsetHeight;
        const maxHeight = Math.max(height1, height2);
        rolesRefs.current[startIdx].style.height = `${maxHeight}px`;
        rolesRefs.current[endIdx].style.height = `${maxHeight}px`;
      }

      // 스킬 섹션 높이 맞추기
      if (skillsRefs.current[startIdx] && skillsRefs.current[endIdx]) {
        const height1 = skillsRefs.current[startIdx].offsetHeight;
        const height2 = skillsRefs.current[endIdx].offsetHeight;
        const maxHeight = Math.max(height1, height2);
        skillsRefs.current[startIdx].style.height = `${maxHeight}px`;
        skillsRefs.current[endIdx].style.height = `${maxHeight}px`;
      }
    }
  };

  // refs 초기화 및 높이 조정
  useEffect(() => {
    // refs 배열 초기화
    descriptionRefs.current = descriptionRefs.current.slice(0, projects.length);
    stackRefs.current = stackRefs.current.slice(0, projects.length);
    rolesRefs.current = rolesRefs.current.slice(0, projects.length);
    skillsRefs.current = skillsRefs.current.slice(0, projects.length);

    // 컴포넌트가 마운트된 후 및 리사이징 시 높이 조정
    equalizeHeights();
    window.addEventListener("resize", equalizeHeights);

    return () => {
      window.removeEventListener("resize", equalizeHeights);
    };
  }, [projects.length]);

  return (
    <section>
      <SectionTitle>Projects</SectionTitle>
      <SectionTitleUnderLine></SectionTitleUnderLine>
      <ProjectDetailStyles />

      <ProjectsContainer>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              onClick={() => handleProjectClick(project)}
            >
              <ProjectImageContainer>
                <ProjectImage src={project.image} />
              </ProjectImageContainer>

              <ProjectTitle>
                <ProjectIcon>
                  <FaRegFileAlt />
                </ProjectIcon>
                {project.title}
              </ProjectTitle>

              <ProjectContainerSection
                ref={(el) => (descriptionRefs.current[index] = el)}
              >
                {project.description.map((desc, descIndex) => (
                  <ProjectDescription key={descIndex}>
                    {desc}
                  </ProjectDescription>
                ))}
              </ProjectContainerSection>

              <ProjectContainerSection
                ref={(el) => (stackRefs.current[index] = el)}
              >
                <ProjectTag>{project.stack}</ProjectTag>
              </ProjectContainerSection>

              <ProjectContainerSection
                ref={(el) => (rolesRefs.current[index] = el)}
              >
                {project.roles.map((tag, roleIndex) => (
                  <RoleDescription key={roleIndex}>{tag}</RoleDescription>
                ))}
              </ProjectContainerSection>

              <ProjectContainerSection
                ref={(el) => (skillsRefs.current[index] = el)}
              >
                {project.skillsTags.map((tag, skillIndex) => (
                  <SkillsTags key={skillIndex}>{tag}</SkillsTags>
                ))}
              </ProjectContainerSection>

              <DateContainer>
                <FaCalendarAlt style={{ marginRight: "5px" }} />
                {project.date}
              </DateContainer>

              <ProjectLink>{project.github}</ProjectLink>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ProjectsContainer>

      {selectedProject && (
        <>
          <ModalPortal>
            <ModalOverlay onClick={closeModal} />
            <ProjectModal ref={modalRef}>
              <ModalContent className="projectModalContent">
                <ModalHeader>
                  <ModalTitle>
                    <FaFolderOpen className="folderIcon" />
                    {selectedProject.title}
                  </ModalTitle>
                  <ModalCloseButton onClick={closeModal}>
                    <FaTimes />
                  </ModalCloseButton>
                </ModalHeader>
                <ModalBody>
                  <ProjectInfoTable>
                    <tbody>
                      <tr>
                        <td>
                          <FaProjectDiagram className="iconCell" />
                          프로젝트 구분
                        </td>
                        <td>{selectedProject.details.Sortation}</td>
                      </tr>
                      <tr>
                        <td>
                          <FaTrophy className="iconCell" />
                          성과
                        </td>
                        <td>{selectedProject.details.Achievement}</td>
                      </tr>
                      <tr>
                        <td>
                          <FaTasks className="iconCell" />
                          역할
                        </td>
                        <td>{selectedProject.stack}</td>
                      </tr>
                      <tr>
                        <td>
                          <FaUsers className="iconCell" />
                          개발자
                        </td>
                        <td>{selectedProject.details.developers}</td>
                      </tr>
                      <tr>
                        <td>
                          <FaCalendarAlt className="iconCell" />
                          기간
                        </td>
                        <td>{selectedProject.date}</td>
                      </tr>
                      <tr>
                        <td>
                          <FaGithub className="iconCell" />
                          Github
                        </td>
                        <td>
                          {selectedProject.details.github ===
                          "사측 디자인 파일 사용으로 비공개" ? (
                            <span style={{ textDecoration: "line-through" }}>
                              {selectedProject.details.github}
                            </span>
                          ) : (
                            <a
                              href={selectedProject.details.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {selectedProject.details.github}
                            </a>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FaGlobe className="iconCell" />
                          URL
                        </td>
                        <td>
                          {selectedProject.details.url === "배포 중단" ? (
                            <span style={{ textDecoration: "line-through" }}>
                              배포 중단 (AWS 만료)
                            </span>
                          ) : (
                            <a
                              href={selectedProject.details.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {selectedProject.details.url}
                            </a>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FaFileAlt className="iconCell" />
                          Short Description
                        </td>
                        <td>{selectedProject.description[0]}</td>
                      </tr>
                      <tr>
                        <td>
                          <FaCode className="iconCell" />
                          Skills
                        </td>
                        <td>
                          {selectedProject.skillsTags.map((tag, index) => (
                            <SkillsTags key={index}>{tag}</SkillsTags>
                          ))}
                        </td>
                      </tr>
                    </tbody>
                  </ProjectInfoTable>

                  <h4>
                    <FaRegFileAlt /> 개요
                  </h4>
                  <p>{selectedProject.details.overview}</p>

                  <h4>
                    <FaCogs /> 주요 기능
                  </h4>
                  <ul>
                    {selectedProject.details.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>

                  <h4>
                    <FaUserTie />
                    역할
                  </h4>
                  <ul>
                    {selectedProject.details.myRole.map((role, index) => (
                      <li key={index}>{role}</li>
                    ))}
                  </ul>

                  <h4>
                    <FaClipboardList />
                    프로젝트 상세
                  </h4>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: selectedProject.details.content,
                    }}
                  />

                  {selectedProject.details.trobleShooting && (
                    <>
                      <h4>
                        <FaExclamationTriangle /> 트러블슈팅
                      </h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: selectedProject.details.trobleShooting,
                        }}
                      />
                    </>
                  )}

                  <h4>
                    <FaFlagCheckered />
                    마무리
                  </h4>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: selectedProject.details.end,
                    }}
                  />

                  {/* <h4>
                    <FaLink />
                    링크
                  </h4> */}
                </ModalBody>
                <ModalFooter>
                  {selectedProject.details.github ===
                  "사측 디자인 파일 사용으로 비공개" ? (
                    <span style={{ textDecoration: "line-through" }}>
                      <FaGithub /> 비공개
                    </span>
                  ) : (
                    <a
                      href={`${selectedProject.details.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                </ModalFooter>
              </ModalContent>
            </ProjectModal>
          </ModalPortal>
        </>
      )}
    </section>
  );
};

export default MobileSection03_Projects;
