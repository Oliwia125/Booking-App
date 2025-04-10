import Navbar from "@/components/navbar/nav";
import Image from "next/image";
import Grid from "@/components/grid/grid";
import Footer from "@/components/footer/footer";
import Header from "@/components/header";
import { db } from "@/db";
import { hotelsTable, hotelPictureTable } from "@/db/schema";
import { eq } from "drizzle-orm";


export default async function Home() {
  const result = await db.select().from(hotelsTable).leftJoin(hotelPictureTable, eq(hotelsTable.id, hotelPictureTable.hotelId))
  const allHotels = []
  result.map(hotel => allHotels.push({
    title: hotel.hotels_table.title,
    location: hotel.hotels_table.location,
    url: hotel.hotels_picture_table.url || '',
    }))
  return (
   <main>
    <Navbar />
    <Header />
    <Grid hotels={allHotels} />
    <Footer />
   </main>
  );
}
