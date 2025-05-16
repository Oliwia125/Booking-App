import { boolean } from 'drizzle-orm/gel-core';
import { integer, numeric, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';


export const bookingTable = pgTable('bookings_table', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  userId: text('user_id').unique().notNull(),
  location: text('location').notNull(),
  checkIn: timestamp('check_in').notNull(),
  checkOut: timestamp('check_out').notNull(),
  numberGuests: integer('number_guests').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});

export const hotelsTable = pgTable('hotels_table', {
  id: serial('id').primaryKey(),
  userId: text('user_id').unique().notNull(),
  title: text('title').notNull(),
  handle: text('handle'),
  description: text('description'),
  location: text('location').notNull(),
  isFavorite: boolean('isFavorite').notNull(),
  isDeleted: boolean('isDeleted').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});

export const hotelRoomTable = pgTable('hotels_room_table', {
  id: serial('id').primaryKey(),
  userId: text('user_id').unique().notNull(),
  hotelId: integer('hotel_id').references(() => hotelsTable.id),
  title: text('title').notNull(),
  handle: text('handle'),
  description: text('description'),
  isDeleted: boolean('isDeleted').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});

export const hotelPictureTable = pgTable('hotels_picture_table', {
  id: serial('id').primaryKey(),
  userId: text('user_id').unique().notNull(),
  hotelId: integer('hotel_id').references(() => hotelsTable.id),
  url: text('url').notNull(),
  isDeleted: boolean('isDeleted').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});

export const hotelRoomPictureTable = pgTable('hotels_room_picture_table', {
  id: serial('id').primaryKey(),
  userId: text('user_id').unique().notNull(),
  hotelRoomId: integer('hotel_room_id').references(() => hotelRoomTable.id),
  url: text('url').notNull(),
  isDeleted: boolean('isDeleted').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});


//export type InsertPost = typeof postsTable.$inferInsert;
//export type SelectPost = typeof postsTable.$inferSelect;
