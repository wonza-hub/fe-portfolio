'use client';

import { IProject } from '@/data/type';
import { useEffect, useRef } from 'react';

export default function ProjectDetail({ project }: { project: IProject }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // project가 변경될 때마다 스크롤 위치 초기화
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [project]);

  return (
    <div
      ref={scrollContainerRef}
      className="h-[70vh] overflow-y-auto">
      <dl className="bg-background">
        {/* 소개 섹션 */}
        <div className="pb-4">
          <dt className="bg-muted text-muted-foreground border-muted/80 sticky top-0 z-10 border-y px-4 py-2 font-bold">
            소개
          </dt>
          <dd className="px-4 py-4">
            <p className="text-muted-foreground">{project.intro}</p>
          </dd>
        </div>

        {/* 배경 섹션 */}
        <div className="pb-4">
          <dt className="bg-muted text-muted-foreground border-muted/80 sticky top-0 z-10 border-y px-4 py-2 font-bold">
            배경
          </dt>
          <dd className="px-4 py-4">
            <p className="text-muted-foreground">{project.background}</p>
          </dd>
        </div>

        {/* 기본 정보 섹션 */}
        <div className="pb-4">
          <dt className="bg-muted text-muted-foreground border-muted/80 sticky top-0 z-10 border-y px-4 py-2 font-bold">
            기본 정보
          </dt>
          <dd className="px-4 py-4">
            <div className="tablet:grid-cols-3 grid grid-cols-1 gap-4">
              {/* 1열: 기간 */}
              <div>
                <h5 className="font-medium">기간</h5>
                <p className="text-muted-foreground">{project.info.period}</p>
              </div>
              {/* 2열: 인원 */}
              <div>
                <h5 className="font-medium">인원</h5>
                <p className="text-muted-foreground">{project.info.team}</p>
              </div>
              {/* 3열: 내 역할 */}
              <div>
                <h5 className="font-medium">내 역할</h5>
                <p className="text-muted-foreground">{project.info.role}</p>
              </div>
              {/* 4번째 항목: 사용 기술 (tablet 이상에서 3열 span) */}
              <div className="tablet:col-span-3">
                <h5 className="font-medium">사용 기술</h5>
                <p className="text-muted-foreground">{project.info.tech}</p>
              </div>
            </div>
          </dd>
        </div>

        {/* 역할 섹션 */}
        <div className="pb-4">
          <dt className="bg-muted text-muted-foreground border-muted/80 sticky top-0 z-10 border-y px-4 py-2 font-bold">
            역할
          </dt>
          <dd className="px-4 py-4">
            <ul className="list-disc space-y-2 pl-5">
              {project.roles.map((role, index) => (
                <li
                  key={index}
                  className="text-muted-foreground">
                  {role}
                </li>
              ))}
            </ul>
          </dd>
        </div>

        {/* 트러블 슈팅 섹션 */}
        <div className="pb-4">
          <dt className="bg-muted text-muted-foreground border-muted/80 sticky top-0 z-10 border-y px-4 py-2 font-bold">
            트러블 슈팅
          </dt>
          <dd className="px-4 py-4">
            <div className="space-y-4">
              {project.troubleshooting.map((issue, index) => (
                <div
                  key={index}
                  className="rounded-lg border p-4">
                  <h5 className="mb-2 font-medium">{issue.title}</h5>
                  <p className="text-muted-foreground">{issue.description}</p>
                </div>
              ))}
            </div>
          </dd>
        </div>
      </dl>
    </div>
  );
}
