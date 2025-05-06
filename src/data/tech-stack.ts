import { ITechStack } from './type';

// 기술 스택 데이터
export const techStacks: ITechStack[] = [
  {
    category: '프론트엔드',
    techs: [
      {
        name: 'React',
        logoUrl: '/assets/svg/react.svg',
        proficiency:
          '컴포넌트 설계 및 최적화, 상태 관리에 능숙합니다.컴포넌트 설계 및 최적화, 상태 관리에 능숙합니다.',
      },
      {
        name: 'Next.js',
        logoUrl: '/assets/svg/react.svg',
        proficiency: 'SSR, SSG, ISR 등 다양한 렌더링 전략을 활용할 수 있습니다.',
      },
      {
        name: 'TypeScript',
        logoUrl: '/assets/svg/react.svg',
        proficiency: '타입 안전성을 확보하여 견고한 코드를 작성합니다.',
      },
      {
        name: 'Tailwind CSS',
        logoUrl: '/assets/svg/react.svg',
        proficiency: '효율적인 UI 개발과 일관된 디자인 시스템을 구축합니다.',
      },
    ],
  },
  {
    category: '백엔드',
    techs: [
      {
        name: 'Node.js',
        logoUrl: '/assets/svg/react.svg',
        proficiency: 'RESTful API 설계 및 구현이 가능합니다.',
      },
      {
        name: 'Express',
        logoUrl: '/assets/svg/react.svg',
        proficiency: '미들웨어를 활용한 서버 애플리케이션을 개발할 수 있습니다.',
      },
    ],
  },
  {
    category: '기타',
    techs: [
      {
        name: 'Git',
        logoUrl: '/assets/svg/react.svg',
        proficiency: '브랜치 전략을 활용한 협업 경험이 있습니다.',
      },
      {
        name: 'AWS',
        logoUrl: '/assets/svg/react.svg',
        proficiency: 'S3, Route53을 활용한 정적 웹사이트 배포 경험이 있습니다.',
      },
    ],
  },
];
