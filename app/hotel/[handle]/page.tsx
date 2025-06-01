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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row p-3">
    <GridPhotosTile hotelRoomId={room.id} />
    </div>
    <Button>Book now</Button>
    </main>
      <Footer />
      </>
  )
}

export default RoomPage;