ALTER TABLE "public"."page"
  DROP CONSTRAINT "page_draft_id_order_ended_at_key";

ALTER TABLE "public"."page"
  DROP COLUMN "order";

ALTER TABLE "public"."note"
  ADD COLUMN "title" text;

ALTER TABLE "public"."note"
  ALTER COLUMN "title" DROP NOT NULL;

ALTER TABLE "public"."note"
  ADD COLUMN "content" jsonb;

ALTER TABLE "public"."note"
  ALTER COLUMN "content" DROP NOT NULL;

ALTER TABLE "public"."draft"
  ADD COLUMN "content" jsonb;

ALTER TABLE "public"."draft"
  ALTER COLUMN "content" DROP NOT NULL;

ALTER TABLE "public"."note"
  DROP CONSTRAINT "note_draft_id_fkey";

