import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import {
  hamster,
  pig,
  parrot,
  parrot2,
  chameleon,
  rabbit,
  turtle,
  axolotl,
  axolotl2,
  ferret,
} from '../../public/export'
import Image from 'next/image'

export default function PolygonCarousel() {
  const images = [
    { src: rabbit, alt: 'polygon rabbit' },
    { src: turtle, alt: 'polygon turtle' },
    { src: axolotl, alt: 'polygon axolotl' },
    { src: axolotl2, alt: 'polygon axolotl2' },
    { src: ferret, alt: 'polygon ferret' },
    { src: hamster, alt: 'polygon hamster' },
    { src: pig, alt: 'polygon pig' },
    { src: parrot, alt: 'polygon parrot' },
    { src: parrot2, alt: 'polygon parrot2' },
    { src: chameleon, alt: 'polygon chameleon' },
  ]

  return (
    <Carousel>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              height={2048}
              width={2048}
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              layout="responsive"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
