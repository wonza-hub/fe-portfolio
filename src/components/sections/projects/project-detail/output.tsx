import { IProject } from '@/data/type';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel';
import Image from 'next/image';

// COMPONENT: 프로젝트 결과물 (이미지, 동영상)
interface IProps {
  projectTitle: IProject['title'];
  previewImages: IProject['previewImages'];
  previewVideos: IProject['previewVideos'];
}
export default function Output({ projectTitle, previewImages, previewVideos }: IProps) {
  return (
    <div>
      <dt className="bg-muted text-muted-foreground border-muted/80 sticky top-0 z-10 border-y px-4 py-2 font-bold">
        결과물
      </dt>
      <dd className="px-2 py-3">
        {/* 이미지 미리보기 - 이미지가 있는 경우에만 표시 */}
        {previewImages && previewImages.length > 0 && (
          <div className="mb-8">
            <div className="relative mx-auto max-w-5xl">
              <Carousel
                opts={{
                  align: 'start',
                  loop: true,
                  slidesToScroll: 1,
                }}>
                <CarouselContent>
                  {previewImages.map((image, index) => (
                    <CarouselItem
                      key={index}
                      className="laptop:pl-4 laptop:basis-1/2 basis-full">
                      <div className="mx-auto w-full max-w-md overflow-hidden rounded-lg border">
                        <Image
                          src={`${image.url}` || '/assets/img/placeholder.webp'}
                          alt={`${projectTitle} 미리보기 ${image.title}`}
                          width={600}
                          height={400}
                          className="aspect-video w-full object-cover"
                        />
                        <div className="bg-muted/20 p-2 text-center text-sm">{image.title}</div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-1" />
                <CarouselNext className="right-1" />
              </Carousel>
            </div>
          </div>
        )}

        {/* 비디오 미리보기 - 비디오가 있는 경우에만 표시 */}
        {previewVideos && previewVideos.length > 0 && (
          <div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {previewVideos.map((video, index) => (
                <div
                  key={index}
                  className="mx-auto w-full max-w-md overflow-hidden rounded-lg border">
                  <iframe
                    width="100%"
                    height="315"
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="aspect-video"></iframe>
                  <div className="bg-muted/20 p-2 text-center text-sm">{video.title}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 미리보기가 없는 경우 메시지 표시 */}
        {(!previewImages || previewImages.length === 0) &&
          (!previewVideos || previewVideos.length === 0) && (
            <div className="flex h-40 items-center justify-center">
              <p className="text-muted-foreground">미리보기 이미지 및 비디오가 없습니다.</p>
            </div>
          )}
      </dd>
    </div>
  );
}
