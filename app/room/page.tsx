import GridPhotosTile from "@/components/grid/grid-tile-photos";
import Navbar from "@/components/navbar/nav";
import { db } from "@/db";
import { hotelRoomTable, hotelRoomPictureTable, hotelsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import Footer from "@/components/footer/footer";
import { Button } from "@/components/ui/button";


interface Room {
    title: string,
    location: string,
    description: string,
    url: string
}

export default async function HotelRoom(): Promise<JSX.Element> {
    const result = await db
      .select()
      .from(hotelRoomTable)
      .leftJoin(hotelRoomPictureTable, eq(hotelRoomTable.id, hotelRoomPictureTable.hotelId))
      .leftJoin(hotelsTable, eq(hotelRoomTable.hotelId, hotelsTable.id));

      const roomPictures: Room[] = result.map((room) => ({
        title: room.hotels_room_table.title as string,
        location: room.hotels_table?.location as string || 'Unknown location',
        description: room.hotels_room_table.description as string,
        url: room.hotels_room_picture_table?.url as string || '',
      }))
    

    return (
        <>
            <Navbar />
            <GridPhotosTile rooms={roomPictures}/>
            <Button className="flex justify-center">Book now</Button>
            <Footer />
        </>
    );

}