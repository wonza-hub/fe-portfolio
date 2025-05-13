import { ITrouble } from '@/data/type';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/accordion';
import TroubleShootingImages from './trouble-shooting-images';

// COMPONENT: 트러블슈팅
export default function TroubleShooting({ troubleshooting }: { troubleshooting: ITrouble[] }) {
  return (
    <div className="pb-4">
      <dt className="bg-muted text-muted-foreground border-muted/80 sticky top-0 z-10 border-y px-4 py-2 font-bold">
        <h4>트러블 슈팅</h4>
      </dt>
      <dd className="px-4 py-4">
        <Accordion
          type="single"
          collapsible
          className="h-fit space-y-4">
          {troubleshooting.map((issue, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card overflow-hidden rounded-lg border">
              <AccordionTrigger className="bg-card hover:bg-muted/50 px-4 py-3 font-medium">
                <h5>{issue.title}</h5>
              </AccordionTrigger>
              <AccordionContent>
                <div className="laptop:flex-row flex w-full flex-col">
                  {/* 관련 이미지 */}
                  <div className="laptop:w-[50%] w-full px-8 py-2">
                    <TroubleShootingImages images={issue.images} />
                  </div>
                  {/* 상세 설명 */}
                  <article className="laptop:w-[50%] w-full space-y-3 px-8 pt-2 pb-4">
                    <div>
                      <h6 className="text-primary mb-1 text-sm font-semibold">상황</h6>
                      <p className="text-muted-foreground text-sm">{issue.situation}</p>
                    </div>
                    <div>
                      <h6 className="text-primary mb-1 text-sm font-semibold">원인</h6>
                      <p className="text-muted-foreground text-sm">{issue.cause}</p>
                    </div>
                    <div>
                      <h6 className="text-primary mb-1 text-sm font-semibold">해결</h6>
                      <p className="text-muted-foreground text-sm">{issue.solution}</p>
                    </div>
                  </article>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </dd>
    </div>
  );
}
