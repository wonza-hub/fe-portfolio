import { ITech } from '@/data/type';
import { Card, CardContent, CardTitle } from '@/shared/ui/card';
import Image from 'next/image';

export default function TechStackCard({ tech }: { tech: ITech }) {
  const { name, logoUrl, proficiency } = tech;

  return (
    <Card
      key={name}
      className="mt-0 py-4">
      <CardContent>
        <div className="flex flex-row items-center">
          {/* 기술스택 로고 아이콘 */}
          <Image
            width={30}
            height={30}
            src={`${logoUrl}`}
            alt={`${name} 아이콘`}
            className="mr-4"
          />
          <div className="flex flex-col">
            {/* 기술스택명 */}
            <CardTitle>{name}</CardTitle>
            {/* 활용능력 */}
            <p className="text-muted-foreground mt-1 h-16 overflow-auto text-sm">{proficiency}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
