import { ICertification } from '@/data/type';
import { Card, CardContent, CardHeader } from '@/shared/ui/card';
import { CalendarDays, Landmark } from 'lucide-react';

export default function CertificationCard({ certification }: { certification: ICertification }) {
  const { name, organization, date } = certification;

  return (
    <Card
      key={name}
      className="tablet:h-full tablet:gap-0 h-fit justify-between overflow-hidden">
      <CardHeader>
        {/* <CardTitle className="h-fit"> */}
        <h3 className="font-semibold">{name}</h3>
        {/* </CardTitle> */}
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
        </div>
      </CardContent>
    </Card>
  );
}
