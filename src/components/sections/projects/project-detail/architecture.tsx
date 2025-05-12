import { IProject } from '@/data/type';
import Image from 'next/image';

// COMPONENT: 프로젝트 아키텍쳐
interface IProps {
  projectTitle: IProject['title'];
  architectureImg: IProject['architectureImg'];
}
export default function Architecture({ projectTitle, architectureImg }: IProps) {
  return (
    <div>
      <dt className="bg-muted text-muted-foreground border-muted/80 sticky top-0 z-10 border-y px-4 py-2 font-bold">
        아키텍쳐
      </dt>
      <dd className="py-2">
        <Image
          width={500}
          height={350}
          className="mx-auto"
          src={`${architectureImg}`}
          alt={`${projectTitle}의 아키텍쳐`}
        />
      </dd>
    </div>
  );
}
