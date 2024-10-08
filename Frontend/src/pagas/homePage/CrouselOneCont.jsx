import { CarouselItem } from '@/components/ui/carousel'

"crousel assits"
import { crouselOneItem } from '@/utils/homeContent'
export const CrouselOneCont = () => {
    const imagas = crouselOneItem
  return (
    <>
          <CarouselItem>
              <div className="p-1 h-[200px]">

                  <h3>page 1</h3>
              </div>
          </CarouselItem>
          <CarouselItem>
              <div className="p-1 h-[200px]">

                  <h3>page 2</h3>
              </div>
          </CarouselItem>
          <CarouselItem>
              <div className="p-1 h-[200px]">

                  <h3>page 3</h3>
              </div>
          </CarouselItem>
    </>
  )
}
