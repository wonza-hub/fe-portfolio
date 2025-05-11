'use client';

import type { IProject, IProjectRole } from '@/data/type';
import { useEffect, useRef, useState } from 'react';
import {
  Architecture,
  BasicInfo,
  BlogPostDetail,
  Output,
  Role,
  TroubleShooting,
} from './project-detail/index';
import { useResetScroll } from '@/shared/hooks';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function ProjectItem({ project }: { project: IProject }) {
  const {
    id,
    title,
    link,
    intro,
    architectureImg,
    background,
    info,
    roles,
    troubleshooting,
    previewImages,
    previewVideos,
  } = project;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedBlogLink, setSelectedBlogLink] = useState<{
    url: string;
    title: string;
  } | null>(null);

  // project가 변경될 때마다 스크롤 위치 초기화
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [id]);

  // 프로젝트 변경 시 스크롤 초기화
  useResetScroll(scrollContainerRef, [id]);

  const handleBlogLinkClick = (role: IProjectRole) => {
    if (role.blogLink && role.blogTitle) {
      setSelectedBlogLink({
        url: role.blogLink,
        title: role.blogTitle,
      });
      setOpenDrawer(true);
    }
  };

  return (
    <div
      ref={scrollContainerRef}
      className="scrollbar-hide h-[70vh] overflow-y-auto">
      <dl className="bg-background">
        {/* 링크 섹션 */}
        <div>
          <dt className="bg-muted text-muted-foreground border-muted/80 sticky top-0 z-10 border-y px-4 py-2 font-bold">
            링크
          </dt>
          <dd className="px-4 py-4">
            <p className="text-muted-foreground flex gap-2 text-sm">
              {link.map((linkItem) => (
                <span
                  key={linkItem.url}
                  className="hover:text-primary mx-1 flex cursor-pointer flex-row gap-1">
                  <Link
                    target="_blank"
                    href={linkItem.url}>
                    {linkItem.title}
                  </Link>
                  <ExternalLink className="mt-1 h-3.5 w-3.5 flex-shrink-0 opacity-70" />
                </span>
              ))}
            </p>
          </dd>
        </div>
        {/* 소개 섹션 */}
        <div>
          <dt className="bg-muted text-muted-foreground border-muted/80 sticky top-0 z-10 border-y px-4 py-2 font-bold">
            소개
          </dt>
          <dd className="px-4 py-4">
            <p className="text-muted-foreground">{intro}</p>
          </dd>
        </div>
        {/* 배경 섹션 */}
        <div>
          <dt className="bg-muted text-muted-foreground border-muted/80 sticky top-0 z-10 border-y px-4 py-2 font-bold">
            배경
          </dt>
          <dd className="px-4 py-4">
            <p className="text-muted-foreground">{background}</p>
          </dd>
        </div>

        {/* 기본 정보  */}
        <BasicInfo info={info} />

        {/* 아키텍쳐 */}
        {architectureImg && (
          <Architecture
            projectTitle={title}
            architectureImg={architectureImg}
          />
        )}

        {/* 역할 */}
        <Role
          roles={roles}
          handleBlogLinkClick={handleBlogLinkClick}
        />

        <TroubleShooting troubleshooting={troubleshooting} />
        {/* 결과 */}
        <Output
          projectTitle={title}
          previewImages={previewImages}
          previewVideos={previewVideos}
        />
      </dl>

      {/* 블로그 글 상세보기 (Drawer) */}
      <BlogPostDetail
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        selectedBlogLink={selectedBlogLink}
      />
    </div>
  );
}
