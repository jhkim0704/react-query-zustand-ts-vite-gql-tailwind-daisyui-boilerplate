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

### 프로젝트 구조

├── public # 퍼블릭 자산
├── src # 소스 파일
│ ├── components # 리액트 컴포넌트
│ ├── hooks # 커스텀 훅
│ ├── pages # 페이지 컴포넌트
│ ├── store # Zustand 스토어
│ ├── styles # CSS 및 스타일
│ ├── utils # 유틸리티 함수
│ ├── App.tsx # 메인 앱 컴포넌트
│ └── index.tsx # 엔트리 포인트
├── .eslintrc.js # ESLint 설정
├── .prettierrc # Prettier 설정
├── tailwind.config.js # Tailwind CSS 설정
├── tsconfig.json # TypeScript 설정
├── vite.config.ts # Vite 설정
└── package.json # 프로젝트 의존성 및 스크립트
