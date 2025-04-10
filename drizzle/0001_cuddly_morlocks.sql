CREATE TABLE "accommodation_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"handle" text,
	"description" text NOT NULL,
	"image" text NOT NULL,
	"price" numeric(15, 6) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
