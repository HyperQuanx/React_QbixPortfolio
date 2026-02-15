# Repository Guidelines

## 프로젝트 구조 및 모듈 구성
이 저장소는 두 개의 애플리케이션으로 구성됩니다.
- `client_react/my-project`: Vite + React 프런트엔드 (`src/components`, `src/assets/css`, 정적 파일은 `public/`)
- `server_springBoot/portfolio`: Spring Boot 백엔드 (`controller`, `service`, `repository`, `domain`, `dto`), 설정은 `src/main/resources`

CI/CD는 `.github/workflows/deploy.yml`에 있으며, `main` 브랜치 푸시 시 백엔드를 배포합니다.

## 빌드, 테스트, 개발 명령어
각 앱 디렉터리에서 명령어를 실행하세요.

프런트엔드 (`client_react/my-project`):
- `yarn dev`: Vite 개발 서버 실행
- `yarn build`: 프로덕션 번들 생성 (`dist/`)
- `yarn lint`: `.js/.jsx` 대상 ESLint 실행
- `yarn preview`: 빌드 결과 로컬 미리보기

백엔드 (`server_springBoot/portfolio`):
- `./gradlew bootRun`: 로컬 API 실행 (포트 `8080`)
- `./gradlew build`: 컴파일, 테스트, 패키징
- `./gradlew test`: JUnit 테스트 실행

## 코딩 스타일 및 네이밍 규칙
프런트엔드는 `eslint.config.js` 기준을 따릅니다.
- 2칸 들여쓰기, 세미콜론 사용, ES 모듈
- React 컴포넌트 파일은 PascalCase (예: `Section01_Info.jsx`)
- 스타일 파일은 `*.style.js` 또는 `*.styles.js`

백엔드 규칙:
- Java 17, Spring Boot 3
- 4칸 들여쓰기
- 클래스명은 PascalCase, 패키지는 `com.portfolio.portfolio` 하위 소문자
- controller/service/repository 역할을 분리 유지

## 테스트 가이드
백엔드는 JUnit 5(`spring-boot-starter-test`)를 사용합니다.
- 테스트 위치: `server_springBoot/portfolio/src/test/java`
- 테스트 클래스명: `*Tests`, 메서드명은 동작 중심 (예: `createFeedbackReturns200`)
- PR 전 `./gradlew test` 실행

프런트엔드 테스트 프레임워크는 아직 구성되지 않았습니다. 최소한 `yarn lint`와 `yarn build`를 실행해 회귀를 확인하세요.

## 커밋 및 PR 가이드
최근 커밋은 `[Fix]`, `[Test]` 같은 접두 태그를 사용합니다.
- 권장 형식: `[Fix] 짧은 명령형 요약` (예: `[Fix] 모바일에서 사이드바 숨김`)
- 가능하면 변경 범위를 한 영역(프런트/백엔드)으로 제한

PR에는 다음을 포함하세요.
- 변경 내용과 목적
- 영향 경로 (예: `client_react/my-project/src/components/...`)
- 검증 절차와 실행 명령어
- UI 변경 시 스크린샷/GIF
- 관련 이슈 또는 참고 링크

## 보안 및 설정 팁
백엔드는 환경 변수(`DB_URL`, `DB_USERNAME`, `DB_PASSWORD`, `MAIL_USERNAME`, `MAIL_PASSWORD`, `WEATHER_API_KEY`)를 사용합니다. 시크릿과 `.env` 파일은 커밋하지 마세요.
