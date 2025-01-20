"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image1 from "@/assets/chinese.png"
import Image2 from "@/assets/halftime.png"
import Image3 from "@/assets/huawei.png"
import Image4 from "@/assets/livextra.jpg"
import Image5 from "@/assets/you.png"

export default function CarouselPlugin() {
  const autoplayPlugin = Autoplay({ delay: 2000, stopOnInteraction: false })

  const images = [
    Image1.src,
    Image2.src,
    Image3.src,
    Image4.src,
    Image5.src,
  ]

  return (
    <Carousel
  plugins={[autoplayPlugin]}
  className="w-full md:max-w-2xl sm:max-w-lg xs:max-w-md"
>
  <CarouselContent>
    {images.map((image, index) => (
      <CarouselItem key={index}>
        <div className="p-1">
          <Card className="w-full md:h-56 sm:h-40 xs:h-34 flex items-center justify-center">
            <CardContent className="flex items-center justify-center w-full h-full p-0">
              <img
                src={image}
                alt={`Promotion ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

  )
}
