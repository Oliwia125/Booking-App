"use server"

import { db } from "@/db";
import { hotelsTable } from "@/db/schema";
import { hotelPictureTable } from "@/db/schema";
import { eq, like, and } from "drizzle-orm";

export type Hotel = {
  title: string;
  location: string;
  url: string;
  handle: string;
};

export const getHotelsByOffset = async (offset: number): Promise<Hotel[]> => {
    const pageSize = 5
    const result = await db
    .select()
    .from(hotelsTable)
    .leftJoin(hotelPictureTable, eq(hotelsTable.id, hotelPictureTable.hotelId))
    .limit(pageSize)
    .offset((offset -1)*pageSize);


  return result.map((hotel) => ({
    title: hotel.hotels_table.title as string,
    location: hotel.hotels_table.location as string,
    url: (hotel.hotels_picture_table?.url || '') as string,
    handle: hotel.hotels_table.handle as string,
  }));
}

export const getHotelsBySearch = async (
  offset: number,
  location?: string,
  dateFrom?: Date | null,
  dateTo?: Date | null,
  guests?: string
): Promise<Hotel[]> => {
  const pageSize = 5;
  
  // Build where conditions
  const conditions = [];
  if (location && location.trim() !== '') {
    conditions.push(like(hotelsTable.location, `%${location}%`));
  }
  
  // Add more conditions here based on dates and guests if needed
  // For now, we'll filter by location only
  
  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;
  
  const result = await db
    .select()
    .from(hotelsTable)
    .leftJoin(hotelPictureTable, eq(hotelsTable.id, hotelPictureTable.hotelId))
    .where(whereClause)
    .limit(pageSize)
    .offset((offset - 1) * pageSize);

  return result.map((hotel) => ({
    title: hotel.hotels_table.title as string,
    location: hotel.hotels_table.location as string,
    url: (hotel.hotels_picture_table?.url || '') as string,
    handle: hotel.hotels_table.handle as string,
  }));
};
