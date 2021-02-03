CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE "public"."page" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid (),
  "draft_id" uuid NOT NULL,
  "content" jsonb, 
  "created_at" timestamptz NOT NULL DEFAULT now(), 
  "updated_at" timestamptz, 
  "ended_at" timestamptz, 
  PRIMARY KEY ("id"), 
  FOREIGN KEY ("draft_id") REFERENCES "public"."draft" ("id") ON UPDATE RESTRICT ON DELETE RESTRICT, UNIQUE ("id")
);

ALTER TABLE "public"."note"
  ALTER COLUMN "updated_at" DROP DEFAULT;

ALTER TABLE "public"."note"
  ALTER COLUMN "updated_at" DROP NOT NULL;

ALTER TABLE "public"."note"
  ADD COLUMN "draft_id" uuid NULL;

ALTER TABLE "public"."note"
  ADD COLUMN "static_link" text NULL;

ALTER TABLE "public"."note"
  ADD COLUMN "preview" jsonb NOT NULL DEFAULT '{"title": "<untitled note>", "description": "<...>"}'::jsonb;
