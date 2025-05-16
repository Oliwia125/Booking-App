import Navbar from "@/components/navbar/nav";
import Image from "next/image";
import Grid from "@/components/grid/grid";
import Footer from "@/components/footer/footer";
import Header from "@/components/header";
import { db } from "@/db";
import { hotelsTable, hotelPictureTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import LazyGrid from "@/components/grid/grid-lazy";

interface Hotel {
  title: string;
  location: string;
  url: string;
}

export default async function Home(): Promise<JSX.Element> {
  const result = await db
    .select()
    .from(hotelsTable)
    .leftJoin(hotelPictureTable, eq(hotelsTable.id, hotelPictureTable.hotelId));

  const allHotels: Hotel[] = result.map((hotel) => ({
    title: hotel.hotels_table.title,
    location: hotel.hotels_table.location,
    url: hotel.hotels_picture_table?.url || '',
  }));

  return (
    <main>
      <Navbar />
      <Header />
      <LazyGrid hotels={allHotels}/>
      <Footer />
    </main>
  );
}
