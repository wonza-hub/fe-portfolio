import { techStacks } from '@/data/tech-stack';
import TechStackCard from './tech-stack-card';

export default function TechStacks() {
  return (
    <div className="container mx-auto h-full py-24 pt-12">
      <h2 className="section-header">기술 스택</h2>
      <div className="scrollbar-hide h-full space-y-8 overflow-auto px-6 py-10 pb-24 target:px-8">
        {techStacks.map((category) => (
          <div key={category.category}>
            <h3 className="mb-4 text-xl font-semibold">{category.category}</h3>
            <div className="tablet:grid-cols-2 desktop:grid-cols-3 grid grid-cols-1 gap-4">
              {category.techs.map((tech) => (
                <TechStackCard
                  key={tech.name}
                  tech={tech}
                />
              ))}
            </div>
          </div>
        ))}
        <div
          className={`pointer-events-none absolute bottom-0 left-0 h-72 w-full bg-gradient-to-t from-white to-transparent`}
        />
      </div>
    </div>
  );
}
