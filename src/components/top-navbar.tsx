'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/shared/utils/shadcn-utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/shared/ui/button';

const navItems = [
  { name: '소개', href: '#intro' },
  { name: '프로젝트', href: '#projects' },
  { name: '기술스택', href: '#tech-stack' },
  { name: '자격증/회화', href: '#certifications' },
  // { name: "커뮤니티 활동", href: "#community" },
  // { name: '멘토링', href: '#mentoring' },
  { name: '교육사항', href: '#education' },
];

export default function TopNavbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      const sections = document.querySelectorAll('section[id]');

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-300',
          isScrolled ? 'bg-background/80 shadow-sm backdrop-blur-md' : 'bg-transparent',
        )}>
        <div className="mx-auto flex h-16 items-center justify-between px-6">
          <Link
            href="/"
            className="text-xl font-bold">
            Woonil's Portfolio
          </Link>

          <nav className="tablet:flex hidden items-center space-x-6">
            <ul className="flex items-center space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      'hover:text-primary cursor-pointer text-sm font-medium transition-colors',
                      activeSection === item.href.substring(1)
                        ? 'text-primary'
                        : 'text-muted-foreground',
                    )}>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
            {/* <ModeToggle /> */}
          </nav>

          <div className="tablet:hidden flex items-center">
            {/* <ModeToggle /> */}
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">메뉴 열기</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="bg-background/95 tablet:hidden fixed inset-0 z-40 pt-16 backdrop-blur-sm">
          <nav className="container mx-auto px-4 py-6">
            <ul className="flex flex-col items-center space-y-6">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="w-full">
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      'hover:text-primary w-full py-2 text-center text-lg font-medium transition-colors',
                      activeSection === item.href.substring(1)
                        ? 'text-primary'
                        : 'text-muted-foreground',
                    )}>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
