ALTER TABLE "public"."note"
  ADD CONSTRAINT "note_draft_id_fkey" FOREIGN KEY ("draft_id") REFERENCES "public"."draft" ("id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "public"."note"
  ADD CONSTRAINT "uq_note_draft_id_ended_at" UNIQUE ("draft_id", "ended_at");

ALTER TABLE "public"."draft"
  DROP COLUMN "content" CASCADE;

ALTER TABLE "public"."note"
  DROP COLUMN "content" CASCADE;

ALTER TABLE "public"."note"
  DROP COLUMN "title" CASCADE;

ALTER TABLE "public"."page"
  ADD COLUMN "order" integer NOT NULL DEFAULT 0;

-- CREATE UNIQUE INDEX ix_page_draft_id_order_ended_at_key ON "public"."page" ("draft_id", "order")
-- WHERE
--   ended_at IS NULL;

