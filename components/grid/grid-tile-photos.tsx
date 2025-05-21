import Image from "next/image";
import React from "react";
import { 
    Carousel, 
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious, } from '../ui/carousel'
import { db } from "@/db";
import { hotelRoomTable, hotelRoomPictureTable } from "@/db/schema";
import { cn } from "@/lib/utils";
import { eq } from "drizzle-orm";
async function getHotelRoomPictures(id: number): Promise<any[]> {
  return db.select().from(hotelRoomTable).where(eq(hotelRoomPictureTable.hotelRoomId, id));
}



const GridPhotosTile = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { hotelRoomId: number; imageWidth?: number; imageHeight?: number; }>(
  async ({ hotelRoomId, imageWidth = 100, imageHeight = 100, className, ...props }, ref) => {
    const images = await getHotelRoomPictures(hotelRoomId);
    return (
      <Carousel className={cn("w-full max-w-xs", className)} {...props} ref={ref}>
        <CarouselContent>
        {images.map((_, i) => 
          <CarouselItem  key={i}>
            <div className="p-1">
              <Image src={_.url} width={imageWidth} height={imageHeight} alt="Room picture" />
            </div>
          </CarouselItem>
        )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
  }
)
GridPhotosTile.displayName = "GridPhotosTile"

export default GridPhotosTile;