ALTER TABLE "bookings_table" ADD COLUMN "location" text NOT NULL;--> statement-breakpoint
ALTER TABLE "bookings_table" ADD COLUMN "check_in" timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE "bookings_table" ADD COLUMN "check_out" timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE "bookings_table" ADD COLUMN "number_guests" integer NOT NULL;