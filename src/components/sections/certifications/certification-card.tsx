import { ICertification } from '@/data/type';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/ui/card';
import { CalendarDays, FileBadge, Fingerprint, Landmark } from 'lucide-react';

export default function CertificationCard({ certification }: { certification: ICertification }) {
  const { name, organization, date, number } = certification;

  return (
    <Card
      key={name}
      className="tablet:h-full ltablet:gap-0 h-fit justify-between gap-2 overflow-hidden">
      <CardHeader>
        <CardTitle className="h-fit">
          <h3 className="font-semibold">{name}</h3>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-6">
        <div className="tablet:gap-0 tablet:flex-col flex flex-row gap-2 space-y-2">
          {/* 발급기관 */}
          <div className="text-muted-foreground text-sm font-medium">
            <span className="flex items-center">
              <Landmark className="icon-sm mr-2" />
              {organization}
            </span>
          </div>
          {/* 발급일자 */}
          <div className="text-muted-foreground text-sm font-medium">
            <span className="flex items-center">
              <CalendarDays className="icon-sm mr-2" />
              {date}
            </span>
          </div>
          {/* 발급번호 */}
          <div className="text-muted-foreground text-sm font-medium">
            <span className="flex items-center">
              <Fingerprint className="icon-sm mr-2" />
              {number}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row justify-end">
        <button className="flex cursor-pointer items-center">
          <FileBadge className="icon-sm mr-1" />
          자세히보기
        </button>
      </CardFooter>
    </Card>
  );
}
