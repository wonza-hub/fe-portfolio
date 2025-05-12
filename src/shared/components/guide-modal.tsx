import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/shared/ui/dialog';
import { Dispatch, SetStateAction } from 'react';

interface IProps {
  guideOpen: boolean;
  setGuideOpen: Dispatch<SetStateAction<boolean>>;
}
export default function GuideModal({ guideOpen, setGuideOpen }: IProps) {
  {
    /* 가이드 모달 */
  }
  return (
    <Dialog
      open={guideOpen}
      onOpenChange={setGuideOpen}>
      <DialogContent className="h-[80vh] max-w-5xl p-0">
        <DialogHeader className="border-b p-4">
          <DialogTitle>포트폴리오 가이드</DialogTitle>
        </DialogHeader>
        <div className="h-full w-full overflow-hidden">
          <iframe
            src="https://www.app.guideflo.com/workspace/4290/manuals/13249/embed?embedSize=responsive&isCover=true"
            style={{ width: '100%', height: 'calc(80vh - 60px)' }}
            sandbox="allow-scripts allow-top-navigation-by-user-activation allow-popups allow-same-origin"
            security="restricted"
            title="Portfolio Guide"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
