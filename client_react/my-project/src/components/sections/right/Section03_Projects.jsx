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
} from "../../../assets/css/sections/right/Section03_Projects.style";
import { FaRegFileAlt, FaTimes, FaGithub, FaCalendarAlt } from "react-icons/fa";

const Section03_Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  // 프로젝트 목록
  const projects = [
    {
      id: 1,
      title: "한덕용_Portfolio",
      description: [
        "제 포트폴리오입니다.",
        "싸이컴즈 CMO님께 디자인 사용 허가를 받아 제작되었습니다.",
      ],
      tags: ["FullStack"],
      roles: [
        "기상청 초단기예보 API 연동으로 오늘의 날씨를 구현하였습니다.",
        "단독으로 기획부터 디자인, 프론트엔드·백엔드 개발 및 데이터베이스 구축까지 전 과정을 수행한 첫 프로젝트를 수행하였습니다.",
        "Cyworld 방명록 디자인을 참고하여 Feedback 기능을 구현하였습니다.",
        "AWS 배포와 CI/CD 구축을 진행하였습니다.",
      ],
      skillsTags: [
        "React",
        "Axios",
        "React-Router",
        "Styled-Components",
        "SpringBoot",
        "JPA",
        "MySQL",
        "AWS",
        "Jenkins",
      ],
      date: "2025.02.28 ~ 2025.03.20",
      image: "/public/project/portfolio_01.png",
      details: {
        title: "Portfolio",
        description:
          "실시간 및 녹화된 강의를 제공하는 온라인 교육 플랫폼입니다.",
        features: [
          "실시간 스트리밍 강의",
          "녹화된 강의 시청",
          "강의 자료 다운로드",
          "질의응답 기능",
        ],
        technologies: ["React", "WebRTC", "Redux", "Styled-Components"],
        role: "팀장 및 프론트엔드 개발자",
        contribution:
          "프로젝트 기획 및 관리, UI/UX 디자인, 전체 프론트엔드 개발",
      },
    },

    {
      id: 2,
      title: "온라인 학업성취도 평가",
      description: [
        "학생의 학업 수준 진단을 위한 서비스",
        "문제은행 기반 시험으로 학생의 성취도를 진단하고, 강점·약점 리포트와 AI 맞춤 학습 전략을 제공합니다.",
      ],
      tags: ["FullStack"],
      roles: [
        "전체적인 매니지먼트 담당(팀장, Github)을 맡아 팀원 관리, 프로젝트 진행 방향 결정, 프로젝트 관리 등을 담당하였습니다.",
        "전체적인 UI Layout을 구현하였고 디자인 파일을 Publishing하는 작업을 진행하였습니다.",
        "GPT API를 활용해 학생 성적을 AI로 분석하는 기능을 구현했습니다.",
        "Jenkins를 활용해 CI(지속적 통합)를 성공적으로 구축했습니다.",
      ],
      skillsTags: [
        "JavaScript",
        "Thymeleaf",
        "SpringBoot",
        "FastAPI",
        "MyBatis/JPA",
        "MySQL",
        "Jenkins",
        "AWS",
      ],
      date: "2024.12.16 ~ 2025.01.09",
      image: "/public/project/aaa01.png",
      details: {
        title: "학업 성취도 평가 시스템",
        description:
          "학생들의 학업 성취도를 평가하고 분석하는 웹 애플리케이션입니다.",
        features: [
          "사용자 인증 및 권한 관리",
          "학생 성적 입력 및 관리",
          "성적 통계 및 분석 리포트",
          "학부모 열람 기능",
        ],
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        role: "팀장 및 프론트엔드 개발",
        contribution: "프로젝트 기획 및 관리, UI/UX 디자인, 프론트엔드 개발",
      },
    },

    {
      id: 3,
      title: "Nine Cloud",
      description: [
        "본인의 감정을 정리하며 하루를 마무리할 수 있게 도와주는 감정일기 서비스입니다",
        "서로의 감정을 공유하고, 오늘 하루에 맞는 감정 솔루션을 제공합니다.",
      ],
      tags: ["FrontEnd"],
      roles: [
        "Onboarding 페이지와 Sign In/Up을 구현하였습니다.",
        "OAuth2.0을 이용한 소셜 로그인을 구현하였습니다.",
        "Socket.io를 이용한 실시간 채팅 기능을 구현하였습니다.",
        "Axios Interceptor를 활용해 Access/Refresh Token을 관리하여 자동 로그인 및 토큰 재발급 기능을 구현하였습니다",
      ],
      skillsTags: [
        "React",
        "TypeScript",
        "OAuth2.0",
        "Axios",
        "React-Query",
        "React-Router",
        "Styled-components",
      ],
      date: "2023.12.01 ~ 2024.01.12",
      image: "/public/project/nineCloud01.png",
      details: {
        title: "Nine Cloud 웹 서비스",
        description: "클라우드 기반 파일 저장 및 공유 서비스입니다.",
        features: [
          "파일 업로드 및 다운로드",
          "파일 공유 및 권한 관리",
          "사용자 계정 관리",
          "스토리지 사용량 모니터링",
        ],
        technologies: ["React", "AWS S3", "Node.js", "Express"],
        role: "프론트엔드 개발자",
        contribution: "사용자 인터페이스 개발, API 연동, 파일 업로드 기능 구현",
      },
    },

    {
      id: 4,
      title: "StudyWithChunjae(SWC)",
      description: [
        "학습 관리와 공유를 한 곳에서 쉽게 할 수 있는 서비스입니다.",
        "오늘의 학습 목표를 설정하고, 나의 학습 리스트를 관리하며, 친구들과 학습 현황을 공유하고 독려할 수 있습니다.",
      ],
      tags: ["FullStack"],
      roles: [
        "Web Design을 작업하고 템플릿 고도화 작업을 맡았습니다.",
        "BCrypt 알고리즘을 이용하여 사용자 정보를 암호화하여 저장하고 JWT를 활용하여 토큰 발급 및 검증 기능을 구현하였습니다.",
        "Spring Security, OAuth2.0을 활용하여 인증 시스템/소셜 로그인을 구현하였습니다.",
        "회원 관리, 유저 정보 실시간 측정 기능을 구현하였습니다",
      ],
      skillsTags: [
        "JavaScript",
        "Thymeleaf",
        "SpringBoot",
        "SpringSecurity",
        "OAuth2.0",
        "MyBatis/JPA",
        "MySQL",
      ],
      date: "2024.12.05 ~ 2024.12.13",
      image: "/public/project/swc01.png",
      details: {
        title: "천재교육 스터디 플랫폼",
        description:
          "학생들의 스터디 그룹 형성 및 관리를 위한 웹 플랫폼입니다.",
        features: [
          "BCryptPasswordEncoder를 이용한 비밀번호 암호화",
          "스터디 그룹 생성 및 관리",
          "스터디 일정 관리",
          "자료 공유 기능",
        ],
        technologies: ["React", "Spring Boot", "OAuth2.0", "MySQL"],
        role: "풀스택 개발자",
        contribution: "인증 시스템 구현, 프론트엔드 개발, API 설계 및 구현",
      },
    },

    {
      id: 5,
      title: "Inflearn Clone Coding",
      description: [
        "인프런 디자인을 클론 코딩한 서비스입니다.",
        "강의를 시청하고 댓글을 달고 좋아요를 누를 수 있습니다.",
      ],
      tags: ["FullStack"],
      roles: [
        "Layout과 Common UI를 구현하였습니다",
        "BCrypt 알고리즘을 이용하여 사용자 정보를 암호화하여 저장하고 JWT를 활용하여 토큰 발급 및 검증 기능을 구현하였습니다.",
        "Stream을 이용한 정렬 기능과 페이징을 구현하였습니다",
        "비동기 통신을 이용하여 실시간 수정 기능을 구현하였습니다.",
      ],
      skillsTags: [
        "JavaScript",
        "Thymeleaf",
        "SpringBoot",
        "SpringSecurity",
        "MyBatis/JPA",
        "MySQL",
      ],
      date: "2024.11.25 ~ 2024.12.01",
      image: "/public/project/inflearn_clone_coding01.png",
      details: {
        title: "인프런 클론 코딩",
        description:
          "온라인 교육 플랫폼 인프런의 주요 기능을 클론 코딩한 프로젝트입니다.",
        features: [
          "강의 목록 및 상세 페이지",
          "사용자 인증 및 권한 관리",
          "강의 검색 및 필터링",
          "결제 시스템 모의 구현",
        ],
        technologies: ["React", "Spring Boot", "Spring Security", "MySQL"],
        role: "백엔드 개발자",
        contribution: "인증 시스템 구현, API 설계 및 개발, 데이터베이스 설계",
      },
    },

    {
      id: 6,
      title: "NanuSam",
      description: [
        "선생님들을 위한 중고거래 서비스입니다.",
        "교육 관련 물품을 편리하게 사고팔 수 있습니다.",
      ],
      tags: ["FullStack"],
      roles: [
        "Layout과 Common UI를 구현하였습니다.",
        "Admin 기능 회원 관리, 공지, 상품 관리 CRUD를 구현하였습니다",
        "IntersectionObserver를 활용하여 메인화면 무한스크롤을 구현하였습니다.",
      ],
      skillsTags: ["JavaScript", "Jsp", "Spring", "MySQL", "Bootstrap"],
      date: "2024.11.11 ~ 2024.11.18",
      image: "/public/project/nanusam01.png",
      details: {
        title: "나누샘 - 물품 나눔 플랫폼",
        description: "사용하지 않는 물품을 나눔하는 커뮤니티 플랫폼입니다.",
        features: [
          "물품 등록 및 검색",
          "사용자 간 메시지 기능",
          "위치 기반 검색",
          "카테고리별 필터링",
        ],
        technologies: ["Spring MVC", "JSP", "MySQL", "Bootstrap"],
        role: "풀스택 개발자",
        contribution:
          "전체 기능 설계 및 구현, 데이터베이스 설계, 프론트엔드 개발",
      },
    },
  ];

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
                {project.tags.map((tag, index) => (
                  <ProjectTag key={index}>{tag}</ProjectTag>
                ))}
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
            <ModalContent>
              <ModalHeader>
                <ModalTitle>{selectedProject.details.title}</ModalTitle>
                <ModalCloseButton onClick={closeModal}>
                  <FaTimes />
                </ModalCloseButton>
              </ModalHeader>
              <ModalBody>
                <p>
                  <strong>프로젝트 기간:</strong> {selectedProject.date}
                </p>
                <p>
                  <strong>설명:</strong> {selectedProject.details.description}
                </p>

                <h4>주요 기능</h4>
                <ul>
                  {selectedProject.details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h4>사용 기술</h4>
                <ProjectContainerSection>
                  {selectedProject.details.technologies.map((tech, index) => (
                    <SkillsTags key={index}>{tech}</SkillsTags>
                  ))}
                </ProjectContainerSection>

                <h4>역할</h4>
                <p>{selectedProject.details.role}</p>

                <h4>기여도</h4>
                <p>{selectedProject.details.contribution}</p>
              </ModalBody>
              <ModalFooter>
                <a
                  href={`https://${selectedProject.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
              </ModalFooter>
            </ModalContent>
          </ProjectModal>
        </>
      )}
    </section>
  );
};

export default Section03_Projects;
