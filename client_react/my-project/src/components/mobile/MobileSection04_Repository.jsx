import React from "react";
import Swal from "sweetalert2";
import {
  SectionTitle,
  SectionTitleUnderLine,
} from "../../assets/css/common/Common.styles";
import {
  MobileRepositorySection,
  MobileRepositoryTable,
  MobileRepositoryHeader,
  MobileRepositoryRow,
  MobileRepositoryCell,
  MobileRepositoryIndexCell,
  MobileRepositoryLink,
} from "../../assets/css/mobile/MobileSection04_Repository.style";

const MobileSection04_Repository = () => {
  const repositories = [
    {
      id: 1,
      link: "제 Github입니다.",
      href: "https://github.com/HyperQuanx",
      platform: "Github",
    },
    {
      id: 2,
      link: "제 벨로그입니다.",
      href: "https://velog.io/@hyper_quanx/posts",
      platform: "Velog",
    },
    {
      id: 3,
      link: "제 Tistory입니다.",
      href: "https://dreamroqkfwk.tistory.com/",
      platform: "Tistory",
    },
    {
      id: 4,
      link: "제 이력서입니다.",
      href: "https://qbix-resume.vercel.app/",
      platform: "Web Resume",
    },
  ];

  const handleLinkClick = (repo) => {
    if (repo.href === "준비중입니다") {
      Swal.fire({
        title: "준비중입니다",
        text: "현재 준비 중입니다. 최대한 빨리 업로드하겠습니다.",
        icon: "info",
        confirmButtonText: "확인",
        confirmButtonColor: "#3b7ead",
      });
    } else {
      window.open(repo.href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <MobileRepositorySection>
      <SectionTitle>Repository</SectionTitle>
      <SectionTitleUnderLine></SectionTitleUnderLine>

      <MobileRepositoryTable>
        <MobileRepositoryHeader>
          <MobileRepositoryIndexCell>No.</MobileRepositoryIndexCell>
          <MobileRepositoryCell width={3}>Link</MobileRepositoryCell>
          <MobileRepositoryCell width={0.85}>Platform</MobileRepositoryCell>
        </MobileRepositoryHeader>

        {repositories.map((repo) => (
          <MobileRepositoryRow key={repo.id}>
            <MobileRepositoryIndexCell>{repo.id}</MobileRepositoryIndexCell>
            <MobileRepositoryCell width={3}>
              <MobileRepositoryLink onClick={() => handleLinkClick(repo)}>
                {repo.link}
              </MobileRepositoryLink>
            </MobileRepositoryCell>
            <MobileRepositoryCell width={0.85}>
              {repo.platform}
            </MobileRepositoryCell>
          </MobileRepositoryRow>
        ))}
      </MobileRepositoryTable>
    </MobileRepositorySection>
  );
};

export default MobileSection04_Repository;
