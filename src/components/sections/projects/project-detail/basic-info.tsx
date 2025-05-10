import { IProjectInfo } from '@/data/type';

// COMPONENT: 기본 정보
export default function BasicInfo({ info }: { info: IProjectInfo }) {
  const { period, team, role, tech } = info;

  return (
    <div>
      <dt className="bg-muted text-muted-foreground border-muted/80 sticky top-0 z-10 border-y px-4 py-2 font-bold">
        기본 정보
      </dt>
      <dd className="px-4 py-4">
        <div className="tablet:grid-cols-3 grid grid-cols-1 gap-4">
          <div>
            <h5 className="font-medium">기간</h5>
            <p className="text-muted-foreground">{period}</p>
          </div>
          <div>
            <h5 className="font-medium">인원</h5>
            <p className="text-muted-foreground">{team}</p>
          </div>
          <div>
            <h5 className="font-medium">내 역할</h5>
            <p className="text-muted-foreground">{role}</p>
          </div>
          <div className="tablet:col-span-3">
            <h5 className="font-medium">사용 기술</h5>
            <p className="text-muted-foreground">{tech}</p>
          </div>
        </div>
      </dd>
    </div>
  );
}
