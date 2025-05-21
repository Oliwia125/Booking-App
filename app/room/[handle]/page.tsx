import GridPhotosTile from "@/components/grid/grid-tile-photos";
import Navbar from "@/components/navbar/nav";
import { db } from "@/db";
import { hotelRoomTable, hotelRoomPictureTable, hotelsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import Footer from "@/components/footer/footer";
import { Button } from "@/components/ui/button";


interface Room {
  id: number;
  title: string;
  location: string;
  description: string;
  url: string;
}

interface Props {
    params: {
      handle: string }
}

async function getHotelRoomByHandle(handle: string): Promise<Room[]> {
    return db
      .select()
      .from(hotelRoomTable)
      .leftJoin(hotelRoomPictureTable, eq(hotelRoomTable.id, hotelRoomPictureTable.hotelId))
      .leftJoin(hotelsTable, eq(hotelRoomTable.handle, handle));
}



const RoomPage = async function RoomPage({ params }: Props) {
    const _room = await getHotelRoomByHandle(params.handle); 
    const room = _room[0];


  return (
    <>
    <Navbar />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-start gap-20">
    <GridPhotosTile hotelRoomId={room.id} />
    <Button>Book now</Button>
    </div>
    </main>
      <Footer />
      </>
  )
}

export default RoomPage;