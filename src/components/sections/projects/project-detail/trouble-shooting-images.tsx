import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel';
import { ITrouble } from '@/data/type';

export default function TroubleShootingImages({ images }: { images: ITrouble['images'] }) {
  return (
    <>
      {images && images.length > 0 && (
        <div className="mb-8">
          <div className="relative mx-auto max-w-5xl">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
                slidesToScroll: 1,
              }}>
              <CarouselContent>
                {images.map((imageItem, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full">
                    <div className="mx-auto w-full overflow-hidden rounded-lg border">
                      <Image
                        src={`${imageItem.url}` || '/assets/img/placeholder.webp'}
                        alt={`${imageItem.title}에 대한 이미지`}
                        width={600}
                        height={400}
                        className="aspect-video w-full object-cover"
                      />
                      <div className="bg-muted/20 p-2 text-center text-sm">{imageItem.title}</div>
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
    </>
  );
}
