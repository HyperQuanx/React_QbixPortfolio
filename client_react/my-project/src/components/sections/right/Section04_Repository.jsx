import React from "react";
import Swal from "sweetalert2";
import {
  SectionTitle,
  SectionTitleUnderLine,
} from "../../../assets/css/common/Common.styles";
import {
  RepositoryTable,
  TableHeader,
  TableRow,
  TableCell,
  IndexCell,
} from "../../../assets/css/sections/right/Section04_Repository.style";

const Section04_Repository = () => {
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
      link: "제 Notion Portfolio입니다.",
      href: "https://www.notion.so/Fullstack-Developer-14b56f3c798c803582e8dd33d56650bb",
      platform: "Notion",
    },
    {
      id: 5,
      link: "제 이력서 파일입니다.",
      href: "준비중입니다",
      platform: "Word",
    },
    {
      id: 6,
      link: "제 자기소개서입니다.",
      href: "준비중입니다",
      platform: "PDF",
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
    <section>
      <SectionTitle>Repository</SectionTitle>
      <SectionTitleUnderLine></SectionTitleUnderLine>

      <RepositoryTable>
        <TableHeader>
          <IndexCell>No.</IndexCell>
          <TableCell width={3}>Link</TableCell>
          <TableCell width={0.5}>Platform</TableCell>
        </TableHeader>

        {repositories.map((repo) => (
          <TableRow key={repo.id}>
            <IndexCell>{repo.id}</IndexCell>
            <TableCell width={3}>
              <span
                style={{ color: "#3b7ead", cursor: "pointer" }}
                onClick={() => handleLinkClick(repo)}
              >
                {repo.link}
              </span>
            </TableCell>
            <TableCell width={0.5}>{repo.platform}</TableCell>
          </TableRow>
        ))}
      </RepositoryTable>
    </section>
  );
};

export default Section04_Repository;
