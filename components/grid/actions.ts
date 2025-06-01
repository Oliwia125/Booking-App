"use server"

import { db } from "@/db";
import { hotelsTable } from "@/db/schema";
import { hotelPictureTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getHotelsByOffset = async (offset: number) => {
    const pageSize = 5
    const result = await db
    .select()
    .from(hotelsTable)
    .leftJoin(hotelPictureTable, eq(hotelsTable.id, hotelPictureTable.hotelId))
    .limit(pageSize)
    .offset((offset -1)*pageSize);


  return result.map((hotel) => ({
    title: hotel.hotels_table.title,
    location: hotel.hotels_table.location,
    url: hotel.hotels_picture_table?.url || '',
    handle: hotel.hotels_table.handle,
  }));
}
