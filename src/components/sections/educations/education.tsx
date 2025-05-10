import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { CalendarDays, GraduationCap } from 'lucide-react';

const educationData = [
  {
    name: '소프트웨어학과',
    institution: '충북대학교',
    period: '2019.03 ~ 2025.02',
    description: `· 학점 3.99 / 4.5 (전공 3.98)\n · 4학기 연속 이공계 국가우수 전액 장학금 수혜`,
  },
  {
    name: '클라우드 커리어의 시작: AWS 기반 DevOps 엔지니어 교육',
    institution: '멋쟁이 사자처럼',
    period: '2024.06 ~ 2024.11',
    description:
      '· 실습 기반 Linux, Docker, k8s, AWS 교육 진행하며 인프라 전반의 지식 학습\n · 4회의 프로젝트로 여러 수강생들과의 협업',
  },
];

export default function Education() {
  return (
    <div className="container mx-auto h-full px-4 py-16">
      <h2 className="section-header">교육사항</h2>
      <div className="tablet:grid-cols-2 desktop:grid-cols-3 mx-auto grid max-w-5xl grid-cols-1 gap-6">
        {educationData.map((education) => (
          <Card
            key={education.name}
            className="justify-between gap-0 overflow-hidden">
            <CardHeader>
              <CardTitle className="desktop:h-16 h-fit">
                <h3 className="mb-2 text-xl font-semibold">{education.name}</h3>
              </CardTitle>
              <div className="text-muted-foreground mb-4 flex flex-col gap-2 text-sm">
                <div className="text-muted-foreground text-sm font-medium">
                  <span className="flex items-center">
                    <GraduationCap className="icon-sm mr-2" />
                    <span>{education.institution}</span>
                  </span>
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  <span className="flex items-center">
                    <CalendarDays className="icon-sm mr-2" />
                    <span>{education.period}</span>
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-6">
              <p className="text-muted-foreground whitespace-pre-line">{education.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
