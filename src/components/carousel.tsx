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

export default function CarouselPlugin() {
  const autoplayPlugin = Autoplay({ delay: 2000, stopOnInteraction: true }) 

  return (
    <Carousel
      plugins={[autoplayPlugin]}
      className="w-full md:max-w-2xl sm:max-w-md xs:max-w-xs"
      onMouseEnter={autoplayPlugin.stop}
      onMouseLeave={autoplayPlugin.reset} 
    >
      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="md:h-60 sm:h-56 xs:h-52 flex items-center justify-center">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
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
