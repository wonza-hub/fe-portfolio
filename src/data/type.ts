/** 트러블슈팅 항목 */
export interface ITrouble {
  /** 이슈 제목 */
  title: string;
  /** 이슈 상세 설명 */
  situation: string;
  cause: string;
  solution: string;
  images?: Array<{
    url: string;
    title: string;
  }>;
}

/** 기본 정보 섹션 */
export interface IProjectInfo {
  /** 수행 기간 (예: "2023.01 - 2023.06") */
  period: string;
  /** 팀 규모/인원 */
  team: string;
  /** 본인의 역할 */
  role: string;
  /** 사용한 기술 스택 */
  tech: string;
}

/** 프로젝트 역할 항목 */
export interface IProjectRole {
  /** 역할 설명 */
  description: string;
  /** 블로그 링크 (선택적) */
  blogLink?: string;
  /** 블로그 링크 제목 (선택적) */
  blogTitle?: string;
}

/** 프로젝트 데이터 전체 구조 */
export interface IProject {
  /** 고유 ID (Tabs value 등으로 사용) */
  id: string;
  /** 프로젝트 제목 */
  title: string;
  /** 소개 텍스트 */
  intro: string;
  /** 링크 텍스트 */
  link: Array<{
    url: string;
    title: string;
  }>;
  /** 아키텍쳐 이미지 */
  architectureImg: string;
  /** 배경 텍스트 */
  background: string;
  /** 기본 정보 섹션 */
  info: IProjectInfo;
  /** 주요 역할 목록 */
  roles: IProjectRole[];
  /** 트러블슈팅 항목들 */
  troubleshooting?: ITrouble[];
  /** 미리보기 사진들 */
  previewImages: Array<{
    url: string;
    title: string;
  }>;
  /** 미리보기 영상들 */
  previewVideos: Array<{
    url: string;
    title: string;
  }>;
}

/** 개별 기술(Tech) 항목 */
export interface ITech {
  /** 기술 이름 (예: "React") */
  name: string;
  /** 로고 SVG 등의 URL (public 폴더 기준 절대 경로) */
  logoUrl: string;
  /** 숙련도 또는 설명 텍스트 */
  proficiency: string;
}

/** 카테고리별 기술 스택 데이터 구조 */
export interface ITechStack {
  /** 카테고리 이름 (예: "프론트엔드", "백엔드", "기타") */
  category: string;
  /** 해당 카테고리에 속한 기술 목록 */
  techs: ITech[];
}

/** 단일 자격증(Certification) 항목 */
export interface ICertification {
  /** 자격증 명칭 */
  name: string;
  /** 발급 기관 */
  organization: string;
  /** 취득 일자 (연.월 형식) */
  date: string;
}
