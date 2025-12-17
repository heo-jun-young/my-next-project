## 목적

이 파일은 AI 코딩 에이전트(예: Copilot, 내부 봇)가 이 리포지토리에서 빠르게 생산적으로 작업할 수 있도록
핵심 구조, 실행 방법, 코드 스타일 및 주의사항을 요약합니다.

## 빠른 실행

- 개발 서버: `npm run dev` (package.json의 `dev`는 `next dev`)
- 빌드: `npm run build` → `npm run start`로 프로덕션 실행

프로젝트는 Next.js 14의 App Router(앱 디렉터리, `src/app`)와 TypeScript를 사용합니다.

## 큰 그림(아키텍처 요약)

- 라우팅/페이지: `src/app` 아래가 App Router의 루트입니다. 예: `src/app/services/*/page.tsx`는 각각의 서비스 페이지(서브라우트)를 구현합니다.
- 전역 레이아웃: `src/app/layout.tsx` — 상단 네비게이션(서비스 드롭다운)을 포함. 레이아웃에서 주요 링크(예: `/services/sns`)를 정의하므로 라우트가 이 구조와 일치하는지 확인하세요.
- 컴포넌트 유형: Next.js App Router의 기본은 서버 컴포넌트입니다. 클라이언트 사이드 훅/이펙트가 필요하면 파일 상단에 `"use client"`를 명시합니다. (예: `src/app/services/sns/page.tsx`는 `"use client"` 사용 및 useEffect 포함)

## 코드·디렉션·패턴 (이 프로젝트에서 관찰된 규칙)

- 스타일: 전역 CSS는 `src/app/globals.css`에 있고, 일부 페이지는 `styled-jsx` 스타일 블록을 사용합니다 (예: `services/sns/page.tsx`). Tailwind 관련 패키지가 devDependencies에 있으나, 코드에서 전역/로컬 CSS 병행 사용이 보입니다. 변경 시 두 방식을 혼용하지 않도록 주의하세요.
- 클라이언트 이벤트/애니메이션: 많은 페이지가 DOM API와 `useEffect`에 의존합니다. 이런 코드 변경 시 서버/클라이언트 경계를 항상 의식하세요. 클라이언트 전용 코드에 `"use client"`가 있어야 합니다.
- 경로 별칭: tsconfig.json에 `@/*` → `./src/*`로 정의되어 있습니다. import 경로 작성 시 이 규칙을 활용하세요.
- 이미지 설정: `next.config.js`에 `images.domains = ['example.com']`이 설정되어 있습니다. 외부 이미지 도메인을 추가하려면 이 파일을 업데이트해야 합니다.

## 프로젝트 특이사항 / 주의

- README.md에 병합 마커(예: `<<<<<<< HEAD`)가 남아 있습니다 — 수정 전 의도가 확실하지 않으면 직접 제거하지 마세요. (즉, 리포지토리 상태에 주의)
- Next.js App Router 특성상 새로운 페이지/레이아웃을 추가할 때 `page.tsx`, `layout.tsx` 관례를 따르십시오.
- `use client`가 없는 컴포넌트에서 브라우저 전용 API(window/document 등)를 사용하면 런타임 에러가 발생합니다.

## 예시 참조

- 전역 레이아웃: `src/app/layout.tsx` — 네비게이션 링크와 드롭다운 예시
- 서비스 페이지(클라이언트 코드 + 스타일): `src/app/services/sns/page.tsx` — `"use client"`, `useEffect`, DOM animation, `styled-jsx` 사용 예
- 루트 페이지: `src/app/page.tsx` — 클라이언트 이벤트(클릭 리플 효과)와 인터섹션 옵저버 예

## 작업 권장 규칙 (AI 에이전트를 위한 구체적 지침)

1. 변경 범위를 작게 유지하세요. UI 변경은 해당 서비스 페이지(`src/app/services/...`)와 `src/app/globals.css` 또는 해당 파일의 styled-jsx만 수정하는 식으로 최소화합니다.
2. 서버/클라이언트 경계를 위반하지 마세요 — 브라우저 API를 사용하면 반드시 `"use client"` 표시가 있어야 합니다.
3. 새로운 공유 컴포넌트는 `src/components` 같은 공통 폴더가 없으므로, 변경 전 팀 컨벤션(폴더 생성 여부)을 확인하세요. (현재 코드베이스는 서비스별 페이지 중심)
4. 빌드 및 실행 명령은 `npm run dev` / `npm run build` / `npm run start`입니다. 변경 후 로컬에서 `npm run build`로 확인하세요.

## 질문/피드백
작성이 누락된 부분이나 추가로 문서화했으면 하는 규칙(예: 폴더 구조 표준, 테스트 프레임워크, 린트 규칙 등)이 있으면 알려주세요. 해당 내용을 반영해 문서를 업데이트하겠습니다.
