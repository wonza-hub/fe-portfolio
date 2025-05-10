import { certifications } from '@/data/certifications';
import CertificationCard from './certification-card';

export default function Certifications() {
  return (
    <div className="container mx-auto h-full px-4 py-16">
      <h2 className="section-header">자격증/회화</h2>
      <div className="tablet:grid tablet:grid-cols-2 tablet:gap-4 laptop:grid-cols-3 mx-auto flex h-full max-w-5xl grid-rows-4 flex-col gap-2 overflow-auto pb-8">
        {certifications.map((cert) => (
          <CertificationCard
            key={cert.name}
            certification={cert}
          />
        ))}
      </div>
    </div>
  );
}
