CREATE TABLE "hotels_room_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"hotel_id" integer,
	"title" text NOT NULL,
	"handle" text,
	"description" text,
	"isDeleted" boolean NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "hotels_room_table_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
ALTER TABLE "hotels_room_table" ADD CONSTRAINT "hotels_room_table_hotel_id_hotels_table_id_fk" FOREIGN KEY ("hotel_id") REFERENCES "public"."hotels_table"("id") ON DELETE no action ON UPDATE no action;