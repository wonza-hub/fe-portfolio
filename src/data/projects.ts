import type { IProject } from './type';

// 프로젝트 데이터
export const projects: IProject[] = [
  {
    id: 'project1',
    title: 'NestNet',
    link: [
      {
        url: 'https://nnet.cbnu.ac.kr',
        title: '배포주소',
      },
      {
        url: 'https://github.com/wonza-hub/ClientDev',
        title: '깃허브',
      },
    ],
    intro: '학과 동아리 생활을 편리하게 공유하고 유익한 정보를 제공하는 웹 서비스',
    background:
      '기존 홈페이지는 2005년에 제작되어 유지보수 문서가 부재해 개선이 불가했으며, 정보를 한눈에 파악하기 어려운 UI/UX의 개선 필요성을 느낌.',
    info: {
      period: '2023.07~2024.02 (유지보수 중)',
      team: 'FE 2명, BE 1명',
      role: 'FE',
      tech: 'React / TypeScript / Tailwind CSS / Axios / Tanstack Query / React Hook Form / React Router / Vite',
    },
    architectureImg: '/assets/img/project/nestnet-아키텍쳐.webp',
    roles: [
      {
        description: 'UI/UX 개선',
      },
      {
        description:
          '• 기획 단계에서 팀원들과 Notion에 분석한 요구사항을 정리하고, 전반적인 UI/UX에 대한 아이디어를 제시하고 공유',
      },
      {
        description:
          '• Tailwind css가 제공하는 반응형 디자인을 활용해 여러 화면 크기에서 일목요연하게 보이게 UI를 구현',
      },
      {
        description:
          '• 홈 화면에 즉석사진 섹션을 두어 동아리원들끼리 찍은 즉석사진을 온라인에 공유할 수 있는 기능을 제공',
      },
      {
        description:
          '• Tanstack Query의 useInfiniteQuery를 사용해 페이징 처리를 무한스크롤로 구현하여 페이지 이동 최소화',
      },
      {
        description: '• 컨텐츠 로딩 효과에 스켈레톤 애니메이션을 사용해 요청이 진행 중임을 표시',
      },
      {
        description:
          '• 좋아요 기능에 Tanstack Query로 낙관적 업데이트를 적용하여 즉각적인 피드백 제공',
        blogLink:
          'https://velog.io/@one1_programmer/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%BF%BC%EB%A6%AC-%EC%A2%8B%EC%95%84%EC%9A%94-%EA%B8%B0%EB%8A%A5%EC%97%90-%EB%82%99%EA%B4%80%EC%A0%81-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-feat.-%EB%94%94%EB%B0%94%EC%9A%B4%EC%8A%A4',
        blogTitle: 'Tanstack Query로 낙관적 업데이트 구현하기',
      },
      {
        description: '• 시멘틱 태그, 이미지 대체 텍스트, ARIA를 활용해 웹 접근성 향상',
        blogLink:
          'https://velog.io/@one1_programmer/%EC%9B%B9-%EC%A0%91%EA%B7%BC%EC%84%B1-%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0',
        blogTitle: '웹 접근성 개선하기',
      },
      {
        description: '• 에러 바운더리를 사용해 여러 에러 상황 대처하여 서비스 안정성 향상',
      },
      {
        description: 'DX 개선',
      },
      {
        description:
          '• GitHub 커밋 컨벤션을 정의하고, URL과 같은 공통 상수 관리에 대한 체계를 세워 작업 효율 개선',
      },
      {
        description:
          '• React의 props, TypeScript의 optional parameter 활용해 게시물 등록 및 수정 시 공통으로 사용할 수 있는 폼 구현 등 컴포넌트 주도 개발 수행',
      },
      {
        description:
          '• React의 Suspense와 React Query의 useSuspenseQuery를 사용해 선언적 비동기 처리를 수행하여 코드 개선',
        blogLink: 'https://velog.io/@one1_programmer/React-Suspense-feat.-useSuspenseInfiniteQuery',
        blogTitle: 'Suspense를 활용한 선언적 비동기 처리',
      },
      {
        description: '성능 개선',
      },
      {
        description:
          '• IntersectionObserver와 useRef를 활용한 지연로딩 적용으로 메인 페이지 진입 시 API 요청 횟수 개선',
      },
      {
        description: '• Tanstack Query 캐싱 기능 관련 옵션 활용해 재방문 시 컨텐츠 로딩 속도 개선',
      },
      {
        description:
          '• 좋아요 기능에 debounce를 적용해 짧은 시간 내 중복 요청을 못하게 하여 서버 비용 최적화',
      },
      {
        description:
          '• 사진 목록 컴포넌트 같이 자주 리렌더링되는 컴포넌트에 React의 memo를 적용해 렌더링 최적화 수행',
      },
      {
        description: '• 지연로딩(React의 lazy) 적용과 vite 설정을 통해 번들링 최적화 수행',
        blogLink:
          'https://velog.io/@one1_programmer/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%B2%88%EB%93%A4%EB%A7%81-%EC%B5%9C%EC%A0%81%ED%99%94%EB%A5%BC-%ED%86%B5%ED%95%9C-%EC%9B%B9-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-feat.-React-lazy-Rollup',
        blogTitle: '지연로딩 적용과 vite 설정을 통한 번들링 최적화',
      },
      {
        description:
          '• 텍스트 압축(brotli) 기법을 적용하여 메인 페이지 진입 시 약 40% (1,519 kB → 593 kB)의 전송량 감소',
        blogLink:
          'https://velog.io/@one1_programmer/%EC%9B%B9-%EC%95%95%EC%B6%95-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%98%EC%97%AC-%EC%9B%B9-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-%EC%88%98%ED%96%89%ED%95%98%EA%B8%B0-feat.-Vite-Nginx-gzip-Brotli',
        blogTitle: '텍스트 압축으로 웹 성능 최적화',
      },
    ],
    troubleshooting: [
      {
        title: '사진 게시판 게시물 등록/수정 컴포넌트 재사용',
        situation:
          '사진 게시판에서 게시물 등록 및 수정 시 동일한 <PhotoAlbumForm>을 재사용했는데, 파일을 첨부하는 부분에서 기존의 이미지 파일인지 아닌지를 타입스크립트가 판단하지 못했습니다.',
        cause:
          '프론트에서는 파일 수정여부를 플래그로써 넘겨받기로 백엔드 팀원과 합의를 했었고, 해당 플래그를 ORIGINAL_FILE_FLAG 상수로 관리하고 있었습니다. 하지만 적절한 분기 처리를 해주지 않아 타입을 추론하지 못했습니다.',
        solution:
          '처음에는 타입 단언을 사용하여 기존 파일과 새로 업로드한 파일을 분기하였지만, 타입 가드 개념을 알고난 후 해당 개념을 적용하여 조금 더 안전한 개발이 가능해졌습니다. 이를 통해, 타입 가드로 타입 단언의 문제를 해결하는 방법을 익힐 수 있었습니다.',
        images: [
          {
            url: '/assets/img/project/nestnet-트러블슈팅-1.webp',
            title: '타입 단언 적용',
          },
          {
            url: '/assets/img/project/nestnet-트러블슈팅-2.webp',
            title: '타입 가드 적용',
          },
        ],
      },
      // {
      //   title: '이미지 최적화',
      //   situation:
      //     '무한스크롤이 적용된 사진 게시판 목록 로딩 시, layout shift가 빈번하게 일어났습니다.',
      //   cause:
      //     '썸네일이 보여지는 공간에 비해 렌더되는 원본 이미지의 너비와 폭이 너무 컸습니다. 이미지 리사이징을 통해 다양한 여러 사이즈의 이미지를 불러오는 api를 만들려 했지만, 백엔드 팀원의 사정상 리팩토링이 힘들었습니다.',
      //   solution:
      //     '이미지 리사이즈를 수행하되, 썸네일과 상세 페이지에서 보여지는 이미지 크기들을 고려하여 고정너비 600px이라는 타협 지점을 정했습니다. 이를 통해 상세 페이지의 이미지 화질은 조금 낮아졌지만, 목록 페이지의 이미지 로딩 성능은 향상되었습니다.',
      //   images: [
      //     {
      //       url: '/assets/img/project/',
      //       title: '메인',
      //     },
      //   ],
      // },
    ],
    // 미리보기 이미지 추가
    previewImages: [
      {
        url: '/assets/img/project/nestnet-메인.gif',
        title: '메인',
      },
      {
        url: '/assets/img/project/nestnet-사진게시판-목록.gif',
        title: '사진게시판-목록',
      },
      {
        url: '/assets/img/project/nestnet-사진게시판-상세.gif',
        title: '사진게시판-상세',
      },
      {
        url: '/assets/img/project/nestnet-사진게시판-댓글.gif',
        title: '사진게시판-댓글',
      },
      {
        url: '/assets/img/project/nestnet-사진게시판-등록.gif',
        title: '사진게시판-등록',
      },
      {
        url: '/assets/img/project/nestnet-회원가입요청.gif',
        title: '회원가입요청',
      },
      {
        url: '/assets/img/project/nestnet-회원정보수정.gif',
        title: '회원정보수정',
      },
      {
        url: '/assets/img/project/nestnet-메인-반응형.gif',
        title: '메인-반응형',
      },
    ],
    previewVideos: [],
  },
  {
    id: 'project2',
    title: 'wangnOOni',
    link: [
      {
        url: 'https://github.com/wonza-hub/wangnOOni-client',
        title: '깃허브',
      },
    ],
    intro: '실시간 운전자 행동 감지 시스템',
    background:
      '운전자의 모습을 관찰하고 피드백하여 올바른 운전 문화를 조성하며, 가까운 운전자들 간에 위험한 운전 행위를 공유하여 사고를 사전에 방지할 수 있도록 함.',
    info: {
      period: '2024.04 ~ 2024.11',
      team: 'FE 1명, BE 1명, AI 1명',
      role: 'FE',
      tech: 'React / TypeScript / Styled Components / Axios / Tanstack Query / Zustand / React Hook Form / Chart.js / Vite',
    },
    architectureImg: '/assets/img/project/wangnooni-아키텍쳐.webp',
    roles: [
      {
        description:
          '• Axios-mock-adapter를 활용한 테스트 목업을 작성해 백엔드 API 완성 이전에 테스트 환경 조성',
      },
      {
        description: '• Axios-interceptor를 활용한 공통 로직 처리 부분과 뷰를 분리',
      },
      {
        description:
          '• html canvas와 중첩 setTimeout을 활용해 운전자 모습을 서버에 폴링 방식으로 전송하여 근실시간 서비스 구현',
      },
      {
        description:
          '• geolocation API 활용해 사용자의 위치 정보를 수집하여 사용자 간 근접 정도 파악',
      },
      {
        description:
          '• 전역 상태 관리를 사용해 응답값으로 받은 운전자 행위에 대한 피드백 결과를 관리',
      },
      {
        description: '• Chart.js로 다양한 주제의 차트를 시각화하여 사용자별 통계 페이지 제공',
      },
      {
        description:
          '• Funnel을 활용한 Multi Step Form으로 회원가입 단계를 세부적으로 분리하여 모바일 친화성 강화',
      },
      {
        description:
          '• 가입 절차 도중 여러 예외 상황(새로고침, 이탈 후 직접 URL 접근)을 고려하여 다양한 사용자 시나리오 대처',
        blogLink:
          'https://velog.io/@one1_programmer/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-Multi-Step-Form-%EA%B5%AC%ED%98%84-feat.-useFunnel',
        blogTitle: 'Multi-Step Form 구현하기',
      },
      {
        description:
          '• React Hook Form의 유효성 검증을 활용해 실시간으로 비밀번호 일치 여부를 판단할 수 있게 하여 UX 개선',
        blogLink:
          'https://velog.io/@one1_programmer/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-React-Hook-Form%EC%9D%98-useWatch%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8-%ED%99%95%EC%9D%B8-%EA%B5%AC%ED%98%84',
        blogTitle: 'React-Hook-Form으로 실시간 비밀번호 일치 로직 구현하기',
      },
    ],
    troubleshooting: [
      {
        title: '운전자 모습을 이미지로 변환하는 방식에 대한 고민',
        situation: `초기에는 서비스를 앱으로 구현하기 위해 React Native를 활용했고, 1) 휴대전화 카메라로 사진을 찍는 방식 2) 화면 캡처 방식 3) 촬영 화면을 그리는 방식을 시도했습니다.`,
        cause: `1)의 경우, iOS에서는 카메라 셔터음을 무음으로 설정할 수 없는 제약이 있어, UX를 해치지 않고 기능을 구현하는 데 한계가 있었습니다. 
        2)와 3) 경우, 특정 영역만 캡처를 못하거나 촬영 영역은 그리지 못하는 문제가 있었습니다.`,
        solution: `오픈채팅방의 선배 개발자분들께 질문을 하여 하드웨어 성능 관련 문제일 수도 있다는 답변을 들었습니다. 하지만 저의 지식 수준과 남은 기간을 고려하여 개발 환경을 웹으로 변경하여 html canvas를 사용하기로 했습니다.
        사용자를 녹화하고 있는 영역(video html 요소 영역)을 canvas에 그려준 후, 해당 부분을 canvas의 toDataURL 메서드를 활용하여 이미지로 변환하였습니다.`,
        images: [
          {
            title: 'video 요소를 바탕으로 canvas로 이미지를 그린 후 반환하는 함수',
            url: '/assets/img/project/wangnooni-트러블슈팅-1.webp',
          },
        ],
      },
    ],
    // 미리보기 이미지 추가
    previewImages: [
      {
        url: '/assets/img/project/wangnooni-구현화면-2.webp',
        title: '구현화면-녹화/통계/마이',
      },
      {
        url: '/assets/img/project/wangnooni-졸음.gif',
        title: '졸음 감지 및 알림',
      },
      {
        url: '/assets/img/project/wangnooni-흡연.gif',
        title: '흡연 감지 및 알림',
      },
      {
        url: '/assets/img/project/wangnooni-휴대폰.gif',
        title: '휴대폰 감지 및 알림',
      },
      // {
      //   url: '/assets/img/project/wangnooni-주변운전자-감지.gif',
      //   title: '주변운전자 감지 및 알림',
      // },
    ],
    previewVideos: [],
  },
    {
    id: 'project3',
    title: 'Bank!t',
    link: [
      {
        url: 'https://github.com/wonza-hub/internet-banking-client',
        title: '깃허브 (FE)',
      },
      {
        url: 'https://github.com/LikeLion-Team2/internet-banking-server',
        title: '깃허브 (BE)',
      },
    ],
    intro: '하이브리드 클라우드에서 동작하는 인터넷 뱅킹 웹 애플리케이션',
    background: '안정적인 금융 서비스를 제공하여, 서비스 안정성 및 사용자 경험을 향상시키기 위함.',
    info: {
      period: '2024.06 ~ 2024.11',
      team: 'FE 1명, BE 1명, DevOps 2명',
      role: 'FE, CI/CD',
      tech: 'React / JavaScript / Styled-components / Axios / React Hook Form / Vite / Jenkins / Harbor / ArgoCD / Helm / GitHub',
    },
    architectureImg: '/assets/img/project/bankit-아키텍쳐.webp',
    roles: [
      {
        description: '• 전체 UI를 설계하고, React를 사용하여 전체 화면 구성',
      },
      {
        description:
          '• GitOps 기반의 CI/CD 파이프라인으로 배포 자동화 구현하여 Git 단일 진실 공급원(Single Source Of Truth, SSOT) 실현',
      },
      {
        description:
          '• 팀원이 담당한 백엔드 Dockerfile에 경량 베이스 이미지, 멀티 스테이지 빌드 사용 제안 및 최적화 수행(1.15GB -> 202MB)',
      },
      {
        description: '',
      },
    ],
    troubleshooting: [
      {
        title: 'GitOps CI/CD 파이프라인 구축',
        situation: 'CI/CD 개념이 생소하여 초기 구상의 어려움이 있었습니다.',
        cause:
          'Jenkins, Harbor 등에 대해 각각의 실습만 진행한 상태이고, 전체적인 결합은 해보지 않은 상태였습니다.',
        solution:
          '강사님, 오픈채팅방의 선배 엔지니어분들에게 질문하고 파이프라인 구상의 토대를 마련했습니다. 특히, 개발 프로세스의 Git 로그를 바탕으로 변경을 추적하는 방법을 터득했습니다.',
        images: [
          {
            url: '/assets/img/project/bankit-트러블슈팅-1.webp',
            title: '전체 파이프라인 구조',
          },
        ],
      },
      {
        title: 'Docker 이미지 최적화',
        situation: 'Kubernetes 환경에서 무거운 패키지 설치 시, 워커노드가 비정상 종료되었습니다.',
        cause:
          'free 명령어로 메모리 사용량 확인 결과, 백엔드 이미지가 올라간 pod가 많은 용량을 차지하고 있었습니다.',
        solution:
          '경량 베이스 이미지(alpine)와 멀티 스테이지 빌드를 사용하여 이미지 최적화 수행했습니다 (1.15GB -> 202MB)',
        images: [
          {
            url: '/assets/img/project/bankit-트러블슈팅-2.webp',
            title: 'Dockerfile 내용',
          },
        ],
      },
      {
        title: 'Docker 소켓 파일 권한 수정',
        situation: 'Jenkins 빌드 과정 중 docker daemon에 접근하지 못해 빌드가 실패했습니다.',
        cause:
          'Jenkins 컨테이너가 재시작될 때마다 내부의 유저와 그룹 설정을 초기화했습니다.',
        solution:
          'Docker 소켓 파일에 대한 권한을 수정하여 Jenkins 컨테이너가 docker daemon에 접근할 수 있도록 했습니다.',
        images: [
          {
            url: '/assets/img/project/bankit-트러블슈팅-3.webp',
            title: '수행 명령어',
          },
        ],
      },
      {
        title: 'Nginx에서 환경변수 사용',
        situation: 'Kubernetes 클러스터 내에서 프론트엔드로부터 백엔드 Service로 요청을 보낼 때, Nginx의 환경변수(백엔드 서비스명인 BACKEND_SERVICE)를 치환하지 못했습니다.',
        cause:
          'Nginx는 기본적으로 환경 변수를 직접 참조하거나 설정 파일 내에서 동적으로 대체하는 기능이 없었습니다.',
        solution:
          `먼저 envsubst 도구로 템플릿 파일 내의 환경 변수를 활성화하는 스크립트를 작성하고, Dockerfile에서 이를 참조하게 했습니다. 
          이후 Kubernetes는 pod 생성 시, ConfigMap을 참조하여 Nginx의 파일 내 환경 변수에 값을 주입할 수 있었습니다.`,
        images: [
          {
            url: '/assets/img/project/bankit-트러블슈팅-4.webp',
            title: 'Nginx 설정 파일 내용',
          },
          {
            url: '/assets/img/project/bankit-트러블슈팅-5.webp',
            title: '스크립트 내용',
          },
          {
            url: '/assets/img/project/bankit-트러블슈팅-6.webp',
            title: 'ConfigMap 내용',
          },
        ],
      },
    ],
    // 미리보기 이미지 추가
    previewImages: [
      {
        url: '/assets/img/project/bankit-구현화면-1.webp',
        title: '구현화면-로그인/회원가입/계좌개설/통장조회',
      },
      {
        url: '/assets/img/project/bankit-구현화면-2.webp',
        title: '구현화면-송금/거래내역조회/송금상세/이체상세',
      },
    ],
    previewVideos: [],
  },
  {
    id: 'project4',
    title: 'Vuisiness',
    link: [
      {
        url: 'https://github.com/wonza-hub/vuisiness',
        title: '깃허브',
      },
    ],
    intro:
      '상권, 유동 인구, 카드 사용량 빅데이터를 기반으로 내 주변 상권과 관련한 통계 데이터를 보여주는 서비스',
    background:
      '평소 주변에서 어느 위치에서 어떤 사업이 잘 되는지 관심을 가지며, 사업의 흥망은 지리적 위치, 유동 인구 등 여러 요인들이 결정한다고 생각했음. 따라서 이와 관련한 데이터를 보여주어 사업의 성공 가능성을 가늠할 수 있게 돕고자 함.',
    info: {
      period: '2024.04 ~ 2024.06',
      team: 'FE 1명, DB 1명',
      role: 'FE(PM)',
      tech: 'Next.js / JavaScript / Tailwind CSS / Chart.js  / Recoil / MongoDB',
    },
    architectureImg: '/assets/img/project/vuisiness-아키텍쳐.webp',
    roles: [
      {
        description: '• 기획 단계에서 주요 아이디어 제안 및 240만 개 이상의 상권 빅데이터 확보',
      },
      {
        description:
          '• 상권 데이터 가공(MongoDB의 GeoJSON 객체 활용)을 통해 위치 기반 쿼리를 할 수 있게 하여, 아이디어 실현의 기반 구성',
      },
      {
        description:
          '• 쿼리에 대한 아이디어를 Slack 채널을 통해 공유하고 허들(화상 회의)을 통해 회의를 진행하는 팀 문화를 주도적으로 조성',
      },
      {
        description:
          '• 카카오의 지도 API를 통해 상점들을 마커로 표시하고, 카카오의 로컬 API 활용해 쿼리에 필요한 행정동 정보를 호출',
      },
      {
        description: '• Chart.js를 사용해 재사용 가능한 그래프 컴포넌트 구현하여 DX 개선',
      },
      {
        description:
          '• Recoil를 활용해 현재 위치, 행정동, 근처 상권 등의 상태 정보를 전역으로 관리해 Props Drilling 방지',
      },
      {
        description: '• React의 memo와 전역 상태 관리를 활용해 렌더링 최적화 수행',
      },
      {
        description: '• 복합 인덱스 적용하여 쿼리 성능 최적화',
      },
    ],
    troubleshooting: [
      {
        title: '특정 반경 내 상권 데이터 수집',
        situation: '사용자 좌표 기준 특정 반경 내의 상권 데이터를 필터링하기 여려웠습니다.',
        cause: '데이터의 구조가 MongoDB가 지리공간 쿼리를 수행하기에 적합하지 않은 구조였습니다.',
        solution:
          'MongoDB가 제공하는 위치 기반 인덱스인 $nearSphere를 활용하기 위해, 기존 위치 필드를 GeoJSON 형태로 변경하는 전처리 과정을 수행했습니다.',
        images: [
          {
            url: '/assets/img/project/vuisiness-트러블슈팅-1.webp',
            title: '기존 위치 필드를 GeoJSON 형태로 변경(전처리)',
          },
          {
            url: '/assets/img/project/vuisiness-트러블슈팅-2.webp',
            title: '인덱스 생성 후, 쿼리 수행',
          },
        ],
      },
      {
        title: '차트 리렌더링 대응',
        situation:
          '사용자가 지도에 좌표를 찍을 때, 차트가 반복적으로 렌더링되는 문제가 발생했습니다.',
        cause:
          '기존에는 useState로 상태를 관리했기 때문에, 위치가 변경될 때마다 Props Drilling이 발생했습니다.',
        solution: `전역 상태 관리가 필요하다고 판단했고, 행정동 상태로부터 파생된 상태(행정동의 코드, 이름, 시군구 이름)를 추출해야 했습니다. 
        atom과 atom으로부터 상태를 파생할 수 있는 Recoil이 적합하다고 생각했고, React의 memo와 결합하여 적용했습니다.`,
        images: [
          {
            url: '/assets/img/project/vuisiness-트러블슈팅-3.webp',
            title: 'Recoil의 selector 선언',
          },
          {
            url: '/assets/img/project/vuisiness-트러블슈팅-4.webp',
            title: '차트에 적용한 코드',
          },
        ],
      },
    ],
    // 미리보기 이미지 추가
    previewImages: [],
    previewVideos: [
      {
        url: 'https://www.youtube.com/embed/6wWa0688CdI',
        title: '데모 영상',
      },
    ],
  },
  {
    id: 'project5',
    title: 'AWS 동적 자원 관리 프로그램',
    link: [
      {
        url: 'https://github.com/wonza-hub/aws-dynamic-resource-management-program',
        title: '깃허브',
      },
    ],
    intro: 'SDK를 활용하여 AWS 상의 서버 관리를 수행할 수 있는 웹 애플리케이션',
    background:
      '실습 과정 중 가상머신 상에 진행했던 클러스터 구축은 상당한 수작업을 요구했음. 이에 인스턴스를 AWS에 배포하고 SDK를 사용하여 GUI로 클러스터를 관리하고자 함.',
    info: {
      period: '2024.11 ~ 2024.12',
      team: '개인',
      role: 'FE, BE',
      tech: 'JavaScript / Express / ejs / AWS SDK / EC2 / CloudWatch / SNS',
    },
    architectureImg: '/assets/img/project/cloud-아키텍쳐.webp',
    roles: [
      {
        description: '• 포스트맨에 RESTful API에 맞추어 자원관리에 필요한 API 정리',
      },
      {
        description: '• Express로 웹 애플리케이션 서버 및 CRUD 구현',
      },
      {
        description:
          '• AWS SDK로 EC2 ASG, CloudWatch, SNS와 연동하여 리소스 임계치 도달 시 서버 확장 및 관리자 메일 알림 구현',
      },
      {
        description: '• ejs로 UI 구성',
      },
    ],
    troubleshooting: [],
    // 미리보기 이미지 추가
    previewImages: [],
    previewVideos: [],
  },
  // {
  //   id: 'project3',
  //   title: 'MoaBoa',
  //   link: [
  //     {
  //       url: 'https://github.com/wonza-hub/client-dev',
  //       title: '깃허브',
  //     },
  //   ],
  //   intro: '교내 학과, 사업단 홈페이지 등에 흩어진 공지사항을 통합하여 보여주는 서비스',
  //   background:
  //     '평소 학과나 사업단과 같은 교내 홈페이지에 올라오는 공지를 못하는 문제가 있었음. 여러 공지사항을 한 곳에서 통합하여 보여주면 좋겠다고 생각함.',
  //   info: {
  //     period: '2024.05 ~ 2024.06 (유지보수 중)',
  //     team: 'FE 1명, BE 3명',
  //     role: 'FE(PM), 크롤링',
  //     tech: 'React / TypeScript / Styled-components / Axios / React Router / Vite / Python / Playwright',
  //   },
  //   architectureImg: '',
  //   roles: [
  //     {
  //       description: 'Figma에 간단한 UI 시안 작성하고, React를 사용하여 전반적인 UI 구성',
  //     },
  //     {
  //       description: 'Python과 Playwright를 활용하여 공지사항 크롤링 코드 작성',
  //     },
  //     {
  //       description:
  //         'AWS Lambda와 EventBridge를 활용하여 주기적인 크롤링하도록 리팩토링하여 자동화 실현',
  //     },
  //     {
  //       description: '',
  //     },
  //   ],
  //   troubleshooting: [],
  //   // 미리보기 이미지 추가
  //   previewImages: [],
  //   previewVideos: [
  //     {
  //       url: 'https://www.youtube.com/embed/6wWa0688CdI',
  //       title: '데모 영상',
  //     },
  //   ],
  // },
];
