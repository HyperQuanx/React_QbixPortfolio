import React, { useState, useRef } from "react";
import {
  SectionTitle,
  SectionTitleUnderLine,
} from "../../../assets/css/common/Common.styles";
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
} from "../../../assets/css/sections/right/Section03_Projects.style";
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
import { Section03_Projects_Arrays } from "./Section03_Projects_Arrays";

const Section03_Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  // 프로젝트 목록
  const projects = Section03_Projects_Arrays();

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section>
      <SectionTitle>Projects</SectionTitle>
      <SectionTitleUnderLine></SectionTitleUnderLine>
      <ProjectDetailStyles />

      <ProjectsContainer>
        <ProjectGrid>
          {projects.map((project) => (
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

              <ProjectContainerSection>
                {project.description.map((desc, index) => (
                  <ProjectDescription key={index}>{desc}</ProjectDescription>
                ))}
              </ProjectContainerSection>

              <ProjectContainerSection>
                <ProjectTag>{project.stack}</ProjectTag>
              </ProjectContainerSection>

              <ProjectContainerSection>
                {project.roles.map((tag, index) => (
                  <RoleDescription key={index}>{tag}</RoleDescription>
                ))}
              </ProjectContainerSection>

              <ProjectContainerSection>
                {project.skillsTags.map((tag, index) => (
                  <SkillsTags key={index}>{tag}</SkillsTags>
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
        </>
      )}
    </section>
  );
};

export default Section03_Projects;
