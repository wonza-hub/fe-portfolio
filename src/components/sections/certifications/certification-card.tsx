import { ICertification } from '@/data/type';
import { Card, CardContent, CardHeader } from '@/shared/ui/card';
import { CalendarDays, Landmark } from 'lucide-react';

export default function CertificationCard({ certification }: { certification: ICertification }) {
  const { name, organization, date } = certification;

  return (
    <Card
      key={name}
      className="tablet:h-full tablet:gap-2 h-fit justify-between gap-0 overflow-hidden">
      <CardHeader>
        <h3 className="font-semibold">{name}</h3>
      </CardHeader>
      <CardContent className="px-6">
        <div className="tablet:gap-0 tablet:flex-col flex flex-wrap gap-2">
          {/* 발급기관 */}
          <div className="text-muted-foreground tablet:text-sm text-xs font-medium">
            <span className="flex items-center">
              <Landmark className="icon-sm mr-2" />
              {organization}
            </span>
          </div>
          {/* 발급일자 */}
          <div className="text-muted-foreground tablet:text-sm text-xs font-medium">
            <span className="flex items-center">
              <CalendarDays className="icon-sm mr-2" />
              {date}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
