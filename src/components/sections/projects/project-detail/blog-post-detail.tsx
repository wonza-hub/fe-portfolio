import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/shared/ui/drawer';
import { Button } from '@/shared/ui/button';
import { Dispatch, SetStateAction } from 'react';

// COMPONENT: 블로그 게시물
interface IProps {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  selectedBlogLink: { url: string; title: string } | null;
}
export default function BlogPostDetail({ openDrawer, setOpenDrawer, selectedBlogLink }: IProps) {
  if (!selectedBlogLink) return null;

  return (
    <Drawer
      open={openDrawer}
      onOpenChange={setOpenDrawer}>
      <DrawerContent className="h-[85vh]">
        <DrawerHeader>
          <DrawerTitle>{selectedBlogLink?.title}</DrawerTitle>
          <DrawerDescription>블로그 포스트를 확인하세요</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 overflow-hidden px-4">
          {selectedBlogLink && (
            <iframe
              src={selectedBlogLink.url}
              title={selectedBlogLink.title}
              className="h-full w-full rounded-md border"
              style={{ minHeight: 'calc(85vh - 180px)' }}
            />
          )}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">닫기</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
