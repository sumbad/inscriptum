ALTER TABLE "public"."note"
  DROP COLUMN "static_link";

ALTER TABLE "public"."note"
  DROP COLUMN "preview";

ALTER TABLE "public"."note"
  DROP COLUMN "draft_id";

ALTER TABLE ONLY "public"."note"
  ALTER COLUMN "updated_at" SET DEFAULT now();

ALTER TABLE "public"."note"
  ALTER COLUMN "updated_at" SET NOT NULL;

DROP TABLE "public"."page";

