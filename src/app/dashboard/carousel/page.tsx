import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Page() {
  return (
    <div className="w-full flex justify-center">
      <Carousel 
      className="w-full max-w-xs"
      opts={{
       // dragFree:true esto se utiliza para que al deslizar el mouse no se pase al siguiente item sino que dezlice el item
      loop:true
      }}
      >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem 
          className="md:basis-1/2 lg:basis-1/3" // el basis es para que el tamaño del item disminuya en relacion a la pantalla
          key={index}
          > 
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex justify-center items-center" />
      <CarouselNext className="hidden sm:flex justify-center items-center" />
    </Carousel>
    </div>
  );
}