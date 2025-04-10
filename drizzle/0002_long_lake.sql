CREATE TABLE "hotels_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"title" text NOT NULL,
	"handle" text,
	"description" text,
	"location" text NOT NULL,
	"isFavorite" boolean NOT NULL,
	"isDeleted" boolean NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "hotels_table_user_id_unique" UNIQUE("user_id")
);
