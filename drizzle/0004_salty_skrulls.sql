CREATE TABLE "hotels_picture_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"hotel_id" integer,
	"url" text NOT NULL,
	"isDeleted" boolean NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "hotels_picture_table_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
ALTER TABLE "hotels_picture_table" ADD CONSTRAINT "hotels_picture_table_hotel_id_hotels_table_id_fk" FOREIGN KEY ("hotel_id") REFERENCES "public"."hotels_table"("id") ON DELETE no action ON UPDATE no action;