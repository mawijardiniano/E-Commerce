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
import Image1 from "@/app/favicon.ico"

export default function CarouselPlugin() {
  const autoplayPlugin = Autoplay({ delay: 2000, stopOnInteraction: false })

  const images = [
    Image1.src,
    "https://via.placeholder.com/400x300?text=Image+2",
    "https://via.placeholder.com/400x300?text=Image+3",
    "https://via.placeholder.com/400x300?text=Image+4",
    "https://via.placeholder.com/400x300?text=Image+5",
  ]

  return (
    <Carousel
      plugins={[autoplayPlugin]}
      className="w-full md:max-w-2xl sm:max-w-md xs:max-w-xs"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="md:h-60 sm:h-56 xs:h-52 flex items-center justify-center">
                <CardContent className="flex items-center justify-center p-0">
                  <img
                    src={image}
                    alt={`Promotion ${index + 1}`}
                    className="w-full h-full object-cover"
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
