'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import ProjectItem from './project-item';
import { projects } from '@/data/projects';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <div className="tablet:px-6 mx-auto h-full w-full max-w-[72rem] px-2 pt-16 pb-10">
      <h2 className="section-header">프로젝트</h2>
      <div className="space-y-2">
        {/* 프로젝트 선택 탭 */}
        <Tabs
          defaultValue={projects[0].id}
          onValueChange={(value) => {
            const project = projects.find((p) => p.id === value);
            if (project) {
              setActiveProject(project);
            }
          }}
          className="w-full">
          <TabsList className="w-full justify-start overflow-x-auto">
            {projects.map((project) => (
              <TabsTrigger
                key={project.id}
                value={project.id}
                className="px-6">
                <h3>{project.title}</h3>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* 프로젝트 내용 */}
        <div className="relative w-full">
          <ProjectItem project={activeProject} />
          <div
            className={`pointer-events-none absolute bottom-0 left-0 h-12 w-full bg-gradient-to-t from-white to-transparent`}
          />
        </div>
      </div>
    </div>
  );
}
