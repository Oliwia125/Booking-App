import Image from "next/image";
import React from "react";
import { 
    Carousel, 
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious, } from '../ui/carousel'
    import { CardDescription, CardTitle } from "../ui/card";
import { db } from "@/db";
import { hotelRoomPictureTable, hotelRoomTable, hotelsTable } from "@/db/schema";
import { cn } from "@/lib/utils";
import { eq } from "drizzle-orm";

async function getHotelRoomPictures(id: number): Promise<any[]> {
  return await db.select().from(hotelRoomPictureTable).where(eq(hotelRoomPictureTable.hotelRoomId, id));
}

async function getHotelRoomInfo(id: number): Promise<any> {
  const result = await db.select().from(hotelRoomTable).where(eq(hotelRoomTable.id, id));
  return result[0]; 
}

async function getHotelRoomLocation(id: number): Promise<any> {
  const result = await db.select().from(hotelsTable).where(eq(hotelsTable.id, id));
  return result[0]; 
}

//dorobic tabele z opisami atrakcji etc w db

const GridPhotosTile = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { hotelRoomId: number; imageWidth?: number; imageHeight?: number; }>(
  async ({ hotelRoomId, imageWidth = 1200, imageHeight = 1000, className, ...props }, ref) => {
    const images = await getHotelRoomPictures(hotelRoomId);
    const roomInfo = await getHotelRoomInfo(hotelRoomId);
    const roomLocation = await getHotelRoomLocation(hotelRoomId);
    return (
      <div>
        <CardTitle className="pb-5">{roomInfo?.title}</CardTitle>
        <CardDescription className="p-3">{roomLocation?.location}</CardDescription>
      <Carousel className={cn("w-150", className)} {...props} ref={ref}>
        <CarouselContent>
        {images.map((_, i) => 
          <CarouselItem  key={i} >
            <div className="p-1">
              <Image src={_.url} width={imageWidth} height={imageHeight} alt="Room picture" className="rounded-2xl p-2" />
            </div>
          </CarouselItem>
          
        )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div>
      <CardDescription className="w-2xl text-slate-100">{roomInfo?.description}</CardDescription>
      <span>
        <h2 className="text-bold pt-3">Price: 400EUR</h2>
      </span>
      </div>
      
      </div>
    )
  }
)
GridPhotosTile.displayName = "GridPhotosTile"

export default GridPhotosTile;