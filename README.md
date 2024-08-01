# React Query Zustand TS Vite GQL Tailwind DaisyUI MSW Boilerplate

타입스크립트를 사용한 리액트 프로젝트의 보일러플레이트로, React Query, Zustand, Vite, GraphQL, Tailwind CSS, DaisyUI, Mock Service Worker(MSW)를 포함하고 있습니다.

## 주요 기능

- **React 18** 및 **TypeScript**를 사용한 안전하고 견고한 개발 환경.
- **React Query**를 이용한 서버 상태 관리.
- **Zustand**를 통한 전역 상태 관리.
- **Vite**를 사용한 빠른 번들링과 개발 서버.
- **Apollo Client**와 함께 사용하는 **GraphQL** 데이터 페칭.
- **Tailwind CSS**와 **DaisyUI**를 이용한 스타일링.
- **MSW**를 사용한 네트워크 요청 모킹.
- **ESLint**와 **Prettier**를 통한 코드 린팅 및 포매팅.
- **Jest**를 이용한 테스트.

## 시작하기

### 필수 조건

- Node.js (>= 14)
- npm (>= 7)

### 설치

1. 리포지토리 클론:

   ```bash
   git clone https://github.com/yourusername/react-query-zustand-ts-vite-gql-tailwind-daisyui-msw-boilerplate.git
   ```

2. 의존성 설치:

   ```bash
   yarn add or npm install
   ```

3. 개발 서버 실행:

   ```bash
   npm start
   ```

## 프로젝트 구조

```plaintext
├── src                   # 소스 파일 디렉토리
│   ├── components        # 리액트 컴포넌트
│   ├── hooks             # 커스텀 훅
│   ├── lib               # 라이브러리
│   ├── mocks             # 모킹 데이터
│   ├── pages             # 페이지 컴포넌트
│   ├── routes            # 라우트 설정
│   ├── services          # 서비스 계층(API)
│   ├── store             # Zustand 스토어
│   ├── types             # 타입 정의 파일
│   ├── App.css           # 애플리케이션 스타일
│   ├── index.css         # 전역 스타일
│   ├── logo.svg          # 로고 이미지
│   ├── main.tsx          # 엔트리 포인트
│   ├── styles.css        # 스타일 파일
│   └── vite-env.d.ts     # Vite 환경 타입 정의
├── .env.local            # 로컬 환경 변수 설정
├── .gitignore            # Git에서 무시할 파일 목록
├── CHANGELOG.md          # 변경 사항 기록
├── index.html            # 메인 HTML 파일
├── jest.config.ts        # Jest 설정 파일
├── LICENSE               # 라이센스 정보
├── .eslintrc.js          # ESLint 설정
├── .prettierrc           # Prettier 설정
├── tailwind.config.js    # Tailwind CSS 설정
├── tsconfig.json         # TypeScript 설정
├── vite.config.mts        # Vite 설정
├── package-lock.json     # 패키지 잠금 파일
└── package.json          # 프로젝트 의존성 및 스크립트
```
