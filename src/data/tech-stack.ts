import { ITechStack } from './type';

// 기술 스택 데이터
export const techStacks: ITechStack[] = [
  {
    category: '언어',
    techs: [
      {
        name: 'TypeScript',
        logoUrl: '/assets/img/tech-logo/ts.svg',
        proficiency:
          '기본적인 타입체계를 이해하고 있으며, 유틸리티 타입, 타입 단언, 타입 좁히기를 적절히 사용할 수 있습니다.',
      },
      {
        name: 'JavaScript',
        logoUrl: '/assets/img/tech-logo/js.svg',
        proficiency:
          '기본적인 동작원리와 Promise, Async&Await, 전반적인 배열 메서드를 이해하고 있습니다.',
      },
      {
        name: 'Python',
        logoUrl: '/assets/img/tech-logo/python.svg',
        proficiency: '코딩테스트에 주로 나오는 알고리즘 수준까지 구현할 수 있습니다.',
      },
    ],
  },
  {
    category: '프론트엔드',
    techs: [
      {
        name: 'HTML',
        logoUrl: '/assets/img/tech-logo/html.svg',
        proficiency:
          '시멘틱 마크업을 사용하는 것을 중요하게 생각합니다. link 요소의 rel 속성 preconnect, preload, prefetch를 활용해 최적화한 경험이 있습니다.',
      },
      {
        name: 'CSS',
        logoUrl: '/assets/img/tech-logo/css.svg',
        proficiency: '상황에 맞게 Flex, Grid display를 적절히 활용할 수 있습니다.',
      },
      {
        name: 'Tailwind CSS',
        logoUrl: '/assets/img/tech-logo/tailwindcss.svg',
        proficiency: 'breakpoints를 기준으로 반응형 디자인을 수월히 할 수 있습니다.',
      },
      {
        name: 'React',
        logoUrl: '/assets/img/tech-logo/react.svg',
        proficiency: '상태관리 훅과 메모이제이션을 위한 훅을 적절히 사용할 수 있습니다.',
      },
      {
        name: 'Next.js',
        logoUrl: '/assets/img/tech-logo/nextjs.svg',
        proficiency:
          '인터넷 강의 수강을 통해 페이지 라우터와 앱 라우터 간의 차이에 대해 이해했습니다. SSG, SSR, CSR 구현 방식과 캐싱 메커니즘에 대해 파악하고 있습니다.',
      },
      {
        name: 'Axios',
        logoUrl: '/assets/img/tech-logo/axios.svg',
        proficiency:
          'Axios를 사용해 기본적인 REST API를 구현할 수 있으며, Axios-mock-adapter, Axios-interceptor를 활용할 수 있습니다.',
      },
      {
        name: 'React Query',
        logoUrl: '/assets/img/tech-logo/react-query.svg',
        proficiency:
          'query, mutation 개념을 이해하고 있으며, 무한스크롤, 낙관적 업데이트를 서비스 구현에 활용할 수 있습니다.',
      },
      {
        name: 'React Hook Form',
        logoUrl: '/assets/img/tech-logo/react-hook-form.svg',
        proficiency:
          '폼 상태를 일괄적으로 관리하는 방법을 알고 있으며, zod와 같은 유효성 검증 라이브러리와 함께 사용할 수 있습니다.',
      },
    ],
  },
  {
    category: '백엔드 / 데이터베이스',
    techs: [
      {
        name: 'Express',
        logoUrl: '/assets/img/tech-logo/express.svg',
        proficiency: '간단한 웹 애플리케이션 서버를 구축할 수 있습니다.',
      },
      {
        name: 'MySQL',
        logoUrl: '/assets/img/tech-logo/mysql.svg',
        proficiency: '쿼리를 자유롭게 작성할 수 있으며, 인덱스 및 뷰에 대해 이해하고 있습니다.',
      },
      {
        name: 'MongoDB',
        logoUrl: '/assets/img/tech-logo/mongodb.svg',
        proficiency:
          '복합 인덱스를 활용해 쿼리 속도를 개선한 경험이 있으며, Nextjs와 mongoose를 연동하여 개발한 적이 있습니다.',
      },
    ],
  },
  {
    category: '인프라',
    techs: [
      {
        name: 'Linux',
        logoUrl: '/assets/img/tech-logo/linux.svg',
        proficiency:
          '기본적인 명령어들을 수행할 수 있으며, 파일 시스템, 사용자 관리에 대해 이해하고 있습니다.',
      },
      {
        name: 'AWS',
        logoUrl: '/assets/img/tech-logo/aws.svg',
        proficiency:
          '전반적인 서비스에 대해 이해하고 있으며, 공식 문서를 통해 여러 실습을 진행하고 프로젝트를 통해 여러 서비스들을 활용해본 경험이 있습니다.',
      },
      {
        name: 'Docker',
        logoUrl: '/assets/img/tech-logo/docker.svg',
        proficiency:
          '기본적인 Dockerfile 명령어들을 이해하고 있습니다. 3티어 아키텍쳐를 구성할 수 있으며, Docker Compose를 활용해 서버를 구축한 경험이 있습니다.',
      },
      {
        name: 'Kubernetes',
        logoUrl: '/assets/img/tech-logo/k8s.svg',
        proficiency:
          'Service, Controller, Ingress, ConfigMap, Secret yaml 파일을 통해 로컬 환경, AWS에 점진적으로 클러스터를 배포한 경험이 있습니다.',
      },
    ],
  },
  {
    category: '기타',
    techs: [
      {
        name: 'Git',
        logoUrl: '/assets/img/tech-logo/git.svg',
        proficiency:
          'Issue 생성 및 PR을 통한 협업에 대해 이해하고 있으며, 최근 시작한 프로젝트에서 git flow 전략을 도입해 원활한 협업 환경을 조성했습니다.',
      },
      {
        name: 'Notion',
        logoUrl: '/assets/img/tech-logo/notion.svg',
        proficiency:
          '협업 시 기본적인 문서 정리와 칸반보드와 간트차트를 통한 일정 관리에 주로 활용합니다.',
      },
      {
        name: 'Slack',
        logoUrl: '/assets/img/tech-logo/slack.svg',
        proficiency:
          '채널과 허들을 활용하여 협업한 적이 있으며, slack api를 활용해 CI 결과 로깅을 구현한 적이 있습니다.',
      },
      {
        name: 'Figma',
        logoUrl: '/assets/img/tech-logo/figma.svg',
        proficiency: '오토 레이아웃과 프레임을 활용해 간단히 디자인할 수 있습니다.',
      },
    ],
  },
];
