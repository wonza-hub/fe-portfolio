import { IProjectRole } from '@/data/type';
import { ExternalLink } from 'lucide-react';

// COMPONENT: 프로젝트 역할
interface IProps {
  roles: IProjectRole[];
  handleBlogLinkClick: (role: IProjectRole) => void;
}
export default function Role({ roles, handleBlogLinkClick }: IProps) {
  return (
    <div>
      <dt className="bg-muted text-muted-foreground border-muted/80 sticky top-0 z-10 border-y px-4 py-2 font-bold">
        역할
      </dt>
      <dd className="px-4 py-4">
        <ul className="list-disc space-y-2 pl-5">
          {roles.map((role, index) => (
            <li
              key={index}
              className="text-muted-foreground">
              {role.blogLink ? (
                <button
                  onClick={() => handleBlogLinkClick(role)}
                  className="group hover:text-primary inline-flex cursor-pointer items-start gap-1 text-left">
                  <span className="group-hover:underline">{role.description}</span>
                  <ExternalLink className="mt-1 h-3.5 w-3.5 flex-shrink-0 opacity-70" />
                </button>
              ) : (
                role.description
              )}
            </li>
          ))}
        </ul>
      </dd>
    </div>
  );
}
