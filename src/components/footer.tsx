import Link from 'next/link';
import Image from 'next/image';

// 소셜 링크 데이터 배열
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/wonza-hub',
    logoUrl: '/assets/img/site-logo/github.svg',
  },
  {
    name: 'Velog',
    url: 'https://velog.io/@one1_programmer/posts',
    logoUrl: '/assets/img/site-logo/velog.svg',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/woonil',
    logoUrl: '/assets/img/site-logo/linkedin.svg',
  },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* 감사 메시지 */}
          <p className="text-md text-center">방문해주셔서 감사합니다🤓</p>

          {/* 소셜 링크 아이콘 - 반복문 사용 */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary flex items-center transition-colors">
                <Image
                  width={24}
                  height={24}
                  src={social.logoUrl || '/placeholder.svg'}
                  alt={`${social.name} 로고`}
                  className="h-6 w-6"
                />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>

          {/* 저작권 표시 */}
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} WonilHeo. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
