import { ITrouble } from '@/data/type';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/accordion';

// COMPONENT: 트러블슈팅
export default function TroubleShooting({ troubleshooting }: { troubleshooting: ITrouble[] }) {
  return (
    <div className="pb-4">
      <dt className="bg-muted text-muted-foreground border-muted/80 sticky top-0 z-10 border-y px-4 py-2 font-bold">
        트러블 슈팅
      </dt>
      <dd className="px-4 py-4">
        <Accordion
          type="single"
          collapsible
          className="space-y-4">
          {troubleshooting.map((issue, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card overflow-hidden rounded-lg border">
              <AccordionTrigger className="bg-card hover:bg-muted/50 px-4 py-3 font-medium">
                {issue.title}
              </AccordionTrigger>
              <AccordionContent className="space-y-3 px-4 pt-2">
                <div>
                  <h5 className="text-primary mb-1 text-sm font-semibold">상황</h5>
                  <p className="text-muted-foreground text-sm">{issue.situation}</p>
                </div>
                <div>
                  <h5 className="text-primary mb-1 text-sm font-semibold">원인</h5>
                  <p className="text-muted-foreground text-sm">{issue.cause}</p>
                </div>
                <div>
                  <h5 className="text-primary mb-1 text-sm font-semibold">해결</h5>
                  <p className="text-muted-foreground text-sm">{issue.solution}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </dd>
    </div>
  );
}
