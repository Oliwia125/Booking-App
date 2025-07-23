CREATE TABLE "hotels_room_features_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"hotel_room_id" integer,
	"room_price" numeric NOT NULL,
	"room_name" text NOT NULL,
	"room_type" text NOT NULL,
	"room_view" text NOT NULL,
	"room_location" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "hotels_room_features_table_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
ALTER TABLE "hotels_room_features_table" ADD CONSTRAINT "hotels_room_features_table_hotel_room_id_hotels_room_table_id_fk" FOREIGN KEY ("hotel_room_id") REFERENCES "public"."hotels_room_table"("id") ON DELETE no action ON UPDATE no action;