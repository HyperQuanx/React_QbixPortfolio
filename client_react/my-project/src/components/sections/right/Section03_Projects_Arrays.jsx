export const Section03_Projects_Arrays = () => {
  const projects = [
    {
      id: 1,
      title: "온라인 학업성취도 평가",
      description: [
        "학생의 학업 수준 진단을 위한 서비스입니다.",
        "문제은행 기반 시험으로 학생의 성취도를 진단하고, 강점·약점 리포트와 AI 맞춤 학습 전략을 제공합니다.",
      ],
      stack: ["FullStack"],
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
      image: "/project/aaa01.png",
      details: {
        Sortation: "팀 프로젝트",
        Achievement: "첫 단독 풀스택 프로젝트",
        developers: "FullStack : 한덕용, 강경민, 이원희, 조수진, 최사랑",
        github: "사측 디자인 파일 사용으로 비공개",
        url: "배포 중단",
        features: [
          "문제은행으로부터 시험 문제를 받아와 학생들에게 제공하고 다양한 난이도의 문제를 포함해 학생의 학업 수준을 정확히 평가할 수 있도록 구성했습니다.",
          "시험 결과를 채점하고 데이터를 수집 후 분석하여 정확한 학업 성취도를 진단할 수 있습니다.",
          "시험 결과를 바탕으로 학생의 강점과 약점을 차트로 시각화한 리포트를 제공하고 PDF로 다운로드 할 수 있습니다.",
          "AI 튜터가 학생의 성취도를 분석하고 학습 전략을 제시합니다.",
        ],
        overview:
          "AI 튜터가 피드백 해주는 온라인 학업성취도 평가입니다. 사용자는 문제은행에서 받아온 문제들을 풀고 성취도를 진단받을 수 있습니다.",
        myRole: [
          "전체적인 매니지먼트 담당(팀장, Github)을 맡아 팀원 관리, 프로젝트 진행 방향 결정, 프로젝트 관리 등을 담당하였습니다.",
          "전체적인 UI Layout을 구현하였고 디자인 파일을 Publishing하는 작업을 진행하였습니다.",
          "나의 리포트 FrontEnd 작업을 맡아 구현했습니다.",
          "GPT API와 FastAPI를 활용해 학생 성적을 AI로 분석하는 기능을 구현했습니다.",
          "Jenkins를 활용해 CI(지속적 통합)를 성공적으로 구축했습니다.",
          "Github를 총괄하여 프로젝트를 진행하였습니다.",
        ],
        content: `
        <article>
          <img src="/project/aaa_ppt_02.png" alt="온라인 학업성취도 평가 ppt2" />
        </article>
        <div class="pjDetails">
          <p>로그인/회원가입에선 Member 테이블을 사용하였고 시험 문제 풀이에선 Exam, Item 테이블, Report 에서는 통계 관련 테이블들을 사용하였습니다.</p>
        </div>

        <article>
          <img src="/project/aaa_gif_01.gif" alt="온라인 학업성취도 평가 gif1" />
        </article>
        <div class="pjDetails">
          <p>기본 리포트입니다. 치룬 시험지를 선택한 후 점수를 확인할 수 있습니다.</p>
          <p>시험참여 정보와 시험 결과를 확인할 수 있습니다.</p>
          <p>팝업창을 통해 각 문제의 정답, 사용자 답을 체크하고 해설을 확인할 수 있습니다.</p>
        </div>

        <article>
          <img src="/project/aaa_gif_02.gif" alt="온라인 학업성취도 평가 gif2" />
        </article>
        <div class="pjDetails">
          <p>상세 리포트입니다. 시험 결과를 차트로 표현해 학생의 성취도를 시각화하였습니다.</p>
          <p>차트는 Chart.js를 활용하여 구현했습니다.</p>
          <p>문항 난이도별 성취율, 문항 난이도 별 문제 풀이 소요 시간, 문항별 정오표, 응답 유형별 정답률을 확인할 수 있습니다.</p>
        </div>

        <article>
          <img src="/project/aaa_gif_03.gif" alt="온라인 학업성취도 평가 gif3" />
        </article>
        <div class="pjDetails">
          <p>오답노트와 PDF 다운로드입니다.</p>
          <p>PDF 다운로드는 jsPDF를 활용하여 구현하였습니다.</p>
        </div>

        <article>
          <img src="/project/aaa_gif_04.gif" alt="온라인 학업성취도 평가 gif4" />
        </article>
        <div class="pjDetails">
          <p>AI 튜터가 학생의 성적을 분석하고 학습 전략을 제시합니다.</p>
          <p>모델은 Chat-GPT-4o-mini를 사용하였고 좀 더 빠른 응답을 위해 FastAPI로 구현하였습니다.</p>
        </div>
        `,
        trobleShooting: `
          <div class="troubleshootingContainer">
            <details class="troubleItem">
              <summary class="troubleTitle">AI 응답 할루시네이션</summary>
              <div class="troubleContent">
                <p>초기에 AI가 데이터를 잘못 분석하여 학생의 성취도를 잘못 평가하는 문제가 있었습니다.</p>
                <p>원인을 찾아보니 데이터를 직접적으로 보내지 않고 js를 통해 페이지의 정보를 긁어 보내다보니 속도 저하 문제와 데이터 불일치 문제가 발생하였다는것을 깨달았습니다.</p>
                <p>이를 해결하기 위해</p>
                <img src="/project/aaa_code_ai01.png" alt="온라인 학업성취도 평가 code" />
                <img src="/project/aaa_code_ai02.png" alt="온라인 학업성취도 평가 code" />
                <p>위와 같이 데이터를 직접 보내는 방식으로 변경하고 Prompt 템플릿을 작성하여 문제를 해결했습니다.</p>

              </div>
            </details>

            <details class="troubleItem">
              <summary class="troubleTitle">AI 응답이 매번 다르게 나오는 문제</summary>
              <div class="troubleContent">
                <p>Client가 진단을 할 때마다 세부적인 응답이 다르게 나오는 문제가 있었습니다.</p>
                <p>또한 계속 불필요한 ChatGPT API 요청을 보내 비용과 정보 불일치 문제가 발생하였습니다.</p>
                <p>이를 해결하기 위해</p>
                <img src="/project/aaa_code_ai03.png" alt="온라인 학업성취도 평가 code" />
                <p>초기 시스템 메시지 템플릿을 지정해주었고 대화 기록을 저장하여 시험지에 대한 초기 응답을 받았다면 뒤부터는 기존 진단 불러오기 기능을 구현하여 문제를 해결했습니다.</p>
              </div>
            </details>
          </div>
        `,
        end: `
        <div class="pjDetails">
          <p>풀스택으로 참여한 가장 큰 프로젝트였고 실제 서비스 중인 두 플랫폼을(성취도 평가, 문제은행) 하나의 프로젝트로 녹여내는 작업을 하다보니 실제 현업에서 근무하는듯한 경험을 얻었습니다.</p>
          <p>부트캠프에서 배운 기술에만 의존하지 않고 새로운 시도(FastAPI, Jenkins, AWS)를 해보았고 이를 통해 프로젝트의 가치를 높이는데 큰 도움이 되었습니다.</p>
        </div>
        `,
        links: "",
      },
    },

    {
      id: 2,
      title: "Nine Cloud",
      description: [
        "본인의 감정을 정리하며 하루를 마무리할 수 있게 도와주는 감정일기 서비스입니다",
        "서로의 감정을 공유하고, 오늘 하루에 맞는 감정 솔루션을 제공합니다.",
      ],
      stack: ["FrontEnd"],
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
      image: "/project/nineCloud01.png",
      details: {
        Sortation: "팀 프로젝트",
        Achievement: "서비스 5일간 146명의 가입 유저",
        developers:
          "FrontEnd : 한덕용, 송지우, 주철민 / BackEnd : 유재현, 이찬영 / Design : 이승연",
        github: "https://github.com/final-project-hh99/front",
        url: "https://nine-cloud9.vercel.app/",
        features: [
          "오늘 하루 느꼈던 감정과 날씨를 기록할 수 있습니다.",
          "오늘의 감정을 공유할 수 있습니다.",
          "AI가 상담해주는 AI 클라우드 서비스를 사용할 수 있습니다.",
          "커뮤니티 탭에서 댓글과 좋아요로 일기에 대한 반응을 남길 수 있습니다.",
          "감정을 토로할 수 있는 익명채팅방에서 오늘 하루에 대해 이야기를 나눌 수 있습니다.",
        ],
        overview:
          "Nine Cloud는 본인의 감정을 정리하여 하루를 마무리할 수 있게 도와주는 감정일기 서비스입니다. 이름은 Cloud Nine (행복의 절정)이라는 속담에서 착안하였고 비, 해와 같이 서비스의 상징적인 모양이 구름의 형태로 아우러지도록 서비스 로고를 제작했습니다.",
        myRole: [
          "FrontEnd로 참여했습니다.",
          "Onboarding와 Sign In/Up을 구현하였습니다.",
          "OAuth2.0을 이용한 소셜 로그인을 구현하였습니다.",
          "Socket.io를 이용한 실시간 채팅 기능을 구현하였습니다.",
          "Axios Interceptor를 활용해 Access/Refresh Token을 관리하여 자동 로그인 및 토큰 재발급 기능을 구현하였습니다",
          "Kakao Share API를 활용해 카카오톡 공유 기능을 구현하였습니다.",
          "발표 및 시연과 발표 영상을 제작하였습니다.",
        ],
        content: `
        <div class="video-container">
          <strong>프로젝트 발표 영상</strong>
          <iframe 
            width="100%" 
            height="315" 
            src="https://www.youtube.com/embed/H19d_RmrYqU" 
            title="프로젝트 발표 영상" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>

        <article>
          <img src="/project/ninecloud_architecture.png" alt="nineCloud Architecture" />
        </article>
        <div class="pjDetails">
          <p>프로젝트 아키텍처입니다.</p>
          <p>블루/그린 배포방식을 통해 무중단 배포를 구현하였고, 소멸성 데이터는 레디스 스토리지 를 이용하고 있습니다. 이미지 파일은 S3를 사용하고 있고, 그 외에 모니터링은 그라파나, 채팅은 socket.io를 통해 클라이언트와 통신하고 있습니다.</p>
          <p>서로 다른 코딩 스타일을 해결하기 위한 방법으로 ESLint와 Prettier를 적용하였습니다. CRA를 채택한 이유는 오래 사용되었기에, 많은 프로젝트와 기업에서 사용되고 있고 이는 CRA가 안정적이라는 것을 의미하기에 채택하였습니다. 웹앱의 특성상 컴포넌트가 형제 관계가 많아 전역 상태관리가 필요하였고, 번들 크기와 보일러플레이트가 적은 recoil을 선택하였습니다.</p>
        </div>

        <table class="feature-table">
          <thead>
            <tr>
              <th>소셜 로그인</th>
              <th>달력 페이지</th>
              <th>그림 그리기</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="/project/ninecloud_gif01.gif" alt="소셜 로그인 기능" />
              </td>
              <td>
                <img src="/project/ninecloud_gif02.gif" alt="단락 페이지 기능" />
              </td>
              <td>
                <img src="/project/ninecloud_gif03.gif" alt="그림 그리기 기능" />
              </td>
            </tr>
            <tr>
              <td class="feature-description">
                <p>OAuth2.0을 이용한 소셜 로그인 구현</p>
              </td>
              <td class="feature-description">
                <p>감정 공유 및 기록 기능</p>
              </td>
              <td class="feature-description">
                <p>Canvas API를 활용한 그림 그리기 기능</p>
              </td>
            </tr>
          </tbody>
        </table>

        <table class="feature-table">
          <thead>
            <tr>
              <th>AI OpenAPI</th>
              <th>무한스크롤</th>
              <th>채팅방</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="/project/ninecloud_gif04.gif" alt="OpenAPI 기능" />
              </td>
              <td>
                <img src="/project/ninecloud_gif05.gif" alt="무한스크롤 기능" />
              </td>
              <td>
                <img src="/project/ninecloud_gif06.gif" alt="채팅방 기능" />
              </td>
            </tr>
            <tr>
              <td class="feature-description">
                <p>OpenAPI를 활용한 감정 분석 기능</p>
              </td>
              <td class="feature-description">
                <p>무한스크롤 기능</p>
              </td>
              <td class="feature-description">
                <p>Socket.io를 활용한 실시간 채팅 기능</p>
              </td>
            </tr>
          </tbody>
        </table>

        <p>다음은 최적화 관련 내용입니다.</p>
        <article>
          <img src="https://github.com/final-project-hh99/front/assets/128838463/887c5020-6101-4d92-a3d3-d9eb62c9927b" alt="nineCloud 최적화" />
        </article>
        <div class="pjDetails">
          <h4 style="font-size: 1.1rem;">1. 번들크기 최적화를 진행하였습니다.</h4>
          <p>- react-icons는 종류별로 js파일을 하나씩 가지고 있어서, 하나의 아이콘을 실행하면 그 아이콘이 속한 js 파일이 실행돼서 관련 없는 불필요한 파일들도 함께 빌딩 돼 번들 크기가 커집니다. 그래서 @react-icons/all-files를 설치했고, 이 라이브러리는 아이콘마다 js 파일을 가지고 있어서 빌딩 시 필요한 파일만 실행 돼 번들 크기 최적화를 시킬 수 있었습니다.</p>
          <h4 style="font-size: 1.1rem;">2. React.lazy를 이용하여 라우팅 code splitting / webP확장자로 변경하였습니다.</h4>
          <p>- React.lazy는 React에서 코드 스플리팅을 구현하기 위한 기능 중 하나입니다. 코드 스플리팅은 애플리케이션을 더 작은 청크(chunk)로 나누어 각 청크가 필요할 때만 로드되도록 하는 기술입니다. 이를 통해 초기 로딩 시간을 줄이고 성능을 최적화할 수 있습니다. 전체 애플리케이션을 로드하는 대신 현재 사용자가 방문한 페이지에 필요한 코드만 로드하는 것을 의미하여 더 빠른 로딩을 가능하게 합니다. - WebP 이미지는 일반적으로 JPEG 및 PNG보다 더 효율적인 압축을 제공하면서도 높은 품질을 유지합니다. 자주 사용되는 이미지를 효율적으로 압축하기 위해 webP로 변경하였습니다.</p>
          <p>- WebP 이미지는 일반적으로 JPEG 및 PNG보다 더 효율적인 압축을 제공하면서도 높은 품질을 유지합니다. 자주 사용되는 이미지를 효율적으로 압축하기 위해 webP로 변경하였습니다.</p>
          <h4 style="font-size: 1.1rem;">3. Profiler를 활용해서 불필요한 렌더링 최적화 / compressor.js로 이미지 압축하였습니다.</h4>
          <p>프로파일러를 사용하여 컴포넌트 렌더링 최적화를 진행했습니다. 특히 글쓰는 곳이나 그림을 그리는 부분은 마우스를 움직이거나 글자를 입력할 때 마다 헤더나 모든 레이아웃이 리렌더링이 되는 것을 알 수 있었습니다. 따라서 React.memo를 사용하여 컴포넌트를 캐싱했습니다.</p>
          <p>마지막으로 compressor.js를 사용하여 0.02mB로 압축 후 서버에 보내니 하나의 이미지 로딩시간이 최대 50% (6ms->3ms)단축되었습니다.</p>
        </div>
        `,
        trobleShooting: `
          <div class="troubleshootingContainer">
            <details class="troubleItem">
              <summary class="troubleTitle">토큰 재발급 관련</summary>
              <div class="troubleContent">
                <p>초기에 서버에서 지정한 만료시간과 클라이언트에서 계산한 만료시간이 다르며, 모든 에러 사항에서 Token 재발급 로직으로 들어가 버리는 문제가 발생했습니다.</p>
                <p>또한, 서버와 클라이언트 간 에러 코드가 일치하지 않는 문제도 있었습니다.</p>
                <p>원인을 찾아보니 프론트엔드에서 만료시간을 계산하고 setTimeout()을 활용하여 자동으로 재발급 요청을 하도록 설계했으나, 서버의 만료시간과 불일치하는 문제가 발생했습니다.  
                이로 인해 토큰 관리가 복잡해지고 불필요한 서버 요청이 증가하며, 보안 문제까지 발생할 수 있음을 깨달았습니다.</p>
                <p>이를 해결하기 위해 서버에서 만료시간을 직접 관리하고 클라이언트에서는 만료된 이후 서버 요청 시 자동으로 토큰 재발급 URL로 이동하도록 Axios 인터셉터를 활용하여 문제를 해결했습니다.</p>
                <p>또한 서버와 협의하여 419번 에러코드를 토큰 만료 코드로 통일하고, 인터셉터에서 419번 에러가 발생하면 자동으로 /token 경로로 이동하여 RefreshToken을 서버에 보내도록 구현하였습니다.</p>
                <p>그 결과, 토큰이 만료되면 419번 에러코드가 발생하고, 자동으로 /token으로 이동하여 새로운 AccessToken을 발급받을 수 있도록 개선되었습니다.</p>
                <img src="/project/ninecloud_code01.png" alt="토큰 만료시간 처리 로직" />
              </div>
            </details>

            <details class="troubleItem">
              <summary class="troubleTitle">서버에서 지정해준 URL로 접근하지 못하는 현상</summary>
              <div class="troubleContent">
                <p>서버에서 지정해준 URL로 접근하지 못하는 현상이 발생했습니다.</p>
                <img src="/project/ninecloud_trouble_01.png" alt="nineCloud Trouble" />
                <p>서버에서 설정해준 URL로 접근하는 과정이 쉽지 않았습니다.</p>
                <img src="/project/ninecloud_trouble_02.png" alt="nineCloud Trouble" />
                <img src="/project/ninecloud_trouble_03.png" alt="nineCloud Trouble" />
                <p>분명 엔드포인트를 /community/chat/socket.io로 설정해놓았는데 막상 개발자 도구를 보면 설정한 엔드포인트로 접근하지 못했습니다.</p>
                <img src="/project/ninecloud_trouble_04.png" alt="nineCloud Trouble" />
                <p>혹시 path설정을 따로 해준다면 접근할 수 있을까 해서 기존에 하던 방식과 다르게 path 설정을 따로 해줬습니다.</p>
                <img src="https://github.com/final-project-hh99/front/assets/128838463/92dc4443-ffff-4204-8e45-bfa78206b532" alt="nineCloud Trouble" />
                <p>결국 Server와 연결에 성공하였고 채팅 기능 구현에 성공했습니다.</p>
              </div>
            </details>
          </div>
        `,
        end: `
        <article>
          <img src="/project/best_hanghae.png" alt="최고의인기프로젝트상" />
        </article>
        <div class="pjDetails">
          <p>항해99 17기 최고의 인기 프로젝트 상을 수상하였습니다.</p>
        </div>

        <article>
          <img src="/project/ninecloud_service.png" alt="nineCloud 서비스" />
        </article>
        <div class="pjDetails">
          <p>첫 대규모 프로젝트였고, 잠깐이나마 실제 서비스를 했던 첫 프로젝트였던만큼 큰 애정을 가지고 작업에 임했습니다. 그 결과로 감사하게도 유저테스트 기간 5일동안 총 146명이 가입하였고 648개의 게시물이 등록되고 75개의 유저피드백을 받았습니다.</p>
        </div>
        `,
        links: "",
      },
    },

    {
      id: 3,
      title: "한덕용_Portfolio",
      description: [
        "제 포트폴리오입니다.",
        "싸이컴즈 CMO님께 디자인 사용 허가를 받아 제작되었습니다.",
      ],
      stack: ["FullStack"],
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
      date: "2025.02.28 ~ 2025.03.22",
      image: "/project/portfolio_01.png",
      details: {
        Sortation: "개인 프로젝트",
        Achievement: "첫 단독 풀스택 프로젝트",
        developers: "FullStack : 한덕용",
        github: "https://github.com/HyperQuanx/React_QbixPortfolio",
        url: "배포 중단",
        features: [
          "예전 싸이월드가 생각나는 디자인으로 제작되었습니다.",
          "Today is 라는 문구를 통해 오늘의 날씨(서울 중구 기준)를 확인할 수 있습니다.",
          "Contact을 통해 제게 바로 연락이 가능합니다.",
          "Feedback을 통해 저의 포트폴리오에 대한 피드백을 주실 수 있습니다.",
        ],
        overview:
          "제 포트폴리오입니다. 레이아웃은 싸이컴즈 CMO님께 디자인 사용 허가를 받아 제작되었습니다. 제 포트폴리오를 방문해주셔서 진심으로 감사드립니다.",
        myRole: [
          "기상청 초단기예보 API 연동으로 오늘의 날씨를 구현하였습니다.",
          "단독으로 기획부터 디자인, 프론트엔드·백엔드 개발 및 데이터베이스 구축까지 전 과정을 수행한 첫 프로젝트를 수행하였습니다.",
          "Cyworld 방명록 디자인을 참고하여 Feedback 기능을 구현하였습니다.",
          "AWS 배포와 CI/CD 구축을 진행하였습니다.",
        ],
        content: `
        <h3 style="text-align: center; font-size: 1.2rem; margin-bottom: 20px; font-weight: bold;">※현재 모바일 적응형 작업 중입니다.※</h3>
        <article>
          <img src="/project/portfolio_01.png" alt="한덕용 포트폴리오" />
        </article>
        <table class="feature-table">
          <thead>
            <tr>
              <th>포트폴리오 메인</th>
              <th>팝업 이벤트</th>
              <th>오늘의 날씨</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: center; vertical-align: middle;">
                <img 
                  src="/project/portfolio_video01.gif" 
                  alt="포트폴리오 메인화면" 
                  style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
                />
              </td>
              <td>
                <img src="/project/portfolio_video02.gif" alt="포트폴리오 팝업 이벤트" />
              </td>
              <td>
                <img src="/project/portfolio_video03.gif" alt="포트폴리오 오늘의 날씨" />
              </td>
            </tr>
            <tr>
              <td class="feature-description">
                <p>Layout/Navbar</p>
              </td>
              <td class="feature-description">
                <p>PopupEvent</p>
              </td>
              <td class="feature-description">
                <p>날씨에 따라 아이콘/상태 변경</p>
              </td>
            </tr>
          </tbody>
        </table>

        <table class="feature-table">
          <thead>
            <tr>
              <th>프로젝트 팝업</th>
              <th>Contact</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="/project/portfolio_video04.gif" alt="포트폴리오 프로젝트 팝업" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" />
              </td>
              <td style="text-align: center; vertical-align: middle;">
                <img src="/project/portfolio_video05.gif" alt="포트폴리오 Contact" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" />
              </td>
              <td style="text-align: center; vertical-align: middle;">
                <img src="/project/portfolio_video06.gif" alt="포트폴리오 Feedback" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" />
              </td>
            </tr>
            <tr>
              <td class="feature-description">
                <p>각 프로젝트 정리</p>
              </td>
              <td class="feature-description">
                <p>즉시 메일 전송 기능</p>
              </td>
              <td class="feature-description">
                <p>방명록 디자인의 피드백</p>
              </td>
            </tr>
          </tbody>
        </table>
        `,
        trobleShooting: `
          <div class="troubleshootingContainer">
            <details class="troubleItem">
              <summary class="troubleTitle">날씨 정보 가져오기 문제</summary>
              <div class="troubleContent">
                <p>작업 중 갑자기 날씨 정보 아이콘이 표시되지 않는 문제가 발생하였습니다.</p>
                <p>원인을 찾기 위해 Postman에서 직접 API를 호출해보니 No Data를 반환하였습니다.</p>
                <p>Params를 검증해보니 자정을 넘기게 되면 오늘 날짜의 어제 시간을 호출하고 있던 문제를 발견하였습니다.</p>
                <p>해결 : 자정 ~ 0030 사이일 때는 이전 날짜의 23:30 데이터를 사용하도록 수정하였습니다.</p>
                <img src="/project/portfolio_trouble01.png" alt="한덕용 포트폴리오 Trouble" />
              </div>
            </details>
          </div>
        `,
        end: `이번 프로젝트는 제 첫 풀스택 프로젝트인 만큼 큰 애정을 가지고 작업에 임했습니다. 다양한 기능을 추가하고 여러 요소를 더욱 풍부하게 만들고 싶은 욕심이 컸지만 포트폴리오라는 본분을 잊지 않으려 노력했습니다. 그 과정에서 기능의 양과 질 사이에서 조율하는 것이 쉽지 않았지만 프로젝트의 핵심 가치에 집중하며 최선을 다했습니다.`,
        links: "",
      },
    },

    {
      id: 4,
      title: "StudyWithChunjae(SWC)",
      description: [
        "학습 관리와 공유를 한 곳에서 쉽게 할 수 있는 서비스입니다.",
        "오늘의 학습 목표를 설정하고, 나의 학습 리스트를 관리하며, 친구들과 학습 현황을 공유하고 독려할 수 있습니다.",
      ],
      stack: ["FullStack"],
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
      image: "/project/swc01.png",
      details: {
        Sortation: "팀 프로젝트",
        Achievement:
          "기획부터 개발까지 총체적인 프로세스를 경험, 인터넷 강의 사이트 제작",
        developers: "FullStack : 한덕용, 강감찬, 조수진, 한인규",
        github: "https://github.com/study-with-chunjae/swc",
        url: "배포 중단",
        features: [
          "오늘 학습해야할 날짜를 선택 후 공부해야할 리스트를 확인할 수 있습니다.",
          "나의 학습 리스트를 조회하고 등록할 수 있습니다.",
          "학습을 친구들과 공유하여 학습상황을 알릴 수 있고 좋아요를 통해 학습을 독려할 수 있습니다.",
        ],
        overview:
          "SWC 학습 플랫폼은 서로의 학습 현황을 공유하고 독려할 수 있는 서비스입니다.",
        myRole: [
          "Sign In/Up(BCrypt 암호화, JWT 관리, OAuth2.0, Security 인증 처리, 임시 비밀번호 관리 등)을 구현하였습니다.",
          "웹 디자인을 맡았고 템플릿을 고도화하였습니다.",
          "마이페이지에서 기본 회원 관리와 유저 정보 실시간 변경 기능을 구현하였습니다.",
          "Github를 총괄하여 프로젝트를 진행하였습니다.",
        ],
        content: `
          <div class="video-container">
            <strong>프로젝트 시연 영상</strong>
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/nNmYPfYeXXc" 
              title="프로젝트 시연 영상" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>

          <article>
            <img src="/project/swc_ppt01.png" alt="SWC" style="box-shadow:none; border-radius:0; width: 100%;" />
          </article>
          <div class="pjDetails">
            <p>JWT 기반 인증 시스템을 구현하였습니다. 사용자가 서버에 요청을 보낼 때, JWT 필터를 통해 먼저 토큰을 확인하는 구조로 설계하였습니다.</p>
            <p>쿠키에서 토큰을 추출한 후, validateToken() 메서드를 활용하여 유효성을 검증하고, 정상적인 경우 사용자 정보를 추출하여 SecurityContextHolder에 인증 객체를 저장하도록 처리하였습니다.</p>
            <p>토큰이 없거나 유효하지 않은 경우, UsernamePasswordAuthenticationFilter로 요청이 전달되어 아이디 및 비밀번호 검증을 수행하며, 인증이 완료되면 새로운 AccessToken을 발급하여 이후 요청에서 JWT 인증을 사용할 수 있도록 하였습니다.</p>
            <p>Spring Security의 인증 필터 체인을 활용하여 인증 단계를 구조화하였으며, 보안성을 강화하기 위해 비밀번호는 암호화된 상태로 DB에서 대조하도록 구현하였습니다.</p>
          </div>

          <article>
            <img src="/project/swc_ppt02.png" alt="SWC" style="box-shadow:none; border-radius:0; width: 100%;" />
          </article>
          <div class="pjDetails">
            <p>Google OAuth2 기반의 로그인 시스템을 구현하였습니다. 사용자가 Google 로그인을 요청하면, OAuth2 인증 프로세스가 자동으로 진행되도록 Spring Security OAuth2 Client를 활용하였습니다.</p>
            <p>Spring Security가 2~5단계를 자동으로 처리하여 인증 코드를 요청하고 반환받으며, 서버는 해당 인증 코드를 GoogleAuth에 전송하여 사용자 정보를 요청합니다.</p>
            <p>반환받은 사용자 정보를 바탕으로 새로운 회원 데이터를 생성하고, Member 및 MemberProfile 엔티티로 구성하여 DB에 저장하도록 설계하였습니다.</p>
            <p>인증이 완료된 후, 서버는 사용자 정보를 바탕으로 AccessToken을 생성하고 이를 클라이언트에 전달하며, 클라이언트는 해당 토큰을 쿠키에 저장한 뒤 메인 화면으로 리디렉트됩니다.</p>
          </div>
          `,
        trobleShooting: `
            <div class="troubleshootingContainer">
              <details class="troubleItem">
                <summary class="troubleTitle">JWT 기반 인증에서 토큰 검증 문제</summary>
                <div class="troubleContent">
                  <p>JWT를 이용한 사용자 인증을 구현한 후 일정 시간이 지나면 토큰이 만료되는 문제가 발생했습니다.</p>
                  <p>원인을 찾아보니 validateToken() 메서드에서 토큰을 검증하는 과정에서, 서명 키가 일정 시간이 지나면 변경되어 이전에 발급된 토큰이 유효하지 않게 되는 문제를 발견했습니다.</p>
                  <p>찾아보니 서버 재시작 시 새로운 키가 생성된다는 사실을 알게 되었습니다.</p>
                  <p>이를 해결하기 위해 서명 키를 변경하지 않고 고정된 키를 사용하여 토큰 검증 과정에서 문제가 발생하지 않도록 하였습니다.</p>
                </div>
              </details>
            </div>
          `,
        end: `이번 프로젝트에서도 전 프로젝트와 마찬가지로 로그인 프로세스를 더욱 고도화하고 싶은 욕심이 커 다시 한번 회원 관련 부분을 맡게 되었습니다. 이번에는 기존의 로그인 시스템을 개선하고 보다 안전하고 사용자 친화적인 기능을 추가하기 위해 노력했습니다. 특히, 보안 강화와 사용자 경험 개선에 중점을 두어 작업을 진행하였습니다.`,
        links: "",
      },
    },

    {
      id: 5,
      title: "Inflearn Clone Coding",
      description: [
        "인프런 디자인을 클론 코딩한 서비스입니다.",
        "강의를 시청하고 댓글을 달고 좋아요를 누를 수 있습니다.",
      ],
      stack: ["FullStack"],
      roles: [
        "Layout과 Common UI를 구현하였습니다",
        "BCrypt 알고리즘을 이용하여 사용자 정보를 암호화하여 저장하고 JWT를 활용하여 토큰 발급 및 검증 기능을 구현하였습니다.",
        "정렬 기능과 Stream을 이용한 페이징을 구현하였습니다.",
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
      image: "/project/inflearn_clone_coding01.png",
      details: {
        Sortation: "팀 프로젝트",
        Achievement: "Spring을 사용한 첫 프로젝트, 대부분의 CRUD 구현 성공",
        developers: "FullStack : 한덕용, 송수미, 조수진, 한인규",
        github: "https://github.com/In-gyu-and-the-Elders/InflearnCloneCoding",
        url: "배포 중단",
        features: [
          "강의를 시청하고 저장할 수 있습니다.",
          "댓글을 달고 좋아요를 누를 수 있습니다.",
          "선생님 사용자는 강의를 등록하고 관리할 수 있습니다.",
          "Github를 총괄하여 프로젝트를 진행하였습니다.",
        ],
        overview: "인프런 클론코딩 사이트입니다. ",
        myRole: [
          "인프런 디자인의 Layout과 Common UI를 구현하였습니다.",
          "BCrypt 알고리즘을 이용하여 사용자 정보를 암호화하여 저장하고 JWT를 활용하여 토큰 발급 및 검증 기능을 구현하였습니다.",
          "정렬 기능과 Stream을 이용한 페이징을 구현하였습니다.",
          "비동기 통신을 이용하여 실시간 내 정보 수정 기능을 구현하였습니다.",
        ],
        content: `
            <h3 style="text-align: center; font-size: 1.2rem; margin-bottom: 20px; font-weight: bold;">※인프런 공식 페이지의 허가를 받아 해당 내용을 업로드하였습니다※</h3>
            <div class="video-container">
              <strong>프로젝트 시연 영상</strong>
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/o4s8lpskI3A" 
                title="프로젝트 시연 영상" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </div>

            <div class="video-container">
              <strong>프로젝트 시연 영상</strong>
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/Xlh2dWzMh4o" 
                title="프로젝트 시연 영상" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </div>

            <div class="video-container">
              <strong>프로젝트 시연 영상</strong>
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/UIbHUDTIavY" 
                title="프로젝트 시연 영상" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </div>

            <article>
              <img src="/project/inflearn_clone_coding_ppt01.png" alt="SWC" style="box-shadow:none; border-radius:0; width: 100%;" />
            </article>
            <div class="pjDetails">
              <p>Spring Security와 BCryptPasswordEncoder를 활용하여 안전한 회원가입 시스템을 구현하였습니다.</p>
              <p>회원가입 시 사용자의 비밀번호를 BCryptPasswordEncoder를 사용하여 암호화하였으며 SecurityConfig에 PasswordEncoder를 등록하였습니다./p>
              <p>회원가입 요청이 들어오면 SignController에서 요청을 받아 SignService로 전달하며 SignServiceImpl에서 비밀번호를 암호화한 후 DTO 데이터를 VO로 변환하여 DB에 저장하도록 설계하였습니다.</p>
              <p>또한 Spring Security 설정을 활용하여 보다 안전한 회원가입이 이루어지도록 구성하였으며 성공적인 회원가입 후 컨트롤러에서 성공 메시지를 반환하도록 구현하였습니다.</p>
            </div>

            <article>
              <img src="/project/inflearn_clone_coding_ppt02.png" alt="SWC" style="box-shadow:none; border-radius:0; width: 100%;" />
            </article>
            <div class="pjDetails">
              <p>Spring Security와 JWT를 활용하여 로그인 기능을 구현하였습니다.</p>
              <p>로그인 시 사용자를 먼저 조회하고 그 이후 passwordEncoder를 통해 비밀번호를 검증하는 방식을 적용하였습니다.</p>
              <p>비밀번호 검증이 성공하면 JwtTokenProvider의 createToken 메서드를 활용하여 사용자 정보를 포함한 JWT를 생성하고 이를 반환하도록 설계하였습니다.</p>
              <p>JWT에는 사용자 ID, 이름, 이메일, 전화번호 등의 정보가 포함되며, 발급 시간과 만료 시간을 설정하여 보안성을 강화하였습니다.</p>
            </div>

            <article>
              <img src="/project/inflearn_clone_coding_ppt03.png" alt="SWC" style="box-shadow:none; border-radius:0; width: 100%;" />
            </article>
            <div class="pjDetails">
              <p>토큰을 클라이언트 쿠키에 저장시켜 사용자 인증 상태를 유지하도록 구현하였습니다.</p>
            </div>
            `,
        end: `
        <div class="pjDetails">
          <p>이번 프로젝트에서는 로그인 백엔드 로직을 집중적으로 구현했습니다. 로그인과 로그아웃은 모든 서비스의 시작점이자 가장 기본적이면서도 복잡한 작업이 이루어지는 부분이라고 생각했습니다. 따라서 이를 더욱 견고하고 효율적으로 구현하기 위해 많은 노력을 기울였습니다.</p>
        </div>
        `,
        links: "",
      },
    },

    {
      id: 6,
      title: "NanuSam",
      description: [
        "선생님들을 위한 중고거래 서비스입니다.",
        "교육 관련 물품을 편리하게 사고팔 수 있습니다.",
      ],
      stack: ["FullStack"],
      roles: [
        "Layout과 Common UI를 구현하였습니다.",
        "Admin 기능 회원 관리, 공지, 상품 관리 CRUD를 구현하였습니다",
        "IntersectionObserver를 활용하여 메인화면 무한스크롤을 구현하였습니다.",
      ],
      skillsTags: ["JavaScript", "Jsp", "Spring", "MySQL", "Bootstrap"],
      date: "2024.11.11 ~ 2024.11.18",
      image: "/project/nanusam01.png",
      details: {
        Sortation: "팀 프로젝트",
        Achievement: "Spring을 사용한 첫 프로젝트, 대부분의 CRUD 구현 성공",
        developers: "FullStack : 한덕용, 강감찬, 공미경, 이원희, 조수진",
        github: "https://github.com/ChunjaeKerningCity/nanusam",
        url: "배포 중단",
        features: [
          "사용자는 상품을 등록하고 삭제할 수 있습니다.",
          "구매자는 판매자에게 1대1 채팅을 통해 거래를 할 수 있습니다.",
        ],
        overview:
          "교사들을 위한 중고거래 사이트입니다. 티처몰, 번개장터, 당근마켓 등을 참고하여 제작하였습니다.",
        myRole: [
          "Layout과 Common UI를 구현하였습니다.",
          "Admin 기능 회원 관리, 공지, 상품 관리 CRUD를 구현/Filter를 적용하였습니다.",
          "IntersectionObserver를 활용하여 메인화면 무한스크롤을 구현하였습니다.",
          "Github를 총괄하여 프로젝트를 진행하였습니다.",
        ],
        content: `
            <div class="video-container">
              <strong>프로젝트 시연 영상</strong>
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/o7T6dUfTBhI" 
                title="프로젝트 시연 영상" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </div>

            <article>
              <img src="/project/nanusam_ppt01.png" alt="나누샘사진" style="box-shadow:none; border-radius:0; width: 100%;" />
            </article>

            <article>
              <img src="/project/nanusam_ppt02.png" alt="나누샘사진" style="box-shadow:none; border-radius:0; width: 100%;" />
            </article>
            `,
        end: `
        <div class="pjDetails">
          <p>제 첫 풀스택 프로젝트입니다.</p>
        </div>
        `,
        links: "",
      },
    },
  ];

  return projects;
};
