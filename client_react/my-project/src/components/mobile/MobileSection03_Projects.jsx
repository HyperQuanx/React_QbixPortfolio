import useProjectDialog from "../../hooks/useProjectDialog";
import { useCallback, useState, useRef } from "react";
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
} from "react-icons/fa";
import { Section03_Projects_Arrays } from "../sections/right/Section03_Projects_Arrays";
import ModalPortal from "../common/ModalPortal";

const MobileSection03_Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  // 프로젝트 목록
  const projects = Section03_Projects_Arrays();

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  useProjectDialog(Boolean(selectedProject), modalRef, closeModal);

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
              role="button" tabIndex={0} aria-label={`${project.title} 상세 보기`}
              onKeyDown={(event) => {
                if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) {
                  event.preventDefault();
                  handleProjectClick(project);
                }
              }}
              onClick={() => handleProjectClick(project)}
            >
              <ProjectImageContainer>
                <ProjectImage src={project.image} alt={`${project.title} 화면`} loading="lazy" />
              </ProjectImageContainer>

              <ProjectTitle>
                <ProjectIcon>
                  <FaRegFileAlt />
                </ProjectIcon>
                {project.title}
              </ProjectTitle>

              <ProjectContainerSection
              >
                {project.description.map((desc, descIndex) => (
                  <ProjectDescription key={descIndex}>
                    {desc}
                  </ProjectDescription>
                ))}
              </ProjectContainerSection>

              <ProjectContainerSection
              >
                <ProjectTag>{project.stack}</ProjectTag>
              </ProjectContainerSection>

              <ProjectContainerSection
              >
                {project.roles.map((tag, roleIndex) => (
                  <RoleDescription key={roleIndex}>{tag}</RoleDescription>
                ))}
              </ProjectContainerSection>

              <ProjectContainerSection
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
            <ProjectModal ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
              <ModalContent className="projectModalContent">
                <ModalHeader>
                  <ModalTitle id="project-dialog-title">
                    <FaFolderOpen className="folderIcon" />
                    {selectedProject.title}
                  </ModalTitle>
                  <ModalCloseButton onClick={closeModal} aria-label="프로젝트 상세 닫기">
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
