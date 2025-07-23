ALTER TABLE "hotels_room_table" ADD COLUMN "room_name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "hotels_room_features_table" DROP COLUMN "room_name";