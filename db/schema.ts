import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';


export const bookingTable = pgTable('bookings_table', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  userId: text('user_id').unique().notNull(),
  
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});



//export type InsertPost = typeof postsTable.$inferInsert;
//export type SelectPost = typeof postsTable.$inferSelect;
