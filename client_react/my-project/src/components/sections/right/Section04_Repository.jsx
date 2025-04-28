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
  RepositoryLink,
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
      link: "제 이력서입니다.",
      href: "준비중입니다",
      platform: "Word",
    },
  ];

  // 준비중때문에 span으로 처리
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
              <RepositoryLink onClick={() => handleLinkClick(repo)}>
                {repo.link}
              </RepositoryLink>
            </TableCell>
            <TableCell width={0.5}>{repo.platform}</TableCell>
          </TableRow>
        ))}
      </RepositoryTable>
    </section>
  );
};

export default Section04_Repository;
