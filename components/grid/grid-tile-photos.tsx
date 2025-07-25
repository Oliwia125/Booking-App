import Image from "next/image";
import React from "react";
import { 
    Carousel, 
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious, } from '../ui/carousel'
    import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { db } from "@/db";
import { hotelRoomPictureTable, hotelRoomTable, hotelsTable, hotelRoomAttractionTable } from "@/db/schema";
import { cn } from "@/lib/utils";
import { eq } from "drizzle-orm";
import { Heart, Check } from "lucide-react";
import { Button } from "../ui/button";
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

async function getHotelRoomAttractions(id: number): Promise<any[]> {
  const result = await db.select().from(hotelRoomAttractionTable).where(eq(hotelRoomAttractionTable.hotelRoomId, id));
  return result;
}
  


const GridPhotosTile = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { hotelRoomId: number; imageWidth?: number; imageHeight?: number; }>(
  async ({ hotelRoomId, imageWidth = 1200, imageHeight = 1000, className, ...props }, ref) => {
    const images = await getHotelRoomPictures(hotelRoomId);
    const roomInfo = await getHotelRoomInfo(hotelRoomId);
    const roomLocation = await getHotelRoomLocation(hotelRoomId);
    const roomAttractions = await getHotelRoomAttractions(hotelRoomId);
    return (
      <div className="flex-col w-5xl">
        <CardTitle className="pb-5 text-4xl ">{roomInfo?.title}</CardTitle>
        <CardDescription className="p-3 text-lg">{roomLocation?.location}</CardDescription>
      <Carousel className={cn("w-150", className)} {...props} ref={ref}>
        <CarouselContent>
        {images.map((_, i) => 
          <CarouselItem  key={i} >
            <div className="p-1">
              <Image src={_.url} width={imageWidth} height={imageHeight} alt="Room picture" className="rounded-2xl p-2 justify-center" />
            </div>
            <span>
        <h2 className="text-bold pt-3 text-2xl justify-end">400 EUR</h2>
      </span>
          </CarouselItem>
        )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mb-0.5">
        <Card className="bg-transparent mb-5">
          <CardDescription className="mx-5 text-xl text-slate-100 font-bold">About this stay:</CardDescription>
      <CardDescription className="mx-5 text-xl text-slate-100">{roomInfo?.description}</CardDescription>
      </Card>
      </div>
      
        
      <div className="mt-0.5">
       <Card className="bg-transparent">
       <CardTitle className="text-bold mx-2 text-lg">The benefits of this stay:</CardTitle>
        <CardContent className="text-md">
        <p className="flex py-3 "><Check /> King size bed</p>
         <p className="flex py-3 "><Check /> WiFi</p> 
         <p className="flex py-3 "><Check /> Bathtub</p> 
         <p className="flex py-3 "><Check /> Free parking</p> 
        
       </CardContent>
       
      </Card>
     </div>
     
      </div>
       
    )
  }
)
GridPhotosTile.displayName = "GridPhotosTile"

export default GridPhotosTile;