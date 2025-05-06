'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import {
  Education,
  Certifications,
  Introduction,
  Projects,
  TechStack,
} from '@/components/sections/index';
import { Button } from '@/shared/ui/button';
import { ChevronDown } from 'lucide-react';

export default function Home() {
  const introRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const mentoringRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);

  // 2) refs 객체 묶기 (identity 안정화)
  const sectionRefs = useMemo(
    () => ({
      intro: introRef,
      projects: projectsRef,
      techStack: techStackRef,
      certifications: certificationsRef,
      education: educationRef,
      mentoring: mentoringRef,
      community: communityRef,
    }),
    [
      introRef,
      projectsRef,
      techStackRef,
      certificationsRef,
      educationRef,
      mentoringRef,
      communityRef,
    ],
  );

  const [, setActiveSection] = useState('intro');

  const scrollToNextSection = (currentSection: string) => {
    const sections = Object.keys(sectionRefs);
    const currentIndex = sections.indexOf(currentSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    const nextSection = sections[nextIndex];

    sectionRefs[nextSection as keyof typeof sectionRefs].current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of Object.keys(sectionRefs)) {
        const element = sectionRefs[section as keyof typeof sectionRefs].current;
        if (!element) continue;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-auto">
      <section
        ref={sectionRefs.intro}
        className="relative flex h-screen snap-start flex-col justify-center"
        id="intro">
        <Introduction />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToNextSection('intro')}
            className="animate-bounce">
            <ChevronDown className="h-6 w-6" />
            <span className="sr-only">다음 섹션으로</span>
          </Button>
        </div>
      </section>

      <section
        ref={sectionRefs.projects}
        className="relative flex h-screen snap-start flex-col justify-center"
        id="projects">
        <Projects />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToNextSection('projects')}
            className="animate-bounce">
            <ChevronDown className="h-6 w-6" />
            <span className="sr-only">다음 섹션으로</span>
          </Button>
        </div>
      </section>

      <section
        ref={sectionRefs.techStack}
        className="relative flex h-screen snap-start flex-col justify-center"
        id="tech-stack">
        <TechStack />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToNextSection('techStack')}
            className="animate-bounce">
            <ChevronDown className="h-6 w-6" />
            <span className="sr-only">다음 섹션으로</span>
          </Button>
        </div>
      </section>

      <section
        ref={sectionRefs.certifications}
        className="relative flex h-screen snap-start flex-col justify-center"
        id="certifications">
        <Certifications />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToNextSection('certifications')}
            className="animate-bounce">
            <ChevronDown className="h-6 w-6" />
            <span className="sr-only">다음 섹션으로</span>
          </Button>
        </div>
      </section>

      {/* <section
        ref={sectionRefs.community}
        className="h-screen snap-start flex flex-col justify-center relative"
        id="community"
      >
        <Community />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToNextSection("community")}
            className="animate-bounce"
          >
            <ChevronDown className="h-6 w-6" />
            <span className="sr-only">다음 섹션으로</span>
          </Button>
        </div>
      </section> */}

      {/* <section
        ref={sectionRefs.mentoring}
        className="h-screen snap-start flex flex-col justify-center relative"
        id="mentoring"
      >
        <Mentoring />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToNextSection("mentoring")}
            className="animate-bounce"
          >
            <ChevronDown className="h-6 w-6" />
            <span className="sr-only">다음 섹션으로</span>
          </Button>
        </div>
      </section> */}

      <section
        ref={sectionRefs.education}
        className="relative flex h-screen snap-start flex-col justify-center"
        id="education">
        <Education />
      </section>
    </div>
  );
}
