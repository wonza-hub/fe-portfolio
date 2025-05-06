import { IProject } from './type';

// 프로젝트 데이터
export const projects: IProject[] = [
  {
    id: 'project1',
    title: '프로젝트 1',
    intro: '사용자 경험을 개선하는 웹 애플리케이션',
    background: '기존 서비스의 사용성 문제를 해결하기 위해 시작된 프로젝트입니다.',
    info: {
      period: '2023.01 - 2023.06',
      team: '4인 팀',
      role: '프론트엔드 개발',
      tech: 'React, TypeScript, Tailwind CSS',
    },
    roles: ['사용자 인터페이스 설계 및 구현', '반응형 웹 디자인 적용', '상태 관리 시스템 구축'],
    troubleshooting: [
      {
        title: '성능 최적화',
        description: '렌더링 성능 이슈를 React.memo와 useMemo를 활용하여 해결했습니다.',
      },
      {
        title: '상태 관리 복잡성',
        description: 'Context API와 커스텀 훅을 조합하여 상태 관리 복잡성을 줄였습니다.',
      },
    ],
  },
  {
    id: 'project2',
    title: '프로젝트 2',
    intro: '데이터 시각화 대시보드',
    background: '복잡한 데이터를 직관적으로 이해할 수 있도록 하는 대시보드입니다.',
    info: {
      period: '2022.07 - 2022.12',
      team: '3인 팀',
      role: '프론트엔드 개발, UI/UX 디자인',
      tech: 'Next.js, D3.js, Styled Components',
    },
    roles: [
      '데이터 시각화 컴포넌트 개발',
      '실시간 데이터 업데이트 기능 구현',
      '사용자 인터페이스 디자인',
    ],
    troubleshooting: [
      {
        title: '대용량 데이터 처리',
        description: '가상화 기법을 적용하여 대용량 데이터 렌더링 성능을 개선했습니다.',
      },
      {
        title: '브라우저 호환성',
        description:
          '다양한 브라우저에서 일관된 경험을 제공하기 위한 폴리필 적용 및 테스트를 진행했습니다.',
      },
    ],
  },
  {
    id: 'project3',
    title: '프로젝트 3',
    intro: '모바일 최적화 웹 서비스',
    background: '모바일 사용자를 위한 최적화된 웹 서비스입니다.',
    info: {
      period: '2022.01 - 2022.06',
      team: '2인 팀',
      role: '프론트엔드 개발',
      tech: 'Vue.js, Vuex, SCSS',
    },
    roles: ['모바일 최적화 UI 구현', '오프라인 지원 기능 개발', '성능 최적화'],
    troubleshooting: [
      {
        title: '네트워크 지연 대응',
        description: '로딩 상태 관리와 스켈레톤 UI를 적용하여 사용자 경험을 개선했습니다.',
      },
      {
        title: '터치 인터랙션',
        description:
          '모바일 터치 인터랙션을 개선하기 위한 사용자 정의 제스처 시스템을 구현했습니다.',
      },
    ],
  },
];
