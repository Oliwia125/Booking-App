// @ts-nocheck

"use server"

import { db } from "@/db"
import { bookingTable } from "@/db/schema"
import { revalidatePath } from "next/cache"

export async function createBooking(data) {
  try {
    await db.insert(bookingTable).values(data)
    revalidatePath("/")
    return { success: true, message: "Booking created successfully" }
  } catch (error) {
    console.error("Failed to create booking:", error)
    return { success: false, message: "Failed to create booking" }
  }
}