UPDATE
  note
SET
  draft_id = 'f7d154e8-eddc-4225-a827-8e18e7512c39'
WHERE
  id = 'e5c2c440-529a-4570-9620-c8d51c904db3';

UPDATE
  note
SET
  draft_id = '32f1a05e-320d-481d-9b94-7bc701e665a1'
WHERE
  id = '1d41de8e-9378-40e5-ac98-293ef81518e1';

UPDATE
  note
SET
  draft_id = '47835add-a028-4048-ba8e-8cf41b587555'
WHERE
  id = '93dcda1c-0387-4602-b874-7d59a75a043b';

UPDATE
  note
SET
  draft_id = 'eae5facd-55b2-4ed1-a3f7-8a19ade6d4b3'
WHERE
  id = '7cba79c0-1e16-46a4-acfb-7b38a0c62363';

UPDATE
  note
SET
  draft_id = 'fd78595f-3a88-4402-b0d9-76b0f63f8836'
WHERE
  id = 'f7ae56b4-fe5b-46db-b4f2-bb8ee9f6e2a4';

UPDATE
  note
SET
  draft_id = 'd0723055-c413-4736-8543-7ee324ca85c8'
WHERE
  id = 'ca21c809-fff4-4a25-832c-a719731b0c52';

UPDATE
  note
SET
  draft_id = '4e133edb-dc81-4a67-9fc4-649885313ca4'
WHERE
  id = 'ef45f77e-f973-47a5-ba41-a12450ccec3d';

UPDATE
  note
SET
  static_link = 'note/' || "name"
RETURNING
  id;

UPDATE
  note
SET
  preview = jsonb_build_object('title', title, 'description', jsonb_path_query_first(("content" -> 'ops') - 0, '$.insert ? (@ != "\n")'), 'image', jsonb_path_query_first("content", '$.ops.insert.blockFigure.image'))
RETURNING
  id;

--------------------------------------------------
INSERT INTO draft (
  id,
  author_id,
  "content",
  created_at,
  updated_at)
SELECT
  draft_id,
  author_id,
  "content",
  created_at,
  updated_at
FROM
  note;

INSERT INTO page (
  draft_id,
  "content",
  created_at,
  updated_at)
SELECT
  id,
  "content",
  created_at,
  updated_at
FROM
  draft;

