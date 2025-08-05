import GridPhotosTile from "@/components/grid/grid-tile-photos";
import Navbar from "@/components/navbar/nav";
import { db } from "@/db";
import { hotelRoomTable, hotelRoomPictureTable, hotelsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import Footer from "@/components/footer/footer";
import { Button } from "@/components/ui/button";




interface Props {
    params: {
      handle: string }
}

async function getHotelRoomByHandle(handle: string) {
  const hotel = await db.select().from(hotelsTable).where(eq(hotelsTable.handle, handle));
  return await db
      .select()
      .from(hotelRoomTable)
      .leftJoin(hotelRoomPictureTable, eq(hotelRoomTable.id, hotelRoomPictureTable.hotelId))
      .where(eq(hotelRoomTable.hotelId, hotel[0].id));
}



const RoomPage = async function RoomPage({ params }: Props) {
    const _room = await getHotelRoomByHandle(params.handle); 
    const room = _room[0].hotels_room_table;
    console.log(_room)
    


  return (
    <>
    <Navbar />
    <main className="min-h-screen flex flex-col items-center justify-center p-24">
      <div className="w-full flex justify-center">
    <GridPhotosTile hotelRoomId={room.id} />
    </div>
    <div className="mt-10 position-relative w-80">
    <Button>Book now</Button>
    </div>
    </main>
      <Footer />
      </>
  )
}

export default RoomPage;